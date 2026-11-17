/* PC Digital — interactions & motion */
(() => {
  const html = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---- page transition curtain ---- */
  const loaded = () => setTimeout(() => html.classList.add('is-loaded'), 60);
  if (document.readyState === 'complete') loaded(); else addEventListener('load', loaded);
  setTimeout(loaded, 1200); // never trap the page behind the curtain
  addEventListener('pageshow', e => { if (e.persisted) { html.classList.remove('is-leaving'); html.classList.add('is-loaded'); } });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank' || a.hasAttribute('download')) return;
    const href = a.getAttribute('href');
    if (!href || /^(#|mailto:|tel:|https?:|javascript:)/.test(href)) return;
    const url = new URL(a.href);
    if (url.pathname === location.pathname && url.hash) return;
    if (reduce) return;
    e.preventDefault();
    html.classList.remove('menu-open');
    html.classList.add('is-leaving');
    setTimeout(() => { location.href = a.href; }, 620);
  });

  /* ---- split headings into words ---- */
  $$('[data-split]').forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.append(' '); return; }
            const w = document.createElement('span'); w.className = 'w';
            const s = document.createElement('span'); s.textContent = part; s.style.setProperty('--i', i++);
            w.append(s); frag.append(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains('stamp')) {
          if (n.classList.contains('grad-text')) { // keep gradient on the moving span
            const w = document.createElement('span'); w.className = 'w';
            n.style.setProperty('--i', i++); n.style.display = 'inline-block';
            n.replaceWith(w); const s = document.createElement('span'); s.style.setProperty('--i', i - 1); s.append(n); w.append(s);
          } else walk(n);
        }
      });
    };
    walk(el);
  });

  /* ---- reveal on scroll ---- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      if (en.target.dataset.count !== undefined) count(en.target);
      io.unobserve(en.target);
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  $$('[data-reveal], [data-split], [data-count], .meter').forEach(el => io.observe(el));
  // stagger children
  $$('[data-stagger]').forEach(p => [...p.children].forEach((c, i) => {
    if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', '');
    c.style.setProperty('--d', (i * 0.09).toFixed(2)); io.observe(c);
  }));

  function count(el) {
    const end = parseFloat(el.dataset.count), dur = 1600, t0 = performance.now();
    if (reduce) { el.firstChild.textContent = end; return; }
    const node = el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild : el.insertBefore(document.createTextNode('0'), el.firstChild);
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4);
      node.textContent = Math.round(end * e);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---- header hide/show, progress, to-top, step line ---- */
  const header = $('.header'), progress = $('.progress'), totop = $('.totop');
  const stepLines = $$('.steps__line');
  let lastY = scrollY, ticking = false;
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    if (header && !html.classList.contains('menu-open')) header.classList.toggle('is-hidden', y > lastY && y > 400);
    if (totop) totop.classList.toggle('on', y > 700);
    stepLines.forEach(l => {
      const r = l.parentElement.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, (innerHeight * 0.8 - r.top) / (r.height + innerHeight * 0.3)));
      l.parentElement.style.setProperty('--p', p.toFixed(3));
    });
    $$('[data-speed]').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > innerHeight + 200) return;
      el.style.translate = `0 ${((r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.speed)).toFixed(1)}px`;
    });
    lastY = y; ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
  if (totop) totop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- mobile menu ---- */
  const burger = $('.burger');
  if (burger) burger.addEventListener('click', () => {
    const open = html.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  addEventListener('keydown', e => { if (e.key === 'Escape' && html.classList.contains('menu-open')) burger.click(); });

  /* ---- cursor, magnetic buttons, tilt ---- */
  if (fine && !reduce) {
    const cur = $('.cursor');
    if (cur) {
      let x = 0, y = 0, tx = 0, ty = 0;
      addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; cur.classList.add('is-on'); });
      document.addEventListener('mouseleave', () => cur.classList.remove('is-on'));
      const loop = () => { x += (tx - x) * 0.2; y += (ty - y) * 0.2; cur.style.transform = `translate(${x}px, ${y}px)`; requestAnimationFrame(loop); };
      loop();
      document.addEventListener('mouseover', e => cur.classList.toggle('is-big', !!e.target.closest('.ledger__row, .director__photo, .aud__card, .btn--gold')));
    }
    $$('.btn').forEach(b => {
      b.addEventListener('mousemove', e => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px, ${(e.clientY - r.top - r.height / 2) * 0.3}px)`;
      });
      b.addEventListener('mouseleave', () => { b.style.transform = ''; });
    });
    $$('[data-tilt]').forEach(c => {
      c.addEventListener('mousemove', e => {
        const r = c.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        c.style.transform = `perspective(900px) rotateY(${px * 7}deg) rotateX(${-py * 7}deg) translateY(-6px)`;
      });
      c.addEventListener('mouseleave', () => { c.style.transform = ''; });
    });
  }

  /* ---- FAQ smooth open/close ---- */
  $$('.faq details').forEach(d => {
    const sum = $('summary', d), ans = $('.ans', d);
    sum.addEventListener('click', e => {
      if (reduce) return;
      e.preventDefault();
      if (d.open) {
        const a = ans.animate({ height: [ans.offsetHeight + 'px', '0px'], opacity: [1, 0] }, { duration: 380, easing: 'cubic-bezier(.2,.8,.2,1)' });
        a.onfinish = () => { d.open = false; };
      } else {
        $$('.faq details[open]', d.parentElement).forEach(o => { if (o !== d) o.open = false; });
        d.open = true;
        ans.animate({ height: ['0px', ans.offsetHeight + 'px'], opacity: [0, 1] }, { duration: 480, easing: 'cubic-bezier(.2,.8,.2,1)' });
      }
    });
  });

  /* ---- legal TOC scrollspy ---- */
  const tocLinks = $$('.toc a');
  if (tocLinks.length) {
    const map = new Map(tocLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const spy = new IntersectionObserver(es => es.forEach(en => {
      if (en.isIntersecting) { tocLinks.forEach(a => a.classList.remove('on')); const a = map.get(en.target.id); if (a) a.classList.add('on'); }
    }), { rootMargin: '-15% 0px -70% 0px' });
    $$('.doc h2[id]').forEach(h => spy.observe(h));
  }

  /* ---- forms: compose an email to support (no data is stored on this site) ---- */
  $$('form[data-mailto]').forEach(f => {
    f.addEventListener('submit', e => {
      e.preventDefault();
      if (!f.reportValidity()) return;
      const data = new FormData(f), lines = [];
      for (const [k, v] of data.entries()) if (v && k !== 'consent') lines.push(`${k}: ${v}`);
      const subject = f.dataset.subject || 'Website enquiry';
      const body = lines.join('\n') + '\n\n— Sent from www.pcdigital.in';
      location.href = `mailto:${f.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      const msg = $('.form__msg', f); if (msg) msg.classList.add('on');
    });
  });

  /* ---- hero receipt: loops through illustrative transactions ---- */
  const rows = $('.receipt__rows');
  if (rows) {
    const tx = [
      ['AEPS · Cash withdrawal', '₹2,500', 'Aadhaar auth'], ['BBPS · Electricity bill', '₹1,184', 'Bill fetched'],
      ['DMT · Money transfer', '₹5,000', 'IMPS'], ['Recharge · Prepaid', '₹299', '28 days'],
      ['UPI · Collection', '₹740', 'QR scan'], ['DTH · Recharge', '₹450', 'Monthly pack'],
      ['IRCTC · Rail ticket', '₹1,365', '2 passengers'], ['Payout · Vendor', '₹12,000', 'Bank transfer'],
      ['Flight · Booking', '₹4,820', '1 traveller'], ['Hotel · Booking', '₹2,150', '1 night'],
    ];
    let i = 0;
    const add = () => {
      const [a, b, c] = tx[i++ % tx.length];
      const d = document.createElement('div'); d.className = 'receipt__row';
      d.innerHTML = `<span>${a}</span><b>${b}</b><small>${c.toUpperCase()}</small><span class="ok">✓ SUCCESS</span>`;
      rows.prepend(d);
      while (rows.children.length > 4) rows.lastChild.remove();
    };
    add(); add(); add();
    if (!reduce) setInterval(add, 2400);
  }

  /* ---- guilloche canvas (currency-note line work) ---- */
  $$('canvas[data-guilloche]').forEach(cv => {
    const ctx = cv.getContext('2d');
    let w, h, dpr, t = 0, visible = true, mx = 0.5, my = 0.5;
    const size = () => { dpr = Math.min(2, devicePixelRatio || 1); w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); };
    size(); addEventListener('resize', size);
    new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(cv);
    addEventListener('mousemove', e => { mx = e.clientX / innerWidth; my = e.clientY / innerHeight; });
    const cols = ['rgba(154,92,240,.38)', 'rgba(31,154,224,.30)', 'rgba(255,178,36,.20)'];
    const draw = () => {
      if (visible) {
        ctx.clearRect(0, 0, w, h);
        const cx = w * (0.74 + (mx - 0.5) * 0.04), cy = h * (0.5 + (my - 0.5) * 0.05), R = Math.max(w, h) * 0.36;
        cols.forEach((c, k) => {
          ctx.beginPath(); ctx.strokeStyle = c; ctx.lineWidth = 0.8;
          const petals = 9 + k * 4, amp = 0.22 + 0.06 * Math.sin(t * 0.6 + k), ph = t * (0.12 + k * 0.05) * (k % 2 ? -1 : 1);
          for (let a = 0; a <= Math.PI * 2 * 12 + 0.02; a += 0.02) {
            const r = R * (0.62 + k * 0.12) * (1 + amp * Math.sin(petals * a / 12 + ph) + 0.08 * Math.sin(a * 3 - ph * 2));
            const x = cx + r * Math.cos(a + ph * 0.3), y = cy + r * Math.sin(a + ph * 0.3);
            a === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
          }
          ctx.stroke();
        });
        t += 0.012;
      }
      if (!reduce) requestAnimationFrame(draw);
    };
    draw();
  });

  /* year */
  $$('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
