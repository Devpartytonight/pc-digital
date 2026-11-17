// PC Digital static site generator — run: node build.mjs  → writes ./public
import { mkdirSync, writeFileSync, readFileSync, cpSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { services } from './content/services.mjs';
import { pages } from './content/pages.mjs';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'public');
const SITE = 'https://www.pcdigital.in';
const UPDATED = '17 November 2026';

export const co = {
  name: 'PC Digital Private Limited', short: 'PC Digital',
  addr: 'Mg Plaza, Office No 03, 1st Floor, Sonarpada Naka, Kalyan Shill Road, Near Sai Baba Temple, Dombivali East, Thane 421203',
  phones: ['8169108855', '8169508855'], email: 'Support@pcdigital.in',
};

/* ---------- shared bits ---------- */
const arrow = '<svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 14L14 4M6 4h8v8"/></svg>';
export const btn = (label, href, cls = '') => `<a class="btn ${cls}" href="${href}"><span>${label}</span><span class="arr">${arrow}${arrow}</span></a>`;
export const bars = '<span class="bars" aria-hidden="true"><i></i><i></i><i></i></span>';
export const eyebrow = t => `<span class="eyebrow">${bars}${t}</span>`;
const esc = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const legalDocs = [
  ['terms-and-conditions', 'Terms & Conditions', 'The agreement between PC Digital and everyone who uses our platform and services.'],
  ['privacy-policy', 'Privacy Policy', 'What personal data we collect, why we collect it, and the rights you have over it.'],
  ['refund-cancellation-policy', 'Refund & Cancellation Policy', 'How failed transactions, reversals, cancellations and refunds work for each service.'],
  ['kyc-aml-policy', 'KYC & AML Policy', 'The conditions for onboarding and the checks we apply to keep the platform safe.'],
  ['disclaimer', 'Disclaimer', 'Important information about our role, third-party services and the limits of our responsibility.'],
  ['grievance-redressal', 'Grievance Redressal', 'How to raise a complaint, what to expect and how to escalate it.'],
];

const nav = [
  ['about.html', 'About'], ['leadership.html', 'Leadership'], ['become-a-partner.html', 'Partner with us'],
  ['kyc-onboarding.html', 'KYC'], ['contact.html', 'Contact'],
];

const header = cur => `
<a class="skip" href="#main">Skip to content</a>
<div class="curtain" aria-hidden="true">${[0, 1, 2, 3, 4].map(i => `<i style="--i:${i}"></i>`).join('')}</div>
<img class="curtain__mark" src="assets/img/logo-mark.png" alt="" aria-hidden="true">
<div class="progress" aria-hidden="true"></div>
<div class="cursor" aria-hidden="true"></div>
<header class="header">
  <div class="header__bar">
    <a class="header__logo" href="index.html" aria-label="PC Digital — home"><img src="assets/img/logo.png" alt="PC Digital Private Limited — Digital Finance • Smarter Future" width="900" height="251"></a>
    <nav aria-label="Primary"><ul class="nav">
      <li><a class="nav__link" href="services.html" ${cur === 'services.html' ? 'aria-current="page"' : ''}>Services <svg viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M1 1l4 4 4-4"/></svg></a>
        <div class="mega">${services.map(s => `<a href="${s.slug}.html"><span>${s.no}</span>${s.nav}</a>`).join('')}<a class="mega__all" href="services.html">View all services →</a></div>
      </li>
      ${nav.map(([h, l]) => `<li><a class="nav__link" href="${h}" ${cur === h ? 'aria-current="page"' : ''}>${l}</a></li>`).join('')}
    </ul></nav>
    <div class="header__cta">
      ${btn('Become a partner', 'become-a-partner.html', 'btn--sm')}
      <button class="burger" aria-label="Menu" aria-expanded="false"><i></i><i></i></button>
    </div>
  </div>
</header>
<div class="mobile" aria-label="Mobile menu">
  <nav class="mobile__main">
    ${[['index.html', 'Home'], ['services.html', 'Services'], ...nav, ['faq.html', 'FAQ']].map(([h, l], i) => `<a href="${h}" style="--i:${i}"><span>0${i + 1}</span>${l}</a>`).join('')}
  </nav>
  <div class="mobile__sub">${services.map(s => `<a href="${s.slug}.html">${s.nav}</a>`).join('')}</div>
  <div class="mobile__foot"><a href="tel:+91${co.phones[0]}">+91 ${co.phones[0]}</a><a href="tel:+91${co.phones[1]}">+91 ${co.phones[1]}</a><a href="mailto:${co.email}">${co.email}</a></div>
</div>`;

const marqueeBig = words => `<div class="marquee marquee--big" aria-hidden="true">${[0, 1].map(() => `<div class="marquee__track">${words.map(w => `<span>${w}</span><i></i>`).join('')}</div>`).join('')}</div>`;

const footer = (noCta) => `
${noCta ? '' : `<section class="cta dark rounded-top">
  <div class="hero__glow"></div>
  <div class="wrap cta__inner">
    <div>${eyebrow('Start today')}<h2 class="display" data-split style="margin-top:18px">Ready to make your counter <span class="grad-text">do more?</span></h2></div>
    <div class="cta__side" data-reveal>
      <p class="muted">Tell us about your shop or business. Our onboarding team will call you back, explain the services and help you complete KYC.</p>
      ${btn('Become a partner', 'become-a-partner.html', 'btn--gold')}
      <a class="link-u mono" href="tel:+91${co.phones[0]}">or call +91 ${co.phones[0]}</a>
    </div>
  </div>
  ${marqueeBig(['Recharge', 'BBPS', 'AEPS', 'DMT', 'Payouts', 'UPI', 'Travel'])}
</section>`}
<footer class="footer">
  <div class="wrap">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="assets/img/logo-white.png" alt="PC Digital Private Limited" width="900" height="251" loading="lazy">
        <p>Digital Finance • Smarter Future. One partner ID for recharges, bill payments, Aadhaar banking, money transfer, payouts, UPI and travel.</p>
      </div>
      <div><h4>Products</h4><ul>${services.map(s => `<li><a href="${s.slug}.html">${s.nav}</a></li>`).join('')}</ul></div>
      <div><h4>Company</h4><ul>
        <li><a href="about.html">About us</a></li><li><a href="leadership.html">Leadership</a></li><li><a href="services.html">All services</a></li>
        <li><a href="become-a-partner.html">Become a partner</a></li><li><a href="kyc-onboarding.html">KYC &amp; onboarding</a></li>
        <li><a href="faq.html">FAQs</a></li><li><a href="contact.html">Contact us</a></li></ul></div>
      <div><h4>Legal</h4><ul>${legalDocs.map(([s, t]) => `<li><a href="${s}.html">${t}</a></li>`).join('')}</ul></div>
    </div>
    <div class="footer__addr">
      <div><h4>Registered address</h4><p>${co.name}<br>${co.addr}</p></div>
      <div><h4>Operational address</h4><p>${co.name}<br>${co.addr}</p></div>
      <div><h4>Support &amp; service</h4>
        <a href="tel:+91${co.phones[0]}">+91 ${co.phones[0]}</a><a href="tel:+91${co.phones[1]}">+91 ${co.phones[1]}</a>
        <a href="mailto:${co.email}" style="font-size:1.05rem;margin-top:6px">${co.email}</a></div>
    </div>
    <div class="footer__bot">
      <span>Copyright © 2026 PC Digital Pvt. Ltd. All rights reserved.</span>
      <nav>${legalDocs.slice(0, 3).map(([s, t]) => `<a class="link-u" href="${s}.html">${t}</a>`).join('')}<a class="link-u" href="disclaimer.html">Disclaimer</a></nav>
    </div>
    <p class="mono" style="opacity:.5;padding-bottom:30px;text-transform:none;letter-spacing:.02em;line-height:1.6">PC Digital will never ask for your password, MPIN or OTP. PC Digital is a technology platform and not a bank; banking and payment services are provided in association with partner banks and authorised service providers.</p>
  </div>
  <div class="footer__word" aria-hidden="true" data-speed="-0.06">PC DIGITAL</div>
</footer>
<button class="totop" aria-label="Back to top"><svg viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 15V3M3.500 8.500L9 3l5.500 5.500"/></svg></button>
<script src="assets/js/main.js" defer></script>`;

const layout = ({ file, title, desc, body, noCta, noindex }) => `<!doctype html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex">' : `<link rel="canonical" href="${SITE}/${file === 'index.html' ? '' : file}">`}
<meta property="og:type" content="website"><meta property="og:site_name" content="PC Digital">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:image" content="${SITE}/assets/img/og.jpg"><meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0d0b2b">
<link rel="icon" type="image/png" href="assets/img/favicon.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500..800&family=Instrument+Sans:wght@400..600&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<script>document.documentElement.classList.add('js')</script>
${file === 'index.html' ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: co.name, url: SITE, logo: SITE + '/assets/img/logo.png', email: co.email, telephone: '+91' + co.phones[0], address: { '@type': 'PostalAddress', streetAddress: 'Mg Plaza, Office No 03, 1st Floor, Sonarpada Naka, Kalyan Shill Road, Near Sai Baba Temple', addressLocality: 'Dombivali East, Thane', addressRegion: 'Maharashtra', postalCode: '421203', addressCountry: 'IN' } })}</script>` : ''}
</head>
<body>
${header(file)}
<main id="main">
${body}
</main>
${footer(noCta)}
</body>
</html>`;

/* ---------- page hero ---------- */
export const phero = ({ crumbs = [], eyebrowText, h1, lede, icon, chips, extra = '' }) => `
<section class="phero dark">
  <div class="hero__glow"></div><div class="hero__glow hero__glow--2"></div>
  <div class="wrap"><div class="phero__grid">
    <div>
      <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Home</a>${crumbs.map(([l, h]) => ` / ${h ? `<a href="${h}">${l}</a>` : `<span>${l}</span>`}`).join('')}</nav>
      <div style="margin-top:34px">${eyebrow(eyebrowText)}</div>
      <h1 class="display" data-split>${h1}</h1>
      <p class="lede" data-reveal style="--d:.3">${lede}</p>
      ${chips ? `<div class="chips" data-reveal style="--d:.45">${chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>` : ''}
      ${extra}
    </div>
    ${icon ? `<div class="phero__icon" data-reveal="scale" style="--d:.3" aria-hidden="true"><div>${icon}</div></div>` : ''}
  </div></div>
</section>`;

export const faqBlock = items => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}<i></i></summary><div class="ans"><div>${a}</div></div></details>`).join('')}</div>`;

/* ---------- service page ---------- */
const servicePage = (s, idx) => {
  const next = services[(idx + 1) % services.length], prev = services[(idx + services.length - 1) % services.length];
  return phero({ crumbs: [['Services', 'services.html'], [s.nav]], eyebrowText: `Service ${s.no} · ${s.tag}`, h1: s.name, lede: s.lede, icon: s.icon, chips: s.chips,
    extra: `<div class="hero__actions" data-reveal style="--d:.55">${btn('Start offering ' + s.nav, 'become-a-partner.html', 'btn--gold')}${btn('Talk to us', 'contact.html', 'btn--ghost')}</div>` }) + `
<section class="section rounded-top" style="background:var(--paper)">
  <div class="wrap split split--sticky">
    <div>${eyebrow('What it is')}<h2 class="display" data-split>How ${s.nav} works for your business</h2></div>
    <div class="prose" data-reveal>${s.about.map(p => `<p style="font-size:1.12rem">${p}</p>`).join('')}
      <div class="note" style="margin-top:28px">Service availability, limits, charges and commissions are subject to KYC, the rules of the relevant service provider and applicable regulations. See our <a class="link-u" href="disclaimer.html">Disclaimer</a>.</div>
    </div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Features')}<h2 class="display" data-split>What you get</h2></div><p data-reveal>Everything you need to offer ${s.nav} confidently across the counter.</p></div>
    <div class="cards" data-stagger>${s.features.map(([t, d], i) => `<article class="card" data-tilt><span class="mono">${s.no}.${i + 1}</span><h3 class="h3">${t}</h3><p class="muted">${d}</p></article>`).join('')}</div>
  </div>
</section>
<section class="section dark">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Step by step')}<h2 class="display" data-split>From request to receipt</h2></div><p data-reveal>A typical ${s.nav} transaction, start to finish.</p></div>
    <div class="steps"><div class="steps__line"></div>${s.steps.map(([t, d], i) => `<div class="step" data-reveal style="--d:${i * 0.12}"><h3 class="h3">${t}</h3><p class="muted">${d}</p></div>`).join('')}</div>
  </div>
</section>
<section class="section" style="background:var(--paper)">
  <div class="wrap split">
    <div data-reveal="left">${eyebrow('Who it’s for')}<h2 class="display">Built for</h2><ul class="checks">${s.who.map(w => `<li><div><b>${w}</b></div></li>`).join('')}</ul></div>
    <div data-reveal="right">${eyebrow('What you need')}<h2 class="display">Requirements</h2><ul class="checks">${s.needs.map(w => `<li><div><span style="opacity:1;font-size:1.02rem">${w}</span></div></li>`).join('')}</ul>
      <p style="margin-top:22px"><a class="link-u" href="kyc-onboarding.html">See the full KYC &amp; onboarding process →</a></p></div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper)">
  <div class="wrap split split--sticky">
    <div>${eyebrow('Questions')}<h2 class="display" data-split>${s.nav} FAQs</h2><p class="muted" data-reveal>Can’t find your answer? <a class="link-u" href="contact.html">Ask our support team</a>.</p></div>
    <div data-reveal>${faqBlock(s.faqs)}</div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2);padding-bottom:calc(clamp(56px,7vw,100px) + 60px)">
  <div class="wrap">
    <div class="ledger">
      <a class="ledger__row" href="${prev.slug}.html"><span class="ledger__no">← Prev</span><span class="ledger__name">${prev.name}</span><span class="ledger__desc">${prev.short}</span><span class="ledger__tag">${prev.tag}</span><span class="ledger__go">${arrow}</span></a>
      <a class="ledger__row" href="${next.slug}.html"><span class="ledger__no">Next →</span><span class="ledger__name">${next.name}</span><span class="ledger__desc">${next.short}</span><span class="ledger__tag">${next.tag}</span><span class="ledger__go">${arrow}</span></a>
    </div>
  </div>
</section>`;
};

/* ---------- legal page (mini markdown) ---------- */
const inline = s => s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
const md = src => {
  const toc = []; let html = '', list = false, n = 0;
  const closeList = () => { if (list) { html += '</ul>'; list = false; } };
  for (const block of src.trim().split(/\n{2,}/)) {
    const lines = block.split('\n');
    if (lines[0].startsWith('## ')) { closeList(); const t = lines[0].slice(3); const id = 's' + (++n); toc.push([id, t]); html += `<h2 id="${id}"><span>${String(n).padStart(2, '0')}</span>${inline(t)}</h2>`; lines.shift(); if (!lines.length) continue; }
    if (lines[0].startsWith('### ')) { closeList(); html += `<h3>${inline(lines[0].slice(4))}</h3>`; lines.shift(); if (!lines.length) continue; }
    if (lines.every(l => l.startsWith('- '))) { if (!list) { html += '<ul>'; list = true; } html += lines.map(l => `<li>${inline(l.slice(2))}</li>`).join(''); continue; }
    closeList();
    const para = [], items = [];
    lines.forEach(l => (l.startsWith('- ') ? items : para).push(l.startsWith('- ') ? l.slice(2) : l));
    if (para.length) html += `<p>${inline(para.join('<br>'))}</p>`;
    if (items.length) html += `<ul>${items.map(l => `<li>${inline(l)}</li>`).join('')}</ul>`;
  }
  closeList();
  return { html, toc };
};
const legalPage = ([slug, title, desc]) => {
  const { html, toc } = md(readFileSync(join(root, 'content/legal', slug + '.md'), 'utf8'));
  return phero({ crumbs: [['Legal'], [title]], eyebrowText: 'Legal', h1: title, lede: desc,
    extra: `<nav class="legal-nav" data-reveal style="--d:.5" aria-label="Legal documents">${legalDocs.map(([s, t]) => `<a href="${s}.html" ${s === slug ? 'aria-current="page"' : ''}>${t}</a>`).join('')}</nav>` }) + `
<section class="section rounded-top" style="background:var(--paper);padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap legal">
    <aside class="toc"><p class="mono">On this page</p>${toc.map(([id, t]) => `<a href="#${id}">${t}</a>`).join('')}</aside>
    <article class="doc" data-reveal>
      <div class="doc__meta"><span>Last updated: ${UPDATED}</span><span>${co.name}</span><span>www.pcdigital.in</span></div>
      ${html}
    </article>
  </div>
</section>`;
};

/* ---------- build ---------- */
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, 'assets'), join(out, 'assets'), { recursive: true });

const all = [];
const emit = (file, title, desc, body, opts = {}) => { writeFileSync(join(out, file), layout({ file, title, desc, body, ...opts })); all.push(file); };

const ctx = { services, co, btn, eyebrow, bars, phero, faqBlock, arrow, legalDocs, marqueeBig };
for (const p of pages(ctx)) emit(p.file, p.title, p.desc, p.body, p.opts);
services.forEach((s, i) => emit(`${s.slug}.html`, `${s.name} — PC Digital`, s.short, servicePage(s, i)));
legalDocs.forEach(d => emit(`${d[0]}.html`, `${d[1]} — PC Digital`, d[2], legalPage(d)));

const pub = all.filter(f => f !== '404.html');
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pub.map(f => `  <url><loc>${SITE}/${f === 'index.html' ? '' : f}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log(`Built ${all.length} pages → public/`);
