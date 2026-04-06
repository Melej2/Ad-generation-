import { GoogleGenAI, type GenerateVideosOperation } from "@google/genai";

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json({ error: "GEMINI_API_KEY not configured" }, { status: 503 });
  }

  const { operationName } = await req.json();
  if (!operationName) {
    return Response.json({ error: "operationName is required" }, { status: 400 });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const operation = await ai.operations.getVideosOperation({
      operation: { name: operationName } as GenerateVideosOperation,
    });

    if (operation.done) {
      const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
      return Response.json({ done: true, videoUri: videoUri ?? null });
    }

    return Response.json({ done: false });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to poll operation";
    return Response.json({ error: message }, { status: 500 });
  }
}
