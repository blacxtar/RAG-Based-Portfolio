// lib/embed.js
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function getEmbedding(text) {
  const res = await client.embeddings.create({
    input: text,
    model: "text-embedding-3-small",
  });
  return res.data[0].embedding;
}
