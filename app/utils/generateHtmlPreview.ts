import type { LandingPage } from "@/app/api/generate-landing/route";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stars(n = 5): string {
  return "★".repeat(Math.min(5, Math.max(1, n)));
}

function initials(name: string): string {
  return name
    .split(/[\s,]+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function generateHtmlPreview(landing: LandingPage): string {
  const { hero, coreMassDesire, transformation, valueProps, testimonials, finalClose } = landing;

  const benefitIcons = ["⚡", "🔒", "✓", "🎯"];

  // ── pain point list ──────────────────────────────────────────────────────
  const painList = coreMassDesire.painPoints
    .map(
      (p) => `
      <li class="pain-item">
        <span class="pain-icon">✗</span>
        <span>${esc(p)}</span>
      </li>`
    )
    .join("");

  // ── benefit cards ────────────────────────────────────────────────────────
  const benefitCards = valueProps
    .map(
      (vp, i) => `
      <li class="benefit-card">
        <div class="benefit-icon">${benefitIcons[i] ?? "✓"}</div>
        <h3 class="benefit-heading">${esc(vp.headline)}</h3>
        <p class="benefit-body">${esc(vp.explanation)}</p>
        ${vp.betterThan ? `<p class="benefit-vs">${esc(vp.betterThan)}</p>` : ""}
      </li>`
    )
    .join("");

  // ── testimonial cards ────────────────────────────────────────────────────
  const testimonialCards = testimonials
    .map(
      (t) => `
      <li class="testimonial-card">
        <div class="testimonial-stars">${stars(5)}</div>
        <blockquote class="testimonial-quote">${esc(t.story)}</blockquote>
        <p class="testimonial-result">✓ ${esc(t.result)}</p>
        <footer class="testimonial-footer">
          <div class="testimonial-avatar">${esc(initials(t.name))}</div>
          <div>
            <cite class="testimonial-name">${esc(t.name)}</cite>
            <span class="testimonial-timeframe">${esc(t.timeframe)}</span>
          </div>
        </footer>
      </li>`
    )
    .join("");

  // ── transformation paragraphs ────────────────────────────────────────────
  const transformationParas = transformation.paragraphs
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(hero.headline)} — Landing Page Preview</title>
<style>

/* ── Reset ───────────────────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { font-size: 16px; scroll-behavior: smooth; }
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #0F0F0F;
  line-height: 1.6;
  background: #fff;
}
a { text-decoration: none; }
ul, ol { list-style: none; }
img { display: block; max-width: 100%; }

/* ── Variables ───────────────────────────────────────────────────────────── */
:root {
  --accent:       #4F46E5;
  --accent-dark:  #3730A3;
  --accent-light: #EEF2FF;
  --black:        #0F0F0F;
  --white:        #FFFFFF;
  --muted:        #6B7280;
  --border:       #E5E7EB;
  --surface:      #F9FAFB;
  --gold:         #F59E0B;
  --success:      #059669;
  --radius:       0.75rem;
  --radius-sm:    0.5rem;
  --gap:          4rem;
}

/* ── Preview banner ──────────────────────────────────────────────────────── */
.preview-banner {
  background: #1e1b4b;
  color: #a5b4fc;
  text-align: center;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── Container ───────────────────────────────────────────────────────────── */
.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }
@media (min-width: 768px) { .container { padding: 0 2rem; } }

/* ── Eyebrow ─────────────────────────────────────────────────────────────── */
.eyebrow {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 0.75rem;
}

/* ── Section headings ────────────────────────────────────────────────────── */
.section-heading {
  font-size: clamp(1.625rem, 4vw, 2.5rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}
.section-heading--center { text-align: center; }
.section-sub { font-size: 1.0625rem; color: var(--muted); margin-bottom: 2rem; }
.section-sub--center { text-align: center; }
.prose { font-size: 1.0625rem; color: #374151; line-height: 1.75; }
.prose p { margin-bottom: 1rem; }
.prose p:last-child { margin-bottom: 0; }

/* ── Buttons ─────────────────────────────────────────────────────────────── */
.btn {
  display: inline-flex; align-items: center; justify-content: center;
  gap: 0.5rem;
  font-size: 1rem; font-weight: 600;
  border-radius: var(--radius-sm);
  padding: 0.875rem 2rem;
  cursor: pointer; border: 2px solid transparent;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}
.btn--primary {
  background: var(--accent); color: var(--white); border-color: var(--accent);
  box-shadow: 0 4px 14px rgba(79,70,229,0.35);
}
.btn--primary:hover {
  background: var(--accent-dark); border-color: var(--accent-dark);
  box-shadow: 0 6px 20px rgba(79,70,229,0.45);
  transform: translateY(-1px);
}
.btn--secondary {
  background: transparent; color: var(--accent); border-color: var(--accent);
}
.btn--secondary:hover { background: var(--accent-light); }
.btn--lg { padding: 1rem 2.5rem; font-size: 1.0625rem; }

/* ── ① HERO ──────────────────────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  background: var(--black);
}
.hero__bg {
  position: absolute; inset: 0; z-index: 0;
  background: linear-gradient(135deg,
    #1e1b4b 0%,
    #312e81 30%,
    #4338ca 60%,
    #1e1b4b 100%);
}
.hero__bg::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
}
/* Grid overlay for texture */
.hero__bg::before {
  content: '';
  position: absolute; inset: 0; z-index: 1;
  background-image: radial-gradient(circle at 20% 30%, rgba(99,102,241,0.4) 0%, transparent 50%),
                    radial-gradient(circle at 80% 70%, rgba(79,70,229,0.3) 0%, transparent 50%);
}
.hero__content {
  position: relative; z-index: 1;
  padding: 5rem 1.5rem 4rem;
  max-width: 720px;
}
@media (min-width: 768px) { .hero__content { padding: 7rem 2rem 5rem; } }
.hero__badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(8px);
  color: #e0e7ff;
  font-size: 0.875rem; font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  margin-bottom: 1.5rem;
}
.hero__stars { color: var(--gold); letter-spacing: 0.05em; }
.hero__heading {
  font-size: clamp(2rem, 5.5vw, 3.5rem);
  font-weight: 800; line-height: 1.1;
  letter-spacing: -0.03em;
  color: var(--white);
  margin-bottom: 1rem;
}
.hero__sub {
  font-size: clamp(1rem, 2vw, 1.1875rem);
  color: rgba(255,255,255,0.8);
  margin-bottom: 1.75rem;
  max-width: 520px;
}
.hero__cta-group { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; }
.hero__trust {
  font-size: 0.8125rem;
  color: rgba(255,255,255,0.55);
}

/* ── Trust badges bar ────────────────────────────────────────────────────── */
.trust-bar {
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  padding: 0.875rem 1.5rem;
}
.trust-bar__inner {
  display: flex; flex-wrap: wrap; gap: 1rem 2rem;
  justify-content: center; align-items: center;
}
.trust-badge {
  display: flex; align-items: center; gap: 0.5rem;
  font-size: 0.8125rem; font-weight: 600; color: #374151;
}
.trust-badge__icon { font-size: 1rem; }

/* ── ② PROBLEM ───────────────────────────────────────────────────────────── */
.problem { padding: var(--gap) 1.5rem; }
.problem__inner { max-width: 680px; margin: 0 auto; text-align: center; }
.pain-list {
  margin-top: 2rem;
  display: flex; flex-direction: column; gap: 0.75rem;
  max-width: 500px; margin-left: auto; margin-right: auto;
  text-align: left;
}
.pain-item {
  display: flex; align-items: flex-start; gap: 0.875rem;
  background: #FEF2F2; border: 1px solid #FECACA;
  border-radius: var(--radius-sm);
  padding: 0.875rem 1.125rem;
  font-size: 1rem; color: #374151;
}
.pain-icon { color: #DC2626; font-weight: 700; flex-shrink: 0; margin-top: 0.05rem; }

/* ── ③ SOLUTION ──────────────────────────────────────────────────────────── */
.solution { padding: var(--gap) 1.5rem; background: var(--surface); }
.solution__grid {
  display: grid; gap: 3rem; align-items: center;
}
@media (min-width: 960px) {
  .solution__grid { grid-template-columns: 1fr 1fr; gap: 5rem; }
}
.solution__media {
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4/3;
  background: linear-gradient(135deg, #c7d2fe 0%, #818cf8 50%, #4f46e5 100%);
  position: relative;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 20px 60px rgba(79,70,229,0.2);
}
.solution__media__icon {
  font-size: 4rem; opacity: 0.3;
}
.solution__media__label {
  position: absolute; bottom: 1rem; left: 0; right: 0;
  text-align: center;
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.solution__copy { display: flex; flex-direction: column; gap: 1rem; }
.solution__copy .section-heading { margin-bottom: 0.5rem; }

/* ── ④ BENEFITS ──────────────────────────────────────────────────────────── */
.benefits { padding: var(--gap) 1.5rem; }
.benefits__grid {
  display: grid; gap: 1.25rem; margin-top: 2.5rem;
}
@media (min-width: 600px) { .benefits__grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 960px) { .benefits__grid { grid-template-columns: repeat(${Math.min(valueProps.length, 3)}, 1fr); } }
.benefit-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.75rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.5rem;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.benefit-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
.benefit-icon { font-size: 1.75rem; line-height: 1; color: var(--accent); margin-bottom: 0.25rem; }
.benefit-heading { font-size: 1.0625rem; font-weight: 700; color: var(--black); }
.benefit-body { font-size: 0.9375rem; color: #374151; line-height: 1.65; }
.benefit-vs {
  font-size: 0.8125rem; color: var(--muted); font-style: italic;
  margin-top: 0.5rem; padding-top: 0.75rem;
  border-top: 1px solid var(--border);
}

/* ── ⑤ REVIEWS ───────────────────────────────────────────────────────────── */
.reviews { padding: var(--gap) 1.5rem; background: var(--surface); }
.reviews__summary {
  display: flex; align-items: center; justify-content: center; gap: 1rem;
  margin: 0.5rem 0 2.5rem; flex-wrap: wrap;
}
.reviews__rating-big {
  font-size: 2.5rem; font-weight: 800; color: var(--black);
}
.reviews__rating-stars { color: var(--gold); font-size: 1.25rem; }
.reviews__count { font-size: 0.9375rem; color: var(--muted); }
.reviews__grid {
  display: grid; gap: 1.25rem;
}
@media (min-width: 768px) { .reviews__grid { grid-template-columns: repeat(3, 1fr); } }
.testimonial-card {
  background: var(--white); border: 1px solid var(--border);
  border-radius: var(--radius); padding: 1.75rem 1.5rem;
  display: flex; flex-direction: column; gap: 0.875rem;
}
.testimonial-stars { color: var(--gold); font-size: 1.0625rem; letter-spacing: 0.05em; }
.testimonial-quote {
  font-size: 0.9375rem; color: #374151; line-height: 1.7;
  font-style: italic; flex: 1;
}
.testimonial-result {
  font-size: 0.875rem; font-weight: 600; color: var(--success);
  background: #ECFDF5; border: 1px solid #A7F3D0;
  border-radius: 999px; padding: 0.3rem 0.875rem;
  display: inline-block;
}
.testimonial-footer {
  display: flex; align-items: center; gap: 0.75rem;
  padding-top: 0.875rem; border-top: 1px solid var(--border); margin-top: auto;
}
.testimonial-avatar {
  width: 2.25rem; height: 2.25rem; border-radius: 50%;
  background: var(--accent); color: white;
  font-size: 0.75rem; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.testimonial-name { display: block; font-size: 0.875rem; font-weight: 600; font-style: normal; }
.testimonial-timeframe { font-size: 0.8125rem; color: var(--muted); display: block; }

/* ── ⑥ FINAL CTA ─────────────────────────────────────────────────────────── */
.final-cta {
  background: var(--black);
  padding: 5rem 1.5rem;
}
@media (min-width: 768px) { .final-cta { padding: 7rem 2rem; } }
.final-cta__inner { max-width: 680px; margin: 0 auto; text-align: center; }
.final-cta__heading {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800; line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 1.25rem;
}
.final-cta__body {
  font-size: 1.0625rem; color: rgba(255,255,255,0.7);
  line-height: 1.75; margin-bottom: 1rem;
}
.final-cta__actions {
  display: flex; flex-direction: column; align-items: center;
  gap: 1rem; margin-top: 2.25rem;
}
.final-cta .btn--primary {
  padding: 1rem 2.5rem; font-size: 1.0625rem;
  box-shadow: 0 6px 24px rgba(79,70,229,0.5);
}
.trust-line {
  font-size: 0.875rem; color: rgba(255,255,255,0.45);
}

/* ── Sticky bar ──────────────────────────────────────────────────────────── */
.sticky-bar {
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 200;
  background: rgba(15,15,15,0.96); backdrop-filter: blur(8px);
  padding: 0.875rem 1.5rem;
  display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  box-shadow: 0 -4px 24px rgba(0,0,0,0.25);
  transform: translateY(100%);
  transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
}
.sticky-bar.visible { transform: translateY(0); }
.sticky-bar__text { font-size: 0.9375rem; font-weight: 600; color: #fff; }
@media (min-width: 768px) {
  .sticky-bar { justify-content: center; gap: 2rem; padding: 1rem 2rem; }
}

/* ── Divider ─────────────────────────────────────────────────────────────── */
.section-divider {
  display: flex; align-items: center; justify-content: center; gap: 0.5rem;
  padding: 2rem 0; text-align: center;
  font-size: 0.875rem; color: var(--muted); font-weight: 500;
}

</style>
</head>
<body>

<div class="preview-banner">⚡ Landing Page Preview — Generated by AdGen</div>

<!-- ①  HERO ──────────────────────────────────────────────────────────────── -->
<section class="hero" id="hero">
  <div class="hero__bg"></div>
  <div class="hero__content container">
    <div class="hero__badge">
      <span class="hero__stars">★★★★★</span>
      <span>${esc(hero.trustBadge)}</span>
    </div>
    <h1 class="hero__heading">${esc(hero.headline)}</h1>
    <p class="hero__sub">${esc(hero.subheadline)}</p>
    <div class="hero__cta-group">
      <a href="#final-cta" class="btn btn--primary btn--lg">${esc(hero.cta)}</a>
    </div>
    <p class="hero__trust" style="margin-top:1rem;">🔒 30-Day Risk-Free Guarantee &nbsp;·&nbsp; Free Shipping &nbsp;·&nbsp; Secure Checkout</p>
  </div>
</section>

<!-- Trust badges ──────────────────────────────────────────────────────────── -->
<div class="trust-bar">
  <div class="trust-bar__inner container">
    <span class="trust-badge"><span class="trust-badge__icon">🔒</span> 30-Day Money-Back Guarantee</span>
    <span class="trust-badge"><span class="trust-badge__icon">🚚</span> Free Tracked Shipping</span>
    <span class="trust-badge"><span class="trust-badge__icon">✓</span> Secure Checkout</span>
    <span class="trust-badge"><span class="trust-badge__icon">⭐</span> 4.9/5 Average Rating</span>
    <span class="trust-badge"><span class="trust-badge__icon">💳</span> No Hidden Fees</span>
  </div>
</div>

<!-- ②  PROBLEM ───────────────────────────────────────────────────────────── -->
<section class="problem">
  <div class="container">
    <div class="problem__inner">
      <h2 class="section-heading">Still Struggling? You're Not Alone.</h2>
      <div class="prose">
        <p>${esc(transformation.paragraphs[0] ?? "")}</p>
      </div>
      <ul class="pain-list">
        ${painList}
      </ul>
    </div>
  </div>
</section>

<!-- ③  SOLUTION ─────────────────────────────────────────────────────────── -->
<section class="solution" id="solution">
  <div class="container">
    <div class="solution__grid">
      <div class="solution__media">
        <span class="solution__media__icon">📦</span>
        <span class="solution__media__label">Product Image</span>
      </div>
      <div class="solution__copy">
        <span class="eyebrow">Why this one is different</span>
        <h2 class="section-heading">${esc(valueProps[0]?.headline ?? "Built for Real People")}</h2>
        <div class="prose">
          <p>${esc(transformation.paragraphs[1] ?? "")}</p>
        </div>
        <div style="margin-top:0.5rem;">
          <a href="#final-cta" class="btn btn--secondary">${esc(transformation.cta)}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ④  BENEFITS ─────────────────────────────────────────────────────────── -->
<section class="benefits">
  <div class="container">
    <h2 class="section-heading section-heading--center">Everything You Need. Nothing You Don't.</h2>
    <ul class="benefits__grid">
      ${benefitCards}
    </ul>
  </div>
</section>

<!-- ⑤  REVIEWS ──────────────────────────────────────────────────────────── -->
<section class="reviews">
  <div class="container">
    <h2 class="section-heading section-heading--center">Real People. Real Results. No Cherry-Picking.</h2>
    <div class="reviews__summary">
      <span class="reviews__rating-big">4.9</span>
      <div>
        <div class="reviews__rating-stars">★★★★★</div>
        <div class="reviews__count">from 2,847 verified reviews</div>
      </div>
    </div>
    <ul class="reviews__grid">
      ${testimonialCards}
    </ul>
  </div>
</section>

<!-- ⑥  FINAL CTA ────────────────────────────────────────────────────────── -->
<section class="final-cta" id="final-cta">
  <div class="final-cta__inner">
    <h2 class="final-cta__heading">${esc(finalClose.headline)}</h2>
    ${finalClose.paragraphs.map((p) => `<p class="final-cta__body">${esc(p)}</p>`).join("")}
    <div class="final-cta__actions">
      <a href="#" class="btn btn--primary btn--lg">${esc(finalClose.cta)}</a>
      <p class="trust-line">🔒 30-Day Risk-Free Guarantee &nbsp;·&nbsp; 🚚 Free Tracked Shipping &nbsp;·&nbsp; ✓ Secure Checkout &nbsp;·&nbsp; 💳 No Hidden Fees</p>
    </div>
  </div>
</section>

<!-- STICKY BAR ──────────────────────────────────────────────────────────── -->
<div class="sticky-bar" id="sticky-bar">
  <span class="sticky-bar__text">${esc(hero.headline.length > 48 ? hero.headline.slice(0, 48) + "…" : hero.headline)}</span>
  <a href="#final-cta" class="btn btn--primary" style="padding:0.6875rem 1.5rem;font-size:0.9375rem;box-shadow:none;">${esc(hero.cta)}</a>
</div>

<script>
(function(){
  var hero = document.getElementById('hero');
  var bar  = document.getElementById('sticky-bar');
  if (!hero || !bar) return;
  var obs = new IntersectionObserver(function(e){
    bar.classList.toggle('visible', !e[0].isIntersecting);
  }, { threshold: 0 });
  obs.observe(hero);

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var t = document.querySelector(this.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();
</script>

</body>
</html>`;
}
