import Anthropic from "@anthropic-ai/sdk";

export interface LandingPage {
  coreMassDesire: {
    statement: string;
    painPoints: string[];
    desiredOutcomes: string[];
    proofElements: string[];
  };
  hero: {
    trustBadge: string;
    headline: string;
    subheadline: string;
    bullets: string[];
    cta: string;
  };
  transformation: {
    paragraphs: string[];
    cta: string;
  };
  valueProps: Array<{
    headline: string;
    explanation: string;
    betterThan: string;
  }>;
  howItWorks: Array<{
    step: number;
    name: string;
    explanation: string;
    visualDirection: string;
  }>;
  testimonials: Array<{
    story: string;
    result: string;
    timeframe: string;
    name: string;
  }>;
  objections: {
    doesItWork: string;
    isSafe: string;
    worthThePrice: string;
    betterThanAlternatives: string;
  };
  finalClose: {
    headline: string;
    paragraphs: string[];
    cta: string;
  };
}

function getMockLanding(productName: string): LandingPage {
  const p = productName || "this product";
  return {
    coreMassDesire: {
      statement: `To finally feel confident and in control without constantly worrying or wasting money on things that don't work`,
      painPoints: [
        `Tired of solutions that promise results but deliver nothing`,
        `Frustrated by wasting time and money on products that aren't built for real people`,
        `Exhausted from the endless trial and error with no clear path forward`,
      ],
      desiredOutcomes: [
        `A simple, reliable solution that actually works the first time`,
        `Real, visible results without complicated routines or hidden costs`,
        `The confidence that comes from finally solving the problem for good`,
      ],
      proofElements: [
        `Customers consistently report noticeable results within the first week`,
        `Verified buyers describe it as "the only thing that actually worked"`,
        `Over 90% of reviewers say they'd recommend it to a close friend`,
      ],
    },
    hero: {
      trustBadge: `⭐⭐⭐⭐⭐ 4.9 from 2,847 verified customers`,
      headline: `Finally — A Solution That Actually Does What It Promises`,
      subheadline: `${p} delivers real results for real people. No complicated setup, no empty promises, no wasted money.`,
      bullets: [
        `Works from day one — no learning curve, no frustration`,
        `Built for everyday use, not a lab setting`,
        `Thousands of people have already made the switch`,
        `Backed by a 30-day no-questions-asked guarantee`,
      ],
      cta: `Get ${p} Today`,
    },
    transformation: {
      paragraphs: [
        `You've been here before. You find something that sounds promising, you try it, and two weeks later you're back to square one — frustrated, out of pocket, and wondering if anything actually works. That cycle is exhausting. And the worst part? You start to believe the problem is you.`,
        `It's not you. It's that most products are designed to look good on a shelf, not to solve the actual problem. ${p} was built the other way around — starting with real people, real feedback, and real results. People who've been exactly where you are and needed something that simply works.`,
        `The difference shows up fast. Not in a dramatic, overnight way — but in the small moments where you realise you haven't had to think about it. Where the problem that used to follow you around just… isn't there anymore. That's what real results feel like.`,
      ],
      cta: `Start Your Transformation — Order Today`,
    },
    valueProps: [
      {
        headline: `Results You Can See and Feel`,
        explanation: `${p} is designed to deliver outcomes you'll notice — not after months of hoping, but within the first days of use. Every feature exists for one reason: to make a real difference in your day.`,
        betterThan: `Unlike alternatives that require weeks of consistent use before showing any sign of working, this starts delivering from the moment you use it.`,
      },
      {
        headline: `No Complicated Setup Required`,
        explanation: `Open it, use it, done. ${p} was built to fit into your life as it actually is — not as it would need to be if you had an hour to spare every morning.`,
        betterThan: `Other solutions come with instruction manuals and learning curves. This one works the way your life works.`,
      },
      {
        headline: `Designed for Real, Everyday People`,
        explanation: `Every decision in ${p}'s design started with one question: does this work for someone with a full life, limited time, and no patience for things that don't deliver?`,
        betterThan: `Most products are tested in ideal conditions. This was tested in the real world — and that's the version you're getting.`,
      },
      {
        headline: `Backed by a Risk-Free Guarantee`,
        explanation: `If ${p} doesn't deliver what we've promised, you get your money back. No hoops, no email chains, no 37-day processing times. Just a refund.`,
        betterThan: `The competitors offering "satisfaction guaranteed" usually bury the returns process under enough friction that most people give up. We made ours simple on purpose.`,
      },
    ],
    howItWorks: [
      {
        step: 1,
        name: `Order in 60 Seconds`,
        explanation: `Choose your quantity, complete checkout, and you're done. Simple, secure, and fast — because your time matters.`,
        visualDirection: `Clean product image with a single CTA button, minimal UI, progress indicator`,
      },
      {
        step: 2,
        name: `Arrives Ready to Use`,
        explanation: `${p} ships fast and arrives ready to go — no assembly, no setup, no frustration before you've even started.`,
        visualDirection: `Unboxing moment, clean packaging reveal, product in hand`,
      },
      {
        step: 3,
        name: `Use It in Your Daily Life`,
        explanation: `Fits naturally into what you're already doing. No new habits, no disrupted routines — just an easy addition that works.`,
        visualDirection: `Lifestyle shot of product being used naturally in a real environment`,
      },
      {
        step: 4,
        name: `Notice the Difference`,
        explanation: `Results that speak for themselves — not in weeks, but in days. The kind of change that makes you wonder why you waited.`,
        visualDirection: `Before/after comparison or satisfied customer expression, bright and clean aesthetic`,
      },
    ],
    testimonials: [
      {
        story: `I'd tried three other products before this one. None of them came close. Within five days of using ${p} I noticed something actually shifting, and by the second week I was convinced.`,
        result: `The problem I'd been dealing with for two years is just... gone.`,
        timeframe: `Results in 5 days`,
        name: `Sarah K., verified buyer`,
      },
      {
        story: `Honestly I bought it half-expecting to return it. I've been burned before and I was ready to be burned again. But I'm still using it three months later and I've since bought two more for family members.`,
        result: `Best purchase I've made this year — and that's not something I say lightly.`,
        timeframe: `Still using after 3 months`,
        name: `Marcus T., verified buyer`,
      },
      {
        story: `I was sceptical because it seemed too simple. How could something so straightforward solve something I'd been struggling with for so long? But simple is apparently exactly what I needed.`,
        result: `Wish I'd found this two years ago.`,
        timeframe: `Noticeable results in week one`,
        name: `Priya L., verified buyer`,
      },
    ],
    objections: {
      doesItWork: `The short answer: yes, for the vast majority of people. The longer answer: ${p} has been used by thousands of verified customers, and the results speak for themselves. Look at the reviews — not the star rating, the actual words people use. That's your answer.`,
      isSafe: `${p} was designed with everyday safety as a baseline requirement, not an afterthought. It's been tested for regular use and meets all relevant standards. If you have a specific concern, the full specification is available on the product page.`,
      worthThePrice: `Consider what you've already spent trying to solve this problem. Now consider what it costs to solve it for good. ${p} is priced to be fair — not artificially inflated, not suspiciously cheap. And with the 30-day guarantee, the only real risk is continuing to do nothing.`,
      betterThanAlternatives: `Most alternatives either over-engineer a simple problem or under-deliver on a complex one. ${p} does one thing: works. It doesn't try to impress you with features you'll never use. It focuses entirely on the outcome you actually care about.`,
    },
    finalClose: {
      headline: `The Version of This Problem Where You've Already Solved It`,
      paragraphs: [
        `Imagine checking in with yourself six weeks from now. The issue that sent you here today isn't something you're carrying around anymore. You've stopped searching for alternatives. You've stopped wondering if something better exists. You just sorted it — with ${p} — and moved on with your life.`,
        `That version of events is available to you right now. The only thing between here and there is one decision. And if it doesn't work for you, you get your money back in full. There's nothing to lose except the time you spend not deciding.`,
      ],
      cta: `Yes — I'm Ready. Get ${p} Now`,
    },
  };
}

export async function POST(req: Request) {
  const { productName, productDescription, customerReviews, targetAudience, price } =
    await req.json();

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ landing: getMockLanding(productName), _demo: true });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const prompt = `You are a world-class direct response copywriter and conversion strategist.

Analyze the inputs below and generate a HIGH-CONVERTING landing page.

## INPUTS:
Product Name: ${productName}

Product Description:
${productDescription}

Customer Reviews:
${customerReviews || "No reviews provided — infer based on the product description."}

Target Audience: ${targetAudience || "General consumer audience"}

Price: ${price || "Not specified"}

---

## INSTRUCTIONS

Follow this exact structure and return ONLY a valid JSON object — no markdown, no explanation, no extra text.

### STEP 1 — Analyze the reviews and extract:
- Core Mass Desire: "To [ultimate emotional outcome] without [main pain or frustration]"
- Top 3 Pain Points
- Top 3 Desired Outcomes
- 3 Proof Elements from reviews (or plausible inferences if no reviews)

### STEP 2 — Generate ALL sections:
- Hero Section: trust badge, headline (big promise), subheadline (removes main objection), 4 benefit bullets, CTA
- Transformation Section: 3 paragraphs (before-state pain, discovery/shift, after-state relief), CTA line
- 4 Value Proposition blocks: bold headline (4-7 words), 2-3 sentence explanation, why it's better than alternatives
- How It Works: 4 steps with name, explanation, visual direction
- 3 Social Proof testimonials: short story, specific result, timeframe, name
- Objection Handling: answer 4 objections clearly (does it work / is it safe / is it worth the price / why better than alternatives)
- Final Close: emotional headline, 2 paragraphs (reinforce desire + urgency), strong CTA

## TONE RULES
- Write like a human, not AI
- Simple, clear language
- No generic filler phrases
- No AI mentions
- Every sentence pushes toward buying
- Do NOT invent data not supported by the inputs

## OUTPUT FORMAT — Return ONLY this JSON (no other text):
{
  "coreMassDesire": {
    "statement": "To ... without ...",
    "painPoints": ["...", "...", "..."],
    "desiredOutcomes": ["...", "...", "..."],
    "proofElements": ["...", "...", "..."]
  },
  "hero": {
    "trustBadge": "⭐ ... from real customers",
    "headline": "...",
    "subheadline": "...",
    "bullets": ["...", "...", "...", "..."],
    "cta": "..."
  },
  "transformation": {
    "paragraphs": ["...", "...", "..."],
    "cta": "..."
  },
  "valueProps": [
    { "headline": "...", "explanation": "...", "betterThan": "..." },
    { "headline": "...", "explanation": "...", "betterThan": "..." },
    { "headline": "...", "explanation": "...", "betterThan": "..." },
    { "headline": "...", "explanation": "...", "betterThan": "..." }
  ],
  "howItWorks": [
    { "step": 1, "name": "...", "explanation": "...", "visualDirection": "..." },
    { "step": 2, "name": "...", "explanation": "...", "visualDirection": "..." },
    { "step": 3, "name": "...", "explanation": "...", "visualDirection": "..." },
    { "step": 4, "name": "...", "explanation": "...", "visualDirection": "..." }
  ],
  "testimonials": [
    { "story": "...", "result": "...", "timeframe": "...", "name": "..." },
    { "story": "...", "result": "...", "timeframe": "...", "name": "..." },
    { "story": "...", "result": "...", "timeframe": "...", "name": "..." }
  ],
  "objections": {
    "doesItWork": "...",
    "isSafe": "...",
    "worthThePrice": "...",
    "betterThanAlternatives": "..."
  },
  "finalClose": {
    "headline": "...",
    "paragraphs": ["...", "..."],
    "cta": "..."
  }
}`;

  try {
    const message = await client.messages.create({
      model: "claude-opus-4-6",
      max_tokens: 4096,
      messages: [{ role: "user", content: prompt }],
    });

    const raw = (message.content[0] as { type: string; text: string }).text;
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error("No JSON in response");

    const landing: LandingPage = JSON.parse(jsonMatch[0]);
    return Response.json({ landing });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Generation failed";
    return Response.json({ error: message }, { status: 500 });
  }
}
