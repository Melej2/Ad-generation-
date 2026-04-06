export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return Response.json({ error: "GEMINI_API_KEY not configured" }, { status: 503 });
  }

  const { videoUri } = await req.json();
  if (!videoUri) {
    return Response.json({ error: "videoUri is required" }, { status: 400 });
  }

  try {
    const upstream = await fetch(videoUri, {
      headers: { "x-goog-api-key": process.env.GEMINI_API_KEY },
    });

    if (!upstream.ok) {
      return Response.json(
        { error: `Upstream fetch failed: ${upstream.status}` },
        { status: 502 }
      );
    }

    const contentType = upstream.headers.get("Content-Type") ?? "video/mp4";
    const headers = {
      "Content-Type": contentType,
      "Content-Disposition": 'inline; filename="ad-video.mp4"',
      "Cache-Control": "no-store",
    };

    if (upstream.body) {
      return new Response(upstream.body, { headers });
    }

    const buffer = await upstream.arrayBuffer();
    return new Response(buffer, { headers });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Download failed";
    return Response.json({ error: message }, { status: 500 });
  }
}
