import type { PageModel, StyleProps } from "@/types/pageModel";

// ── Helpers ────────────────────────────────────────────────────────────────
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

// Convert StyleProps to inline CSS string (camelCase → kebab-case)
function styleOverride(style: StyleProps): string {
  if (!style || Object.keys(style).length === 0) return "";
  const entries = Object.entries(style)
    .filter(([, v]) => v !== undefined)
    .map(([k, v]) => {
      const kebab = k.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebab}:${v}`;
    });
  return entries.length ? ` style="${entries.join(";")}"` : "";
}

// ── Section renderers ──────────────────────────────────────────────────────
function renderHero(s: PageModel["sections"]["hero"]): string {
  return `
<!-- HERO -->
<section class="hero" id="hero"${styleOverride(s.style)}>
  <div class="hero__bg"></div>
  <div class="hero__content container">
    <div class="hero__badge">
      <span class="hero__stars">★★★★★</span>
      <span>${esc(s.trustBadge)}</span>
    </div>
    <h1 class="hero__heading">${esc(s.headline)}</h1>
    <p class="hero__sub">${esc(s.subheadline)}</p>
    <div class="hero__cta-group">
      <a href="#cta" class="btn btn--primary btn--lg">${esc(s.cta)}</a>
    </div>
    <p class="hero__trust" style="margin-top:1rem;">${esc(s.trustLine)}</p>
  </div>
</section>`;
}

function renderTrustBar(s: PageModel["sections"]["trust_bar"]): string {
  const badges = s.badges
    .map(
      (b) =>
        `<span class="trust-badge"><span class="trust-badge__icon">${esc(b.icon)}</span> ${esc(b.text)}</span>`
    )
    .join("\n    ");
  return `
<!-- TRUST BAR -->
<div class="trust-bar"${styleOverride(s.style)}>
  <div class="trust-bar__inner container">
    ${badges}
  </div>
</div>`;
}

function renderProblem(s: PageModel["sections"]["problem"]): string {
  const painItems = s.painPoints
    .map(
      (p) => `
      <li class="pain-item">
        <span class="pain-icon">${esc(p.icon)}</span>
        <span>${esc(p.text)}</span>
      </li>`
    )
    .join("");
  return `
<!-- PROBLEM -->
<section class="problem"${styleOverride(s.style)}>
  <div class="container">
    <div class="problem__inner">
      <h2 class="section-heading">${esc(s.heading)}</h2>
      <div class="prose"><p>${esc(s.body)}</p></div>
      <ul class="pain-list">${painItems}</ul>
    </div>
  </div>
</section>`;
}

function renderSolution(s: PageModel["sections"]["solution"]): string {
  return `
<!-- SOLUTION -->
<section class="solution" id="solution"${styleOverride(s.style)}>
  <div class="container">
    <div class="solution__grid">
      <div class="solution__media">
        <span class="solution__media__icon">📦</span>
        <span class="solution__media__label">Product Image</span>
      </div>
      <div class="solution__copy">
        <span class="eyebrow">${esc(s.eyebrow)}</span>
        <h2 class="section-heading">${esc(s.heading)}</h2>
        <div class="prose"><p>${esc(s.body)}</p></div>
        <div style="margin-top:0.5rem;">
          <a href="#cta" class="btn btn--secondary">${esc(s.cta)}</a>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function renderBenefits(s: PageModel["sections"]["benefits"]): string {
  const cards = s.items
    .map(
      (item) => `
      <li class="benefit-card">
        <div class="benefit-icon">${item.icon}</div>
        <h3 class="benefit-heading">${esc(item.headline)}</h3>
        <p class="benefit-body">${esc(item.body)}</p>
        ${item.betterThan ? `<p class="benefit-vs">${esc(item.betterThan)}</p>` : ""}
      </li>`
    )
    .join("");
  const cols = Math.min(s.items.length, 3);
  return `
<!-- BENEFITS -->
<section class="benefits"${styleOverride(s.style)}>
  <div class="container">
    <h2 class="section-heading section-heading--center">${esc(s.heading)}</h2>
    <ul class="benefits__grid" style="--benefit-cols:${cols}">
      ${cards}
    </ul>
  </div>
</section>`;
}

function renderReviews(s: PageModel["sections"]["reviews"]): string {
  const cards = s.items
    .map(
      (r) => `
      <li class="testimonial-card">
        <div class="testimonial-stars">${stars(r.stars)}</div>
        <blockquote class="testimonial-quote">${esc(r.quote)}</blockquote>
        <p class="testimonial-result">✓ ${esc(r.result)}</p>
        <footer class="testimonial-footer">
          <div class="testimonial-avatar">${esc(initials(r.name))}</div>
          <div>
            <cite class="testimonial-name">${esc(r.name)}</cite>
            <span class="testimonial-timeframe">${esc(r.timeframe)}</span>
          </div>
        </footer>
      </li>`
    )
    .join("");
  return `
<!-- REVIEWS -->
<section class="reviews"${styleOverride(s.style)}>
  <div class="container">
    <h2 class="section-heading section-heading--center">${esc(s.heading)}</h2>
    <div class="reviews__summary">
      <span class="reviews__rating-big">${esc(s.ratingScore)}</span>
      <div>
        <div class="reviews__rating-stars">★★★★★</div>
        <div class="reviews__count">from ${esc(s.ratingCount)}</div>
      </div>
    </div>
    <ul class="reviews__grid">${cards}</ul>
  </div>
</section>`;
}

function renderCta(s: PageModel["sections"]["cta"]): string {
  const paras = s.paragraphs.map((p) => `<p class="final-cta__body">${esc(p)}</p>`).join("");
  return `
<!-- CTA -->
<section class="final-cta" id="cta"${styleOverride(s.style)}>
  <div class="final-cta__inner">
    <h2 class="final-cta__heading">${esc(s.headline)}</h2>
    ${paras}
    <div class="final-cta__actions">
      <a href="#" class="btn btn--primary btn--lg">${esc(s.cta)}</a>
      <p class="trust-line">${esc(s.trustLine)}</p>
    </div>
  </div>
</section>`;
}

// ── CSS ────────────────────────────────────────────────────────────────────
const CSS = `
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

/* ── HERO ────────────────────────────────────────────────────────────────── */
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
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 30%, #4338ca 60%, #1e1b4b 100%);
}
.hero__bg::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
}
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
.hero__trust { font-size: 0.8125rem; color: rgba(255,255,255,0.55); }

/* ── Trust bar ───────────────────────────────────────────────────────────── */
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

/* ── Problem ─────────────────────────────────────────────────────────────── */
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

/* ── Solution ────────────────────────────────────────────────────────────── */
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
.solution__media__icon { font-size: 4rem; opacity: 0.3; }
.solution__media__label {
  position: absolute; bottom: 1rem; left: 0; right: 0;
  text-align: center;
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.7);
}
.solution__copy { display: flex; flex-direction: column; gap: 1rem; }
.solution__copy .section-heading { margin-bottom: 0.5rem; }

/* ── Benefits ────────────────────────────────────────────────────────────── */
.benefits { padding: var(--gap) 1.5rem; }
.benefits__grid {
  display: grid; gap: 1.25rem; margin-top: 2.5rem;
}
@media (min-width: 600px) { .benefits__grid { grid-template-columns: 1fr 1fr; } }
@media (min-width: 960px) { .benefits__grid { grid-template-columns: repeat(var(--benefit-cols, 3), 1fr); } }
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

/* ── Reviews ─────────────────────────────────────────────────────────────── */
.reviews { padding: var(--gap) 1.5rem; background: var(--surface); }
.reviews__summary {
  display: flex; align-items: center; justify-content: center; gap: 1rem;
  margin: 0.5rem 0 2.5rem; flex-wrap: wrap;
}
.reviews__rating-big { font-size: 2.5rem; font-weight: 800; color: var(--black); }
.reviews__rating-stars { color: var(--gold); font-size: 1.25rem; }
.reviews__count { font-size: 0.9375rem; color: var(--muted); }
.reviews__grid { display: grid; gap: 1.25rem; }
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

/* ── Final CTA ───────────────────────────────────────────────────────────── */
.final-cta { background: var(--black); padding: 5rem 1.5rem; }
@media (min-width: 768px) { .final-cta { padding: 7rem 2rem; } }
.final-cta__inner { max-width: 680px; margin: 0 auto; text-align: center; }
.final-cta__heading {
  font-size: clamp(1.75rem, 4vw, 2.75rem);
  font-weight: 800; line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--white); margin-bottom: 1.25rem;
}
.final-cta__body { font-size: 1.0625rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 1rem; }
.final-cta__actions {
  display: flex; flex-direction: column; align-items: center;
  gap: 1rem; margin-top: 2.25rem;
}
.final-cta .btn--primary {
  padding: 1rem 2.5rem; font-size: 1.0625rem;
  box-shadow: 0 6px 24px rgba(79,70,229,0.5);
}
.trust-line { font-size: 0.875rem; color: rgba(255,255,255,0.45); }

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
`;

// ── Section dispatch ───────────────────────────────────────────────────────
type SectionKey = "hero" | "trust_bar" | "problem" | "solution" | "benefits" | "reviews" | "cta";

function renderSection(key: SectionKey, model: PageModel): string {
  const sections = model.sections;
  switch (key) {
    case "hero":      return sections.hero.visible      ? renderHero(sections.hero)           : "";
    case "trust_bar": return sections.trust_bar.visible ? renderTrustBar(sections.trust_bar)  : "";
    case "problem":   return sections.problem.visible   ? renderProblem(sections.problem)     : "";
    case "solution":  return sections.solution.visible  ? renderSolution(sections.solution)   : "";
    case "benefits":  return sections.benefits.visible  ? renderBenefits(sections.benefits)   : "";
    case "reviews":   return sections.reviews.visible   ? renderReviews(sections.reviews)     : "";
    case "cta":       return sections.cta.visible       ? renderCta(sections.cta)             : "";
    default:          return "";
  }
}

// ── Public API ─────────────────────────────────────────────────────────────
export function pageModelToHtml(model: PageModel): string {
  const heroHeadline = model.sections.hero.headline;
  const heroCta = model.sections.hero.cta;
  const stickyText = heroHeadline.length > 48 ? heroHeadline.slice(0, 48) + "…" : heroHeadline;

  const body = model.sectionOrder
    .map((key) => renderSection(key as SectionKey, model))
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(heroHeadline)} — Landing Page Preview</title>
<style>${CSS}</style>
</head>
<body>

<div class="preview-banner">⚡ Landing Page Preview — Generated by AdGen</div>

${body}

<!-- STICKY BAR -->
<div class="sticky-bar" id="sticky-bar">
  <span class="sticky-bar__text">${esc(stickyText)}</span>
  <a href="#cta" class="btn btn--primary" style="padding:0.6875rem 1.5rem;font-size:0.9375rem;box-shadow:none;">${esc(heroCta)}</a>
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
