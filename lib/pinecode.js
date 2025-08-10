// lib/pinecone.js
import { Pinecone } from "@pinecone-database/pinecone";

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

export const index = pc.Index("portfolio");

export async function uploadVector(vectors) {
  await index.upsert(vectors);
}

export async function queryVector(vector, top = 5) {
 

  const results = await index.query({
    topK: top,
    vector,
    includeMetadata: true,
  });

  return results.matches
    .map((m) => m.metadata?.text)
    .filter((text) => !!text);
}
