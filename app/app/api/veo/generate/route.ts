import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json(
      { error: "GEMINI_API_KEY is not configured. Add it to .env.local to enable video generation." },
      { status: 503 }
    );
  }

  const { prompt } = await req.json();
  if (!prompt?.trim()) {
    return Response.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const operation = await ai.models.generateVideos({
      model: "veo-3.0-generate-001",
      prompt: prompt.trim(),
      config: {
        aspectRatio: "9:16",
        numberOfVideos: 1,
        durationSeconds: 8,
      },
    });

    return Response.json({ operationName: operation.name });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to start video generation";
    return Response.json({ error: message }, { status: 500 });
  }
}
