import Anthropic from "@anthropic-ai/sdk";
// Client is instantiated per-request when API key is available

function getMockData(productName: string) {
  return {
    videoAds: [
      {
        id: 1,
        type: "Problem-Solution",
        hook: `Are you TIRED of dealing with [common problem]? This ${productName} changed everything for me.`,
        sceneBreakdown: `Scene 1 (0-3s): Close-up of the problem — frustrated person dealing with the issue. Scene 2 (3-8s): Discovery moment — person finds ${productName}. Scene 3 (8-20s): Using the product, showing ease and results. Scene 4 (20-27s): Happy result, transformed situation. Scene 5 (27-30s): CTA with product and offer.`,
        visuals: `Scene 1: Shaky cam close-up of person visibly frustrated, dark lighting. Scene 2: Bright moment — package reveal, eyes light up. Scene 3: Hands-on demo, smooth product interaction. Scene 4: Smiling person in clean environment, side-by-side if possible. Scene 5: Product hero shot with text overlay.`,
        script: `"I've been struggling with this for YEARS. Nothing worked — until I found ${productName}. I literally ordered it on a whim and oh my god... [pause for effect] ...it ACTUALLY works. I've been using it every single day for 3 weeks. If you're dealing with the same thing, trust me — just get it. Link in bio."`,
        cameraMovement: `Open with handheld close-up (problem moment), cut to medium shot for product discovery, smooth slow push-in during demo, hold on reaction shot, end with static product close-up`,
        lighting: `Problem scenes: moody, slightly underexposed, cooler tones. Solution/happy scenes: warm, bright, golden hour feel — 5500K with soft fill light`,
        background: `Home or relatable environment (kitchen counter, bathroom, desk). Clean but lived-in. Neutral walls. Product should stand out.`,
        mood: `Empathetic and relatable → relieved and excited → confident and aspirational. Authentic UGC energy, not overly polished`,
        cta: `"Get yours at [link] — use code SAVE20 for 20% off today only. I promise you won't regret it. 🔥"`
      },
      {
        id: 2,
        type: "Emotional",
        hook: `I bought this for my mom and she literally cried. Here's why ${productName} is more than just a product.`,
        sceneBreakdown: `Scene 1 (0-3s): Emotional reaction shot — real tears or genuine smile. Scene 2 (3-10s): Backstory — why this was needed. Scene 3 (10-22s): The gift/purchase moment, genuine reaction. Scene 4 (22-28s): Life after — the impact. Scene 5 (28-30s): Soft CTA with emotional anchor.`,
        visuals: `Warm, intimate cinematography. Candid moments, not staged. Natural lighting. Faces prominent. Product appears naturally in the story.`,
        script: `"My mom has been struggling with [problem] for as long as I can remember. When I found ${productName}, I immediately knew I had to get it for her. When she opened it... [emotional pause] ...she said it was the first time in years she felt [relief/joy/comfort]. That moment was worth everything to me."`,
        cameraMovement: `Slow, deliberate movements. Lots of holds on faces. Gentle push-ins on emotional moments. No quick cuts — let the emotion breathe.`,
        lighting: `Warm golden tones throughout. Soft, flattering. Natural window light where possible. Candles or warm lamps for cozy feel.`,
        background: `Home setting — living room, kitchen, a place with sentimental feel. Personal items visible. Authentic, not styled.`,
        mood: `Deep, genuine emotion. Warmth, love, gratitude. Not sappy — real and raw. Viewers should feel they're witnessing a real moment.`,
        cta: `"Give someone you love the gift of [benefit]. Shop now — free gift wrapping on all orders. Link in bio. 💛"`
      },
      {
        id: 3,
        type: "Curiosity",
        hook: `I tried this weird ${productName} everyone's been talking about. The results were NOT what I expected...`,
        sceneBreakdown: `Scene 1 (0-3s): Skeptical face, holding product, raised eyebrow. Scene 2 (3-8s): "Let me try this..." — unboxing or setup. Scene 3 (8-20s): Using the product, expressions shifting from doubt to surprise. Scene 4 (20-27s): SHOCKING result or unexpected discovery. Scene 5 (27-30s): "Okay... I get it now." — CTA.`,
        visuals: `Face-forward content. Lots of reaction shots. Before/during/after structure. Text overlays teasing what's coming. Use zoom-ins on surprising moments.`,
        script: `"Okay so I've been seeing ${productName} EVERYWHERE and honestly I thought it was just another gimmick. So I ordered it just to prove it didn't work. [Beat] ...I owe everyone an apology. This thing actually [does incredible thing]. I'm genuinely shocked. How is this not in everyone's home?"`,
        cameraMovement: `Start medium, zoom in for skeptical face, pull back for reveal, zoom into product/result, end with creator talking direct to camera`,
        lighting: `Bright, clinical for the "test" feel. Shift to warmer when the product works. Creates subconscious shift in viewer mood.`,
        background: `Clean, minimal background that doesn't distract from reactions. Kitchen counter or desk works well. The product is the star.`,
        mood: `Skeptical → surprised → converted. Playful but genuine. Viewers should feel they're getting an "honest review" even though it's clearly positive.`,
        cta: `"Link in bio — they're currently running a buy 2 get 1 free deal. Don't sleep on this. I wish I found it sooner. 👀"`
      },
      {
        id: 4,
        type: "Before-After",
        hook: `This is what my [situation] looked like BEFORE vs AFTER using ${productName} for 30 days.`,
        sceneBreakdown: `Scene 1 (0-3s): Dramatic split screen or "BEFORE" title card with problem state. Scene 2 (3-10s): Walk through the before situation, pain points. Scene 3 (10-15s): "Then I found ${productName}" transition. Scene 4 (15-25s): The 30-day journey compressed, showing consistent use. Scene 5 (25-30s): AFTER reveal — dramatic transformation CTA.`,
        visuals: `Red-toned or desaturated before clips. Green-toned or saturated after clips. Side-by-side comparisons where possible. Text overlays: "Day 1," "Day 15," "Day 30." Dramatic reveal moment.`,
        script: `"30 days ago I was [struggling with problem]. Every single day felt like [negative experience]. Then I started using ${productName} and here's what actually happened — day by day. [Walk through journey] ...I can't believe this is my life now. 30 days. That's all it took. If you're where I was, this is for you."`,
        cameraMovement: `Before: Static, unpolished shots. After: Smooth, confident movement. The camera quality shift mirrors the transformation. Slow-mo for the big reveal.`,
        lighting: `Before: Flat, cold, unflattering. After: Warm, bright, golden hour vibes. The contrast should be stark and obvious.`,
        background: `Same location for before and after creates the strongest contrast. Shows how the product changed the SAME space/situation.`,
        mood: `Before: Relatable struggle, viewers nodding. After: Aspirational, joyful, inspiring. Creates a "this could be me" moment.`,
        cta: `"Results may vary but mine were real. Start your 30-day journey — link in bio. They're doing 40% off right now. 🔥"`
      },
      {
        id: 5,
        type: "Fast Dropshipping",
        hook: `POV: You just discovered the product that EVERYONE is going to be talking about in 2025.`,
        sceneBreakdown: `Scene 1 (0-2s): Fast hook text overlay, trending audio. Scene 2 (2-6s): Quick product showcase — multiple angles, fast cuts. Scene 3 (6-12s): 3 key benefits flashing on screen. Scene 4 (12-18s): Social proof — numbers, reviews, before/after. Scene 5 (18-22s): Urgency/scarcity. Scene 6 (22-25s): Strong CTA.`,
        visuals: `High-energy, fast-paced cuts (every 1-2 seconds). Product in multiple settings. Lifestyle shots. User-generated feel. Trending effects and transitions. Bold text overlays throughout.`,
        script: `"[Fast] Everyone is buying this. [Cut] ${productName} is literally going viral for a reason. [Cut] It [benefit 1]. [Cut] It [benefit 2]. [Cut] And it [benefit 3]. [Cut] Over 10,000 five-star reviews. [Cut] Currently 50% off. [Cut] Link in bio before it sells out AGAIN."`,
        cameraMovement: `All fast cuts. Each shot max 2 seconds. Mix of handheld, product close-ups, lifestyle. Match cuts to beat of trending audio.`,
        lighting: `Bright, punchy, high contrast. RGB accents if on-brand. Clean white or colored backgrounds for product shots. Bright natural light for lifestyle.`,
        background: `Varies quickly — white studio, lifestyle environment, outdoor. Quick transitions keep energy high. Background diversity shows versatility.`,
        mood: `FOMO-inducing, high energy, exciting. Viewer should feel they're missing out if they don't act RIGHT NOW. Urgency is the dominant emotion.`,
        cta: `"LIMITED TIME: Use code VIRAL for 50% off. 🔥 Link in bio. Ships in 24 hours. Don't miss this one."`
      }
    ],
    imageAds: [
      {
        id: 1,
        type: "Product in Hand",
        layout: `Central composition: lifestyle model holding ${productName} prominently in foreground. Rule of thirds with product at power point. Negative space on left for text overlays. Model face partially visible or cropped at shoulder for aspirational feel.`,
        backgroundStyle: `Clean, blurred bokeh background. Warm, soft-focus interior or outdoor setting. Depth of field creates professional separation. No distracting elements.`,
        colorPalette: `Warm neutrals: cream (#F5F0E8), warm white (#FFFDF7), with product colors as accent. Golden hour warmth throughout. Cohesive, Instagram-worthy palette.`,
        headline: `STOP STRUGGLING WITH [PROBLEM]`,
        subheadline: `Join 50,000+ people who discovered the easier way`,
        badge: `⭐ #1 BESTSELLER`,
        moodAndStyle: `Authentic, aspirational lifestyle. Premium but approachable. UGC-inspired yet polished. The kind of photo a happy customer would organically post.`,
        aiPrompt: `Lifestyle product photography, woman holding ${productName} in warm natural light, soft bokeh background, golden hour warm tones, shallow depth of field, authentic UGC aesthetic, cream and warm white color palette, high quality commercial photography, Canon 5D Mark IV shot`
      },
      {
        id: 2,
        type: "Before-After",
        layout: `Bold split-screen design. Left panel: "BEFORE" state (problem). Right panel: "AFTER" state (solution). Strong vertical divider line or diagonal split. ${productName} product shot centered at the split point. Text overlays in each panel.`,
        backgroundStyle: `Left side: desaturated, grayish, slightly dark. Right side: bright, vibrant, warm. The contrast should be immediately striking.`,
        colorPalette: `Before: muted grays (#9E9E9E), desaturated. After: vibrant brand colors, warm gold (#F4A233), success green (#4CAF50). The color shift is the story.`,
        headline: `THE DIFFERENCE IS REAL`,
        subheadline: `See why 10,000+ customers can't stop raving`,
        badge: `✅ CLINICALLY PROVEN`,
        moodAndStyle: `Bold, graphic, high-impact. Designed to stop the scroll. Data-driven trust meets emotional aspiration. Clean and authoritative.`,
        aiPrompt: `Split-screen before and after comparison advertisement for ${productName}, left side desaturated gray showing problem state, right side bright warm vibrant showing solution, bold typography overlays, product centered at the divide, high contrast commercial photography, compelling transformation visual`
      },
      {
        id: 3,
        type: "Clean Brand",
        layout: `Minimalist centered product shot on pure white or solid color background. Product occupies 40% of frame, perfectly lit with subtle shadow. Clean typography above and below. Ample white space. Badge in top corner.`,
        backgroundStyle: `Pure white (#FFFFFF) or light pastel. Professional studio lighting. Subtle product shadow for depth. No distractions. The product commands full attention.`,
        colorPalette: `Clean whites, product's brand colors as accent. One bold accent color for CTA and badge. Premium and confident. Think Apple-level minimalism.`,
        headline: `ENGINEERED FOR RESULTS`,
        subheadline: `Free shipping on orders over $50 · 30-day money back guarantee`,
        badge: `🔥 50% OFF TODAY`,
        moodAndStyle: `Premium, minimal, confident. High-end brand aesthetic. Speaks to quality and trustworthiness. The kind of ad from a brand that doesn't need to shout.`,
        aiPrompt: `Minimalist product photography of ${productName} on pure white background, studio lighting with subtle shadow, premium Apple-style aesthetic, clean composition, high-end commercial photography, perfect lighting, 4K resolution, professional product advertisement`
      },
      {
        id: 4,
        type: "Lifestyle",
        layout: `Environmental storytelling: ${productName} naturally integrated into an aspirational lifestyle scene. Product visible but scene tells the bigger story. Wide to medium shot. Text overlay in clear area of image. Feels like a magazine editorial.`,
        backgroundStyle: `Curated lifestyle environment: modern home, outdoor café, gym, beach — wherever the target audience aspires to be. Organic, not overly staged.`,
        colorPalette: `Matches the lifestyle setting. Warm and inviting for home; energetic and vibrant for active; sophisticated for professional. Consistent mood throughout.`,
        headline: `LIVE THE LIFE YOU DESERVE`,
        subheadline: `${productName} — because you've earned it`,
        badge: `⚡ LIMITED STOCK`,
        moodAndStyle: `Aspirational, editorial, inspirational. Viewers should feel they're seeing their best self using this product. Desire-focused, not feature-focused.`,
        aiPrompt: `Aspirational lifestyle photography featuring ${productName} integrated naturally into an upscale modern setting, editorial magazine style, warm natural lighting, golden hour, bokeh background, authentic candid feel, high-end commercial photography, wide aperture, cinematic composition`
      },
      {
        id: 5,
        type: "Testimonial",
        layout: `Social proof focused design. Customer photo or avatar with star rating prominently displayed. Quote in large, readable typography. Product image in corner. Trust badges and review count. Feels like a real screenshot but polished.`,
        backgroundStyle: `Light, neutral background that doesn't distract from text. Subtle gradient from white to very light gray. Customer photo has slight border or frame to separate from background.`,
        colorPalette: `Trust-inducing blues and whites, star-rating gold (#FFD700), success green for checkmarks. Clean and credible. Avoid reds which signal caution.`,
        headline: `"This is the best purchase I've made all year"`,
        subheadline: `★★★★★ Verified Buyer · Join 10,000+ happy customers`,
        badge: `💯 VERIFIED REVIEW`,
        moodAndStyle: `Trustworthy, authentic, social-proof driven. Mimics the look of organic social content for familiarity. Credibility is the core emotion — this product is loved by real people.`,
        aiPrompt: `Testimonial advertisement design for ${productName}, customer review card with 5 star rating, real person photo avatar, quote typography prominent, clean white and blue trust colors, gold star rating elements, professional social media ad design, authentic review aesthetic`
      }
    ]
  };
}

export async function POST(req: Request) {
  try {
    const { productName, productDescription, targetAudience, productLink } =
      await req.json();

    if (!productName || !productDescription || !targetAudience) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // If no API key, return demo data so the app is usable out of the box
    if (!process.env.ANTHROPIC_API_KEY) {
      const mockData = getMockData(productName);
      return Response.json({ ...mockData, _demo: true });
    }

    const client = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const prompt = `You are an expert ecommerce ad copywriter and creative director specializing in high-converting video and image ads for dropshipping and ecommerce products.

Generate ad prompts for the following product:

Product Name: ${productName}
Product Description: ${productDescription}
Target Audience: ${targetAudience}
${productLink ? `Product Link: ${productLink}` : ""}

Generate exactly 5 VIDEO AD PROMPTS and 5 IMAGE AD PROMPTS.

For each VIDEO AD PROMPT, include ALL of the following fields:
- Type: (one of: Problem-Solution, Emotional, Curiosity, Before-After, Fast Dropshipping)
- Hook: (first 3 seconds - what grabs attention immediately)
- Scene Breakdown: (scene-by-scene description, at least 3-4 scenes)
- Visuals: (exactly what happens visually in each scene)
- Script/Voiceover: (what the person says - UGC style, conversational, authentic)
- Camera Movement: (specific camera directions)
- Lighting: (lighting style and mood)
- Background: (setting/environment)
- Mood: (emotional tone and energy)
- CTA: (call to action - specific and compelling)

For each IMAGE AD PROMPT, include ALL of the following fields:
- Type: (one of: Product in Hand, Before-After, Clean Brand, Lifestyle, Testimonial)
- Layout: (composition and arrangement)
- Background Style: (detailed background description)
- Color Palette: (specific colors and why)
- Headline: (main text overlay - bold and punchy)
- Subheadline: (supporting text)
- Badge: (e.g., "50% OFF", "FREE SHIPPING", "AS SEEN ON TV")
- Mood & Style: (overall aesthetic)
- Prompt for AI: (ready-to-use prompt for Midjourney/DALL-E/Stable Diffusion)

Return your response as a valid JSON object with this exact structure:
{
  "videoAds": [
    {
      "id": 1,
      "type": "Problem-Solution",
      "hook": "...",
      "sceneBreakdown": "...",
      "visuals": "...",
      "script": "...",
      "cameraMovement": "...",
      "lighting": "...",
      "background": "...",
      "mood": "...",
      "cta": "..."
    }
  ],
  "imageAds": [
    {
      "id": 1,
      "type": "Product in Hand",
      "layout": "...",
      "backgroundStyle": "...",
      "colorPalette": "...",
      "headline": "...",
      "subheadline": "...",
      "badge": "...",
      "moodAndStyle": "...",
      "aiPrompt": "..."
    }
  ]
}

Make the prompts extremely specific, high-converting, and ready to use directly in Nano Banana or any AI video/image tool. Focus on emotional triggers, urgency, and clear value propositions.`;

    const response = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 8000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const textContent = response.content.find((b) => b.type === "text");
    if (!textContent || textContent.type !== "text") {
      throw new Error("No text response from Claude");
    }

    // Extract JSON from the response
    const jsonMatch = textContent.text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("Could not parse JSON from response");
    }

    const data = JSON.parse(jsonMatch[0]);
    return Response.json(data);
  } catch (error) {
    console.error("Error generating ads:", error);
    return Response.json(
      { error: "Failed to generate ads. Please try again." },
      { status: 500 }
    );
  }
}
