// app/api/chat/route.js
import { getEmbedding } from "@/lib/embedding";
import { queryVector } from "@/lib/pinecode";
import OpenAI from "openai";


export const runtime = "nodejs"; // required for streaming in Next.js
export const dynamic = "force-dynamic"; // ensures fresh data

export async function POST(req) {
  const { question } = await req.json();

  if (!question) {
    return new Response(JSON.stringify({ error: "Question missing" }), {
      status: 400,
    });
  }

  try {
    // Get embedding for question
    const questionEmbedding = await getEmbedding(question);

    // Fetch similar chunks from Pinecone
    const similarChunks = await queryVector(questionEmbedding);
    const context = similarChunks.join("\n");

    // OpenAI streaming setup
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const stream = await client.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages: [
        {
          role: "system",
          content: `You are an assistant answering questions about Salman Ahmad's portfolio with this context: ${context}. Always try to answer in short,use good markdown may be with emojis and use bullet points.`,
        },
        { role: "user", content: question },
      ],
    });

    // Convert OpenAI stream to Next.js ReadableStream
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const token = chunk.choices[0]?.delta?.content || "";
            controller.enqueue(encoder.encode(token));
          }
        } catch (err) {
          controller.enqueue(encoder.encode("Something went wrong."));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Streaming error:", error);
    return new Response("Something went wrong.", { status: 500 });
  }
}
