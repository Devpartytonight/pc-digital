// Core pages: home, about, leadership, services index, partner, KYC, contact, FAQ, 404.
export const pages = ({ services, co, btn, eyebrow, phero, faqBlock, arrow, legalDocs }) => {
  const tel = n => `<a href="tel:+91${n}">+91 ${n.slice(0, 5)} ${n.slice(5)}</a>`;
  const ic = d => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

  const directors = [
    {
      id: 'chandan-singh', name: 'Mr. Chandan Singh', img: 'director-chandan-singh.webp', age: 36, total: 15,
      line: '15 years across Fintech & Telecom',
      summary: 'An experienced professional with 15 years of overall industry experience, including 10 years in the Fintech sector and 5 years in Telecommunications. Possesses extensive cross-industry experience and a strong understanding of business operations and industry processes.',
      more: 'A decade in fintech, built on a foundation in telecom distribution, gives Mr. Singh a first-hand view of how digital services actually reach a shop counter: through networks of retailers and distributors who need dependable systems, quick support and clear processes. That operating perspective shapes how PC Digital designs its products and supports its partners.',
      exp: [['Fintech Industry', 10, 'A decade in financial technology, spanning business operations and industry processes.'], ['Telecom Industry', 5, 'Five years in telecommunications.']],
      focus: ['Business operations', 'Industry processes', 'Cross-industry perspective', 'Partner networks'],
    },
    {
      id: 'pravin-puthran', name: 'Mr. Pravin Puthran', img: 'director-pravin-puthran.webp', age: 47, total: 27,
      line: '27 years across Banking & Fintech',
      summary: 'Mr. Pravin Puthran is an experienced professional with 27 years of overall work experience, including 20 years in the banking industry and 7 years in the fintech industry. His diverse industry background reflects his adaptability, practical knowledge, and ability to work across different business sectors.',
      more: 'Two decades in banking, followed by seven years in fintech, mean Mr. Puthran understands both sides of assisted finance: the discipline and process that banking demands, and the speed and reach that technology makes possible. He brings that practical knowledge to PC Digital’s approach to compliance, partner onboarding and service quality.',
      exp: [['Banking Industry', 20, 'Twenty years of extensive experience in the banking industry.'], ['Fintech Industry', 7, 'Seven years of professional experience in financial technology.']],
      focus: ['Banking practice', 'Adaptability across sectors', 'Practical, hands-on knowledge', 'Process & compliance'],
    },
  ];

  const directorCard = (d, i) => `
  <article class="director" data-reveal style="--d:${i * 0.15}">
    <a href="leadership.html#${d.id}" class="director__photo" aria-label="${d.name} — full profile">
      <span class="director__badge mono">Director</span>
      <img src="assets/img/${d.img}" alt="${d.name}, Director, PC Digital Private Limited" loading="lazy">
      <div class="director__cap"><h3 class="display">${d.name}</h3><p>${d.line}</p></div>
    </a>
    <div class="director__body">
      <div class="director__facts">
        <div><b data-count="${d.total}">${d.total}</b><span>years’ total experience</span></div>
        ${d.exp.map(([l, y]) => `<div><b data-count="${y}">${y}</b><span>years in ${l.replace(' Industry', '')}</span></div>`).join('')}
      </div>
      <p class="muted">${d.summary}</p>
    </div>
  </article>`;

  const ledger = list => `<div class="ledger" data-stagger>${list.map(s => `
    <a class="ledger__row" href="${s.slug}.html"><span class="ledger__no">${s.no}</span><span class="ledger__name">${s.name}</span><span class="ledger__desc">${s.short}</span><span class="ledger__tag">${s.tag}</span><span class="ledger__go">${arrow}</span></a>`).join('')}</div>`;

  const onboardingSteps = [
    ['Share your details', 'Fill in the partner form or call us. Tell us about your shop or business and the services you want.'],
    ['Complete your KYC', 'Submit your PAN, Aadhaar, bank proof and business details. We verify them securely.'],
    ['Get your partner ID', 'Once approved, you receive your login and a walkthrough of the panel.'],
    ['Load wallet & transact', 'Add balance from your own bank account and start serving customers.'],
  ];
  const stepsBlock = (steps) => `<div class="steps"><div class="steps__line"></div>${steps.map(([t, d], i) => `<div class="step" data-reveal style="--d:${i * 0.12}"><h3 class="h3">${t}</h3><p class="muted">${d}</p></div>`).join('')}</div>`;

  const generalFaqs = [
    ['What is PC Digital?', 'PC Digital Private Limited is a fintech company based in Dombivali (Thane), Maharashtra. We provide a single platform through which retailers, distributors and businesses can offer or use recharge, BBPS bill payment, AEPS, money transfer, payout, UPI and travel-booking services.'],
    ['Who can become a PC Digital partner?', 'Any Indian resident aged 18 or above with a shop or place of business, a valid PAN, Aadhaar and a bank account in their own name. Kirana stores, mobile shops, medical stores, travel agents, cyber cafés and similar outlets are all a good fit. Distributors and businesses can also register.'],
    ['Which services can I offer?', 'Recharge & DTH, BBPS bill payments, AEPS, Domestic Money Transfer, Payout services, UPI collection & payouts, hotel booking, flight booking and IRCTC rail booking. Some services need additional approval or a device, such as a biometric scanner for AEPS.'],
    ['How do I earn?', 'You earn a commission or margin on successful transactions. The applicable structure for each service is shown in your partner panel. Actual earnings depend on your location, footfall and the services you offer; we do not promise a fixed income.'],
    ['Is PC Digital a bank?', 'No. PC Digital is a technology platform. Banking and payment services such as AEPS, DMT and UPI are provided in association with partner banks and authorised service providers.'],
  ];

  /* =================== HOME =================== */
  const home = `
<section class="hero dark">
  <canvas class="hero__canvas" data-guilloche aria-hidden="true"></canvas>
  <div class="hero__glow"></div><div class="hero__glow hero__glow--2"></div>
  <div class="wrap hero__grid">
    <div>
      ${eyebrow('Digital Finance • Smarter Future')}
      <h1 class="display" data-split>Every counter, a digital <span class="grad-text">finance</span> point.<span class="stamp">9 SERVICES · 1 ID</span></h1>
      <p class="hero__lede" data-reveal style="--d:.5">PC Digital gives retailers, distributors and businesses one platform for recharges, bill payments, Aadhaar banking, money transfer, payouts, UPI and travel bookings — so the shop your neighbourhood already trusts can do a lot more for it.</p>
      <div class="hero__actions" data-reveal style="--d:.65">${btn('Become a partner', 'become-a-partner.html', 'btn--gold')}${btn('Explore services', 'services.html', 'btn--ghost')}</div>
      <div class="hero__meta mono" data-reveal style="--d:.8"><span><b>01</b> One wallet</span><span><b>09</b> Services</span><span><b>02</b> Support lines</span><span>Dombivali · Thane · MH</span></div>
    </div>
    <div class="receipt-stage" data-speed="-0.05" aria-hidden="true">
      <span class="receipt-tag">ONE WALLET</span><span class="receipt-tag receipt-tag--2">9 SERVICES</span>
      <div class="receipt-slot"></div>
      <div class="receipt-clip"><div class="receipt">
        <div class="receipt__head"><img src="assets/img/logo-mark.png" alt=""><span>PARTNER LEDGER<br><span style="opacity:.5">ILLUSTRATIVE</span></span></div>
        <div class="receipt__rows"></div>
        <div class="receipt__foot"><span>SAMPLE DATA ONLY<br>WWW.PCDIGITAL.IN</span><span class="barcode"></span></div>
      </div></div>
    </div>
  </div>
  <div class="marquee">${[0, 1].map(() => `<div class="marquee__track">${services.map(s => `<span>${s.nav}</span><i></i>`).join('')}</div>`).join('')}</div>
</section>

<section class="section" style="background:var(--paper)">
  <div class="wrap">
    ${eyebrow('Who we are')}
    <p class="display" data-split style="font-size:clamp(1.9rem,4.2vw,3.7rem);line-height:1.08;margin:22px 0 60px;max-width:22ch;max-width:min(1100px,100%)">PC Digital Private Limited is a fintech company from Thane building <span class="grad-text">assisted digital finance</span> for the shops, distributors and businesses that keep Bharat running.</p>
    <div class="stats" data-stagger>
      <div class="stat"><b data-count="9">9</b><span>digital services on a single platform</span></div>
      <div class="stat"><b data-count="1">1</b><span>partner ID and wallet for everything</span></div>
      <div class="stat"><b data-count="42">42<sup>yrs</sup></b><span>combined experience of our two directors</span></div>
      <div class="stat"><b data-count="17">17<sup>yrs</sup></b><span>of that spent building in fintech</span></div>
    </div>
  </div>
</section>

<section class="section section--tight" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Products')}<h2 class="display" data-split>Nine services. One ledger.</h2></div>
      <p data-reveal>Everything a customer walks in asking for, from a ₹19 recharge to a rail ticket home. Every transaction lands in the same wallet, the same reports, the same support line.</p></div>
    ${ledger(services)}
  </div>
</section>

<section class="section" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Who it’s for')}<h2 class="display" data-split>Built around the people behind the counter.</h2></div>
      <p data-reveal>Whether you run one shop, manage a network of them, or need to move money for your business, there is a way to work with PC Digital.</p></div>
    <div class="aud">
      <article class="aud__card" data-reveal data-tilt><span class="aud__no">01</span><span class="mono">For shop owners</span><h3 class="display">Retailer</h3><p class="muted">Add digital services to the business you already run. Give customers more reasons to walk in, and earn on every successful transaction.</p>
        <ul><li>Kirana &amp; general stores</li><li>Mobile &amp; recharge shops</li><li>Medical stores</li><li>Travel agents &amp; cyber cafés</li></ul>${btn('Join as retailer', 'become-a-partner.html#apply', 'btn--sm')}</article>
      <article class="aud__card" data-reveal style="--d:.12" data-tilt><span class="aud__no">02</span><span class="mono" style="color:var(--marigold)">For network builders</span><h3 class="display">Distributor</h3><p class="muted">Onboard and support retailers in your area. Manage their wallet top-ups from one panel and grow as your network grows.</p>
        <ul><li>Telecom &amp; FMCG distributors</li><li>Existing fintech distributors</li><li>Area sales entrepreneurs</li><li>Master distributors</li></ul>${btn('Join as distributor', 'become-a-partner.html#apply', 'btn--sm')}</article>
      <article class="aud__card" data-reveal style="--d:.24" data-tilt><span class="aud__no">03</span><span class="mono">For companies</span><h3 class="display">Business</h3><p>Collect payments by UPI and pay vendors, partners and staff in bulk, with a reference and a status for every rupee.</p>
        <ul><li>Vendor &amp; supplier payouts</li><li>UPI QR collection</li><li>Bulk disbursals</li><li>Reconciliation reports</li></ul>${btn('Talk to us', 'contact.html', 'btn--sm')}</article>
    </div>
  </div>
</section>

<section class="section dark">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Onboarding')}<h2 class="display" data-split>Four steps from enquiry to first transaction.</h2></div>
      <p data-reveal>No complicated paperwork. A guided KYC, a verified partner ID, and a team you can call. <a class="link-u" href="kyc-onboarding.html">See the full KYC process →</a></p></div>
    ${stepsBlock(onboardingSteps)}
  </div>
</section>

<section class="section" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Why PC Digital')}<h2 class="display" data-split>Simple where it should be. Strict where it must be.</h2></div>
      <p data-reveal>We keep the panel easy and the processes tight, because trust at the counter is the only thing that makes this business work.</p></div>
    <div class="bento" data-stagger>
      <div class="b-7 b-ink"><svg class="guilloche" viewBox="0 0 200 200" fill="none" stroke="#9a5cf0" stroke-width=".5">${Array.from({ length: 18 }, (_, i) => `<ellipse cx="100" cy="100" rx="96" ry="38" transform="rotate(${i * 10} 100 100)"/>`).join('')}</svg>
        <span class="big">1</span><h3 class="h3" style="margin-top:14px">One ID, one wallet, every service</h3><p class="muted">Stop juggling separate apps and balances. Recharge, bills, AEPS, DMT, payouts, UPI and travel all run from a single login.</p></div>
      <div class="b-5"><span class="ic">${ic('<path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4.500"/>')}</span><h3 class="h3">KYC-first onboarding</h3><p class="muted">Every partner is verified before activation, which protects genuine retailers and their customers.</p></div>
      <div class="b-4"><span class="ic">${ic('<path d="M4 5h16v11H8l-4 3.500z"/><path d="M8 9.500h8M8 12.500h5"/>')}</span><h3 class="h3">Real people on support</h3><p class="muted">Two support lines and an email desk for transaction and onboarding help.</p></div>
      <div class="b-4 b-grad"><span class="ic">${ic('<path d="M4 19V9M10 19V5M16 19v-7M21 19H3"/>')}</span><h3 class="h3">Clear reports</h3><p style="opacity:.85">Every transaction carries a reference and a status you can search, download and reconcile.</p></div>
      <div class="b-4"><span class="ic">${ic('<path d="M12 8v4l2.500 2.500"/><circle cx="12" cy="12" r="8.500"/>')}</span><h3 class="h3">Real-time processing</h3><p class="muted">Transactions are sent to the operator, biller or bank instantly, with live status.</p></div>
      <div class="b-5"><span class="ic">${ic('<path d="M3 12h4l2-6 4 12 2-6h6"/>')}</span><h3 class="h3">Fair, visible refunds</h3><p class="muted">Failed transactions are reversed under a published policy, service by service. <a class="link-u" href="refund-cancellation-policy.html">Read it</a>.</p></div>
      <div class="b-7"><span class="ic">${ic('<circle cx="9" cy="8" r="3.500"/><path d="M2.500 20c.500-3.500 3-5.500 6.500-5.500s6 2 6.500 5.500M16 4.500a3.500 3.500 0 010 7M18 14.500c2 .700 3.200 2.500 3.500 5"/>')}</span><h3 class="h3">Led by people who have done this before</h3><p class="muted">Our directors bring 42 years of combined experience across banking, fintech and telecom. <a class="link-u" href="leadership.html">Meet them</a>.</p></div>
    </div>
  </div>
</section>

<section class="section dark">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Leadership')}<h2 class="display" data-split>The directors behind PC Digital.</h2></div>
      <p data-reveal>Banking discipline, fintech speed and telecom-style distribution thinking, in one leadership team.</p></div>
    <div class="directors">${directors.map(directorCard).join('')}</div>
    <div style="margin-top:46px" data-reveal>${btn('Read full profiles', 'leadership.html', 'btn--ghost')}</div>
  </div>
</section>

<section class="section" style="background:var(--paper);padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap split split--sticky">
    <div>${eyebrow('Questions')}<h2 class="display" data-split>Good to know before you join.</h2><p class="muted" data-reveal style="margin-bottom:26px">The short answers. The long ones live on our FAQ page.</p><div data-reveal>${btn('All FAQs', 'faq.html', 'btn--sm')}</div></div>
    <div data-reveal>${faqBlock(generalFaqs)}</div>
  </div>
</section>`;

  /* =================== ABOUT =================== */
  const about = phero({ crumbs: [['About us']], eyebrowText: 'About PC Digital', h1: 'Digital finance, <span class="grad-text">closer</span> to home.',
    lede: 'We are PC Digital Private Limited — a fintech company from Dombivali, Thane, on a simple mission: to make everyday financial and digital services available at the shop around the corner.' }) + `
<section class="section rounded-top" style="background:var(--paper)">
  <div class="wrap split split--sticky">
    <div>${eyebrow('Our story')}<h2 class="display" data-split>Why we built PC Digital.</h2></div>
    <div class="prose" data-reveal style="font-size:1.1rem">
      <p>India pays digitally now. But for a very large number of people, the last step is still a human one: a shopkeeper they know, who can recharge a phone, pay an electricity bill, withdraw cash from an Aadhaar-linked account or send money to a family member in another state.</p>
      <p>That shopkeeper is the real front line of digital finance — and too often they are left managing five different apps, five different balances and nobody to call when a transaction gets stuck.</p>
      <p>PC Digital was set up to fix that. We bring recharge and DTH, BBPS bill payments, AEPS, Domestic Money Transfer, payouts, UPI collection and travel bookings onto one platform, behind one partner ID and one wallet, with a support team that answers the phone.</p>
      <p>Our tagline says what we believe: <strong>Digital Finance • Smarter Future.</strong> When a neighbourhood counter can do more, the retailer earns more, the customer travels less, and the whole locality gets a little closer to the formal financial system.</p>
    </div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper)">
  <div class="wrap"><div class="stats" data-stagger>
    <div class="stat"><b data-count="9">9</b><span>services on one platform</span></div>
    <div class="stat"><b data-count="3">3</b><span>ways to partner: retailer, distributor, business</span></div>
    <div class="stat"><b data-count="42">42<sup>yrs</sup></b><span>combined leadership experience</span></div>
    <div class="stat"><b data-count="2">2</b><span>dedicated support lines</span></div>
  </div></div>
</section>
<section class="section dark">
  <div class="wrap">
    <div class="cards cards--2" data-stagger>
      <article class="card" style="padding:44px"><span class="mono">Our mission</span><h3 class="display" style="font-size:clamp(1.8rem,3.4vw,2.8rem);margin-bottom:16px">Make financial and digital services reachable for everyone, through the shops they already trust.</h3><p class="muted">We do it by giving retailers simple tools, honest processes and dependable support, so that offering a banking or payment service is as easy as selling any other product on the shelf.</p></article>
      <article class="card" style="padding:44px"><span class="mono">Our vision</span><h3 class="display" style="font-size:clamp(1.8rem,3.4vw,2.8rem);margin-bottom:16px">A smarter financial future where no customer is more than a short walk from digital finance.</h3><p class="muted">We want every PC Digital outlet to be a point of confidence in its locality: a place where a transaction is quick, the receipt is real and the person across the counter is accountable.</p></article>
    </div>
  </div>
</section>
<section class="section" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('What we stand for')}<h2 class="display" data-split>Five things we don’t compromise on.</h2></div><p data-reveal>These are the standards we hold ourselves to, and the ones we ask of every partner who carries our name on their counter.</p></div>
    <div class="ledger" data-stagger>
      ${[['Trust first', 'A financial service is only as good as the confidence people have in it. We verify every partner and stand behind every transaction record.'],
        ['Simplicity', 'If a retailer needs a manual to use it, we have built it wrong. One login, one wallet, plain language.'],
        ['Compliance', 'KYC, AML and the rules of our partner banks and service providers are part of the product, not an afterthought.'],
        ['Transparency', 'Published policies for refunds, charges and complaints. No surprises for partners or their customers.'],
        ['Support', 'When a transaction is stuck, someone should pick up. That is why our support numbers are on every page of this website.']]
        .map(([t, d], i) => `<div class="ledger__row" style="grid-template-columns:70px minmax(0,.8fr) minmax(0,1.4fr)"><span class="ledger__no">0${i + 1}</span><span class="ledger__name">${t}</span><span class="ledger__desc" style="display:block">${d}</span></div>`).join('')}
    </div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('What we do')}<h2 class="display" data-split>Three kinds of service. One platform.</h2></div><p data-reveal>${btn('See all nine services', 'services.html', 'btn--sm')}</p></div>
    <div class="cards" data-stagger>
      <article class="card" data-tilt><span class="mono">Assisted banking</span><h3 class="h3">AEPS &amp; Money Transfer</h3><p class="muted">Cash withdrawal, balance enquiry and mini statements through Aadhaar, and domestic money transfer to any bank account, offered in association with partner banks.</p></article>
      <article class="card" data-tilt><span class="mono">Payments</span><h3 class="h3">Recharge, BBPS, UPI &amp; Payouts</h3><p class="muted">Everyday recharges and bill payments for consumers, and UPI collection and bulk vendor payouts for businesses.</p></article>
      <article class="card" data-tilt><span class="mono">Travel</span><h3 class="h3">Rail, Flight &amp; Hotel</h3><p class="muted">IRCTC rail e-tickets, flight tickets and hotel stays, booked across the counter and paid from the same wallet.</p></article>
    </div>
  </div>
</section>
<section class="section dark">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Leadership')}<h2 class="display" data-split>Meet our directors.</h2></div><p data-reveal>${btn('Full profiles', 'leadership.html', 'btn--ghost btn--sm')}</p></div>
    <div class="directors">${directors.map(directorCard).join('')}</div>
  </div>
</section>
<section class="section" style="background:var(--paper);padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap split">
    <div>${eyebrow('Company information')}<h2 class="display" data-split>The details, on record.</h2></div>
    <div class="table-wrap" data-reveal><table class="table"><tbody>
      <tr><td class="mono">Legal name</td><td><strong>PC DIGITAL PRIVATE LIMITED</strong></td></tr>
      <tr><td class="mono">Registered address</td><td>${co.addr}</td></tr>
      <tr><td class="mono">Operational address</td><td>${co.addr}</td></tr>
      <tr><td class="mono">Support</td><td>${co.phones.map(tel).join(' &nbsp;/&nbsp; ')}</td></tr>
      <tr><td class="mono">Email</td><td><a class="link-u" href="mailto:${co.email}">${co.email}</a></td></tr>
      <tr><td class="mono">Website</td><td>www.pcdigital.in</td></tr>
    </tbody></table></div>
  </div>
</section>`;

  /* =================== LEADERSHIP =================== */
  const leadership = phero({ crumbs: [['About us', 'about.html'], ['Leadership']], eyebrowText: 'Board of Directors', h1: 'Experience you can <span class="grad-text">bank</span> on.',
    lede: 'PC Digital is led by two directors with 42 years of combined experience across banking, financial technology and telecommunications.',
    chips: ['42 years combined', '17 years in fintech', '20 years in banking', '5 years in telecom'] }) + `
<section class="section rounded-top" style="background:var(--paper);padding-top:clamp(40px,5vw,70px)">
  <div class="wrap">
  ${directors.map((d, i) => `
    <article class="profile" id="${d.id}" ${i === 0 ? 'style="border-top:0"' : ''}>
      <div class="profile__media" data-reveal="clip">
        <div class="director__photo"><span class="director__badge mono">Director</span><img src="assets/img/${d.img}" alt="${d.name}, Director, PC Digital Private Limited"></div>
      </div>
      <div>
        ${eyebrow(`Director · 0${i + 1}`)}
        <h2 class="display" data-split>${d.name}</h2>
        <div class="director__facts" data-reveal>
          <div><b data-count="${d.age}">${d.age}</b><span>Age (years)</span></div>
          <div><b data-count="${d.total}">${d.total}</b><span>Total work experience (years)</span></div>
          <div><b data-count="${d.exp[0][1]}">${d.exp[0][1]}</b><span>${d.exp[0][0]} (years)</span></div>
        </div>
        <h3 class="mono" style="margin:34px 0 12px;color:var(--violet)">Professional summary</h3>
        <div class="prose" data-reveal><p style="font-size:1.12rem">${d.summary}</p><p>${d.more}</p></div>
        <h3 class="mono" style="margin:34px 0 4px;color:var(--violet)">Professional experience</h3>
        <ul class="timeline" data-reveal>${d.exp.map(([l, y, t]) => `<li><b>${l} — ${y} years</b><span class="muted">${t}</span><div class="meter" style="--w:${Math.round(y / d.total * 100)}%"><i></i></div></li>`).join('')}
          <li><b>Total work experience — ${d.total} years</b><span class="muted">${d.exp.map(([l, y]) => `${y} years in ${l.replace(' Industry', '').toLowerCase()}`).join(' and ')}.</span><div class="meter" style="--w:100%"><i></i></div></li></ul>
        <div class="chips" style="margin-top:30px">${d.focus.map(f => `<span class="chip light">${f}</span>`).join('')}</div>
      </div>
    </article>`).join('')}
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2);padding-bottom:calc(clamp(56px,7vw,100px) + 60px)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Together')}<h2 class="display" data-split>What that adds up to.</h2></div><p data-reveal>Assisted finance sits where three industries meet. Our board has worked in all of them.</p></div>
    <div class="cards" data-stagger>
      <article class="card"><span class="mono">20 years</span><h3 class="h3">Banking</h3><p class="muted">The discipline of regulated finance: process, verification and accountability for every rupee.</p></article>
      <article class="card"><span class="mono">17 years</span><h3 class="h3">Fintech</h3><p class="muted">Seventeen combined years building and operating in financial technology.</p></article>
      <article class="card"><span class="mono">5 years</span><h3 class="h3">Telecom</h3><p class="muted">An understanding of how services reach customers through retail and distribution networks.</p></article>
    </div>
  </div>
</section>`;

  /* =================== SERVICES INDEX =================== */
  const servicesPage = phero({ crumbs: [['Services']], eyebrowText: 'Products', h1: 'Nine services. <span class="grad-text">One</span> platform.',
    lede: 'From a prepaid recharge to a vendor payout, every PC Digital service runs on the same partner ID, the same wallet and the same support desk.',
    chips: ['Payments', 'Assisted banking', 'Business payouts', 'Travel'] }) + `
<section class="section rounded-top" style="background:var(--paper)">
  <div class="wrap">${ledger(services)}</div>
</section>
<section class="section section--tight" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('At a glance')}<h2 class="display" data-split>Which service needs what.</h2></div><p data-reveal>Every service needs an active partner ID and completed KYC. Some need a little more.</p></div>
    <div class="table-wrap" data-reveal><table class="table">
      <thead><tr><th>Service</th><th>Best for</th><th>Additional requirement</th></tr></thead><tbody>
      ${[['Recharge & DTH', 'Any retail outlet', 'None'], ['BBPS Bill Payments', 'Any retail outlet', 'None'], ['AEPS', 'Outlets with cash at the counter', 'UIDAI-registered biometric device; bank agent authentication'],
        ['Domestic Money Transfer', 'Outlets serving migrant workers', 'Sender KYC for every remitter'], ['Payout Services', 'Businesses & distributors', 'Business KYC; declared purpose of payouts'],
        ['UPI Collection & Payouts', 'Merchants & businesses', 'Merchant KYC; verified settlement account'], ['Hotel Booking', 'Travel agents & retailers', 'None'], ['Flight Booking', 'Travel agents & retailers', 'None'],
        ['IRCTC Booking', 'Travel agents & retailers', 'Rail agent ID in the partner’s own name']].map(([a, b, c], i) => `<tr><td><a class="link-u" href="${services[i].slug}.html"><strong>${a}</strong></a></td><td>${b}</td><td>${c}</td></tr>`).join('')}
      </tbody></table></div>
  </div>
</section>
<section class="section dark" style="padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Getting started')}<h2 class="display" data-split>How to switch them on.</h2></div><p data-reveal>${btn('KYC & onboarding guide', 'kyc-onboarding.html', 'btn--ghost btn--sm')}</p></div>
    ${stepsBlock(onboardingSteps)}
  </div>
</section>`;

  /* =================== PARTNER =================== */
  const states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu & Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Other UT'];
  const partner = phero({ crumbs: [['Become a partner']], eyebrowText: 'Partner with PC Digital', h1: 'Upgrade your shop. <span class="grad-text">Grow</span> your counter.',
    lede: 'Join PC Digital as a retailer, distributor or business. Offer nine digital services from one ID, with guided onboarding and a support team behind you.',
    extra: `<div class="hero__actions" data-reveal style="--d:.5">${btn('Apply now', '#apply', 'btn--gold')}${btn('See KYC requirements', 'kyc-onboarding.html', 'btn--ghost')}</div>` }) + `
<section class="section rounded-top" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Ways to partner')}<h2 class="display" data-split>Pick the role that fits you.</h2></div><p data-reveal>Each role has its own panel, its own KYC and its own way of earning.</p></div>
    <div class="aud">
      <article class="aud__card" data-reveal data-tilt><span class="aud__no">01</span><span class="mono">Retailer</span><h3 class="display">Serve customers</h3><p class="muted">Offer recharges, bill payments, AEPS, money transfer and travel bookings from your own shop and earn on each successful transaction.</p>
        <ul><li>Works alongside your existing business</li><li>Smartphone or computer is enough to start</li><li>More services mean more reasons to visit</li><li>Commission visible in your panel</li></ul></article>
      <article class="aud__card" data-reveal style="--d:.12" data-tilt><span class="aud__no">02</span><span class="mono" style="color:var(--marigold)">Distributor</span><h3 class="display">Build a network</h3><p class="muted">Appoint and support retailers in your territory, manage their balance requests and earn as your network transacts.</p>
        <ul><li>No physical stock to hold</li><li>One panel for your whole network</li><li>Onboarding support from our team</li><li>Suits telecom, FMCG and fintech distributors</li></ul></article>
      <article class="aud__card" data-reveal style="--d:.24" data-tilt><span class="aud__no">03</span><span class="mono">Business</span><h3 class="display">Move money</h3><p>Use UPI collection and payout services to collect from customers and pay vendors, partners and staff at scale.</p>
        <ul><li>Bulk vendor payments</li><li>UPI QR collection</li><li>Reference-level reconciliation</li><li>Business KYC required</li></ul></article>
    </div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Suitable for')}<h2 class="display" data-split>If you have a counter, you qualify to apply.</h2></div><p data-reveal>Partners come from every kind of neighbourhood business.</p></div>
    <div class="cards cards--4" data-stagger>${['Kirana & general stores', 'Mobile & recharge shops', 'Medical stores', 'Travel agencies', 'Cyber cafés & service centres', 'Stationery & photocopy shops', 'Hardware & electrical stores', 'Insurance & finance agents'].map((t, i) => `<article class="card" style="padding:22px"><span class="mono" style="margin-bottom:22px">0${i + 1}</span><h3 class="h3" style="font-size:1.25rem">${t}</h3></article>`).join('')}</div>
  </div>
</section>
<section class="section dark">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('How to join')}<h2 class="display" data-split>Four steps to your partner ID.</h2></div><p data-reveal>You will need your PAN, Aadhaar, a bank account in your own name and proof of your shop or business. <a class="link-u" href="kyc-onboarding.html">Full document list →</a></p></div>
    ${stepsBlock(onboardingSteps)}
  </div>
</section>
<section class="section" id="apply" style="background:var(--paper);padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap split split--sticky">
    <div><div>${eyebrow('Apply')}<h2 class="display" data-split>Tell us about you.</h2>
      <p class="muted" data-reveal>Share a few details and our onboarding team will get in touch. Prefer to talk? Call ${co.phones.map(tel).join(' or ')}.</p>
      <div class="note" data-reveal style="margin-top:26px">PC Digital never asks for payment into a personal bank account or personal UPI ID. Do not share your OTP, password or MPIN with anyone.</div></div></div>
    <div class="panel" data-reveal="right">
      <form class="form" data-mailto="${co.email}" data-subject="Partner enquiry from website">
        <div class="field"><label for="p-name">Full name *</label><input id="p-name" name="Name" required autocomplete="name"></div>
        <div class="field"><label for="p-mobile">Mobile number *</label><input id="p-mobile" name="Mobile" required inputmode="numeric" pattern="[6-9][0-9]{9}" maxlength="10" title="10-digit Indian mobile number" autocomplete="tel-national"></div>
        <div class="field"><label for="p-email">Email</label><input id="p-email" name="Email" type="email" autocomplete="email"></div>
        <div class="field"><label for="p-type">I want to join as *</label><select id="p-type" name="Partner type" required><option value="">Select</option><option>Retailer</option><option>Distributor</option><option>Master Distributor</option><option>Business / Merchant</option></select></div>
        <div class="field"><label for="p-shop">Shop / business name</label><input id="p-shop" name="Business name" autocomplete="organization"></div>
        <div class="field"><label for="p-biz">Type of business</label><input id="p-biz" name="Business type" placeholder="e.g. Kirana store"></div>
        <div class="field"><label for="p-city">City / town *</label><input id="p-city" name="City" required></div>
        <div class="field"><label for="p-pin">PIN code *</label><input id="p-pin" name="PIN code" required inputmode="numeric" pattern="[1-9][0-9]{5}" maxlength="6" title="6-digit PIN code"></div>
        <div class="field field--full"><label for="p-state">State *</label><select id="p-state" name="State" required><option value="">Select</option>${states.map(s => `<option>${s}</option>`).join('')}</select></div>
        <div class="field field--full"><label for="p-svc">Services you are interested in</label><input id="p-svc" name="Services" placeholder="e.g. AEPS, DMT, BBPS"></div>
        <div class="field field--full"><label for="p-msg">Anything else?</label><textarea id="p-msg" name="Message"></textarea></div>
        <label class="check"><input type="checkbox" name="consent" required><span>I agree to be contacted by PC Digital about my enquiry and I have read the <a class="link-u" href="privacy-policy.html">Privacy Policy</a> and <a class="link-u" href="terms-and-conditions.html">Terms &amp; Conditions</a>.</span></label>
        <div class="form__foot"><small>Submitting opens your email app with your details addressed to ${co.email}. Nothing is stored on this website.</small>${`<button class="btn" type="submit"><span>Send enquiry</span><span class="arr">${arrow}${arrow}</span></button>`}</div>
        <div class="form__msg" role="status">Your email app should now be open with your enquiry. Press send there to reach us. If nothing opened, write to ${co.email} or call +91 ${co.phones[0]}.</div>
      </form>
    </div>
  </div>
</section>`;

  /* =================== KYC =================== */
  const kyc = phero({ crumbs: [['KYC & onboarding']], eyebrowText: 'KYC process for onboarding', h1: 'Verified in, <span class="grad-text">trusted</span> out.',
    lede: 'Every PC Digital partner is verified before activation. Here is exactly what the KYC process involves, which documents you need and the conditions that apply.',
    chips: ['PAN', 'Aadhaar', 'Bank proof', 'Business proof', 'Live photo'] }) + `
<section class="section rounded-top" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('The process')}<h2 class="display" data-split>Six steps, start to activation.</h2></div><p data-reveal>Most of it happens on your phone. Keep your original documents and your Aadhaar-linked mobile number handy.</p></div>
    <div class="ledger" data-stagger>
      ${[['Register', 'Share your name, mobile number, email and the type of partnership you want. Verify your mobile number with an OTP.'],
        ['Verify PAN', 'Enter your PAN. The name and status are verified against official records. PAN is mandatory for every partner.'],
        ['Verify Aadhaar', 'Complete Aadhaar-based e-KYC with your consent, using an OTP sent to your Aadhaar-linked mobile number, or submit another officially valid document.'],
        ['Add bank account', 'Provide your account number and IFSC with a cancelled cheque or passbook copy. The account must be in your own or your business’s name and is verified before use.'],
        ['Business & outlet details', 'Share your shop or business name, address and proof, a live photograph of yourself and photographs of the outlet.'],
        ['Review & activation', 'Our team reviews your application. Once approved, your partner ID is activated and services are enabled. Some services need additional approval from the service provider.']]
        .map(([t, d], i) => `<div class="ledger__row" style="grid-template-columns:70px minmax(0,.7fr) minmax(0,1.5fr)"><span class="ledger__no">0${i + 1}</span><span class="ledger__name">${t}</span><span class="ledger__desc" style="display:block">${d}</span></div>`).join('')}
    </div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Documents')}<h2 class="display" data-split>What to keep ready.</h2></div><p data-reveal>Documents must be clear, valid and in the applicant’s own name. Additional documents may be requested based on the service or risk review.</p></div>
    <div class="table-wrap" data-reveal><table class="table">
      <thead><tr><th>Document</th><th>Individual / proprietor</th><th>Firm / LLP / company</th></tr></thead><tbody>
      <tr><td><strong>PAN</strong></td><td>PAN card of the applicant</td><td>PAN of the entity and of partners / directors / signatories</td></tr>
      <tr><td><strong>Identity &amp; address</strong></td><td>Aadhaar (e-KYC with consent) or passport, voter ID or driving licence</td><td>KYC of partners, directors, authorised signatories and beneficial owners</td></tr>
      <tr><td><strong>Photograph</strong></td><td>Live selfie / recent photograph</td><td>Photograph of authorised signatory</td></tr>
      <tr><td><strong>Bank proof</strong></td><td>Cancelled cheque, passbook or statement in applicant’s name</td><td>Cancelled cheque or statement in the entity’s name</td></tr>
      <tr><td><strong>Business proof</strong></td><td>Shop &amp; Establishment certificate, Udyam, GST certificate, utility bill or rent agreement</td><td>Certificate of incorporation / registration, partnership deed / LLP agreement / MoA &amp; AoA, GST certificate</td></tr>
      <tr><td><strong>Authorisation</strong></td><td>Not applicable</td><td>Board resolution or authorisation letter</td></tr>
      <tr><td><strong>Outlet</strong></td><td>Photographs of the shop, inside and outside</td><td>Photographs of the office / outlet</td></tr>
      </tbody></table></div>
  </div>
</section>
<section class="section" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Service-specific')}<h2 class="display" data-split>Some services ask for more.</h2></div><p data-reveal>These requirements come from the banks and networks that provide the service.</p></div>
    <div class="cards" data-stagger>
      <article class="card"><span class="mono">AEPS</span><h3 class="h3">Biometric device &amp; agent authentication</h3><p class="muted">A UIDAI-registered fingerprint device and bank-level agent onboarding, including periodic two-factor authentication of the agent.</p><p style="margin-top:14px"><a class="link-u" href="aeps.html">AEPS details →</a></p></article>
      <article class="card"><span class="mono">DMT</span><h3 class="h3">Remitter KYC for every sender</h3><p class="muted">Each customer who sends money is registered with their mobile number and the KYC prescribed for remitters, with limits by KYC level.</p><p style="margin-top:14px"><a class="link-u" href="dmt.html">DMT details →</a></p></article>
      <article class="card"><span class="mono">IRCTC</span><h3 class="h3">Rail agent ID in your name</h3><p class="muted">A separate agent registration with the prescribed documents and registration fee. One ID per outlet, non-transferable.</p><p style="margin-top:14px"><a class="link-u" href="irctc-booking.html">IRCTC details →</a></p></article>
      <article class="card"><span class="mono">Payout</span><h3 class="h3">Business KYC &amp; purpose</h3><p class="muted">Entity documents, KYC of signatories and beneficial owners, and a declaration of the nature and purpose of payouts.</p><p style="margin-top:14px"><a class="link-u" href="payout.html">Payout details →</a></p></article>
      <article class="card"><span class="mono">UPI</span><h3 class="h3">Merchant KYC &amp; settlement account</h3><p class="muted">Merchant verification, business category and a verified settlement bank account in the business name.</p><p style="margin-top:14px"><a class="link-u" href="upi.html">UPI details →</a></p></article>
      <article class="card"><span class="mono">Others</span><h3 class="h3">Recharge, BBPS, Flights &amp; Hotels</h3><p class="muted">Available on your standard partner KYC, with no additional registration.</p><p style="margin-top:14px"><a class="link-u" href="services.html">All services →</a></p></article>
    </div>
  </div>
</section>
<section class="section dark">
  <div class="wrap split">
    <div data-reveal="left">${eyebrow('Conditions')}<h2 class="display">Conditions of onboarding</h2>
      <ul class="checks">
        ${[['18 years or older', 'The applicant must be an adult Indian resident, competent to contract.'], ['Everything in your own name', 'PAN, Aadhaar, bank account and application must belong to the same person or entity.'], ['One ID per person', 'A partner ID is personal and non-transferable. It cannot be operated by anyone else.'],
          ['A real place of business', 'A fixed shop or office address that can be verified.'], ['Wallet funded from your own account', 'Top-ups must come from your registered bank account. Third-party and cash deposits may be rejected.'], ['Re-KYC when asked', 'KYC is refreshed periodically and whenever your details change.'],
          ['Approval is not automatic', 'PC Digital and its service providers may decline or limit an application based on verification and risk review.'], ['Fees are non-refundable', 'Any onboarding or agent-ID fee is non-refundable once verification begins.']]
          .map(([t, d]) => `<li><div><b>${t}</b><span>${d}</span></div></li>`).join('')}
      </ul></div>
    <div data-reveal="right">${eyebrow('Your responsibilities')}<h2 class="display">Once you are live</h2>
      <ul class="checks">
        ${[['Verify every customer', 'Collect only what the service needs and transact only in the customer’s presence, on their instruction.'], ['Never store Aadhaar or biometrics', 'Customer Aadhaar numbers, fingerprints and OTPs must never be saved, copied or shared.'], ['Charge only what is permitted', 'Do not collect anything above the prescribed customer charges. Always give a receipt.'],
          ['No split or fictitious transactions', 'Do not break up transactions to avoid limits or to earn extra commission.'], ['Keep your login to yourself', 'Never share your password, MPIN or OTP — not even with someone claiming to be from PC Digital.'], ['Report anything suspicious', 'Tell us immediately if a transaction or customer seems doubtful.']]
          .map(([t, d]) => `<li><div><b>${t}</b><span>${d}</span></div></li>`).join('')}
      </ul>
      <p style="margin-top:26px">${btn('Read the KYC & AML Policy', 'kyc-aml-policy.html', 'btn--ghost btn--sm')}</p></div>
  </div>
</section>
<section class="section" style="background:var(--paper);padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap split split--sticky">
    <div>${eyebrow('KYC questions')}<h2 class="display" data-split>Before you start.</h2></div>
    <div data-reveal>${faqBlock([
      ['How long does KYC take?', 'If your documents are clear and your details match, verification is usually quick. Timelines can be longer for services that need approval from a bank or another service provider, such as AEPS or rail ticketing.'],
      ['My Aadhaar is not linked to my mobile number. Can I still apply?', 'Aadhaar OTP e-KYC needs a linked mobile number. You can update your mobile number at an Aadhaar centre, or speak to our team about the alternative documents we can accept.'],
      ['Can I use a family member’s bank account?', 'No. The bank account must be in the name of the applicant or the applicant’s business. This is a regulatory requirement.'],
      ['Why was my application rejected?', 'Common reasons are name mismatches between PAN, Aadhaar and bank account, unclear document images, or an unverifiable address. You can re-apply with corrected documents.'],
      ['Is my data safe?', 'Your documents are used only for verification and regulatory purposes, as described in our Privacy Policy. We do not store biometric data.'],
      ['Is there a fee to join?', 'Any applicable onboarding or service-specific registration fee will be explained to you by our team before you pay. Pay only into the official PC Digital company account.'],
    ])}</div>
  </div>
</section>`;

  /* =================== CONTACT =================== */
  const mapQ = encodeURIComponent('MG Plaza, Sonarpada Naka, Kalyan Shil Road, Dombivli East, Thane 421203');
  const contact = phero({ crumbs: [['Contact us']], eyebrowText: 'Support & service', h1: 'Talk to a <span class="grad-text">real</span> person.',
    lede: 'Questions about a transaction, onboarding or a service? Call, write or visit. We are based in Dombivali East, Thane.' }) + `
<section class="section rounded-top" style="background:var(--paper)">
  <div class="wrap split">
    <div data-reveal="left">
      ${eyebrow('Reach us')}
      <h2 class="display">Direct lines.</h2>
      <div class="contact-list">
        <div><span class="mono">Mobile 1</span><a class="big" href="tel:+91${co.phones[0]}">+91 81691 08855</a></div>
        <div><span class="mono">Mobile 2</span><a class="big" href="tel:+91${co.phones[1]}">+91 81695 08855</a></div>
        <div><span class="mono">E-mail</span><a class="big" href="mailto:${co.email}" style="word-break:break-word">${co.email}</a></div>
        <div><span class="mono">Registered address</span><div><span class="big" style="font-size:1.25rem">${co.name}</span><p class="muted" style="margin-top:8px">${co.addr}</p></div></div>
        <div><span class="mono">Operational address</span><div><p class="muted">${co.addr}</p></div></div>
        <div><span class="mono">Website</span><div>www.pcdigital.in</div></div>
      </div>
    </div>
    <div class="panel dark" data-reveal="right">
      ${eyebrow('Write to us')}
      <h2 class="display" style="font-size:clamp(1.8rem,3.4vw,2.8rem)">Send a message.</h2>
      <form class="form" data-mailto="${co.email}" data-subject="Website enquiry">
        <div class="field"><label for="c-name">Full name *</label><input id="c-name" name="Name" required autocomplete="name"></div>
        <div class="field"><label for="c-mobile">Mobile number *</label><input id="c-mobile" name="Mobile" required inputmode="numeric" pattern="[6-9][0-9]{9}" maxlength="10" title="10-digit Indian mobile number"></div>
        <div class="field"><label for="c-email">Email</label><input id="c-email" name="Email" type="email"></div>
        <div class="field"><label for="c-topic">Topic *</label><select id="c-topic" name="Topic" required><option value="">Select</option><option>Become a partner</option><option>Transaction issue</option><option>Refund / reversal</option><option>KYC / onboarding</option><option>Business payouts / UPI</option><option>Complaint</option><option>Other</option></select></div>
        <div class="field field--full"><label for="c-ref">Partner ID / transaction reference (if any)</label><input id="c-ref" name="Reference"></div>
        <div class="field field--full"><label for="c-msg">Message *</label><textarea id="c-msg" name="Message" required></textarea></div>
        <label class="check"><input type="checkbox" name="consent" required><span>I agree to be contacted about this enquiry and have read the <a class="link-u" href="privacy-policy.html">Privacy Policy</a>.</span></label>
        <div class="form__foot"><small>Submitting opens your email app addressed to ${co.email}. Never include passwords, OTPs or MPINs.</small><button class="btn btn--gold" type="submit"><span>Send message</span><span class="arr">${arrow}${arrow}</span></button></div>
        <div class="form__msg" role="status">Your email app should now be open with your message. Press send there to reach us. If nothing opened, write to ${co.email}.</div>
      </form>
    </div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Find us')}<h2 class="display" data-split>Mg Plaza, Sonarpada Naka.</h2></div><p data-reveal>Office No 03, 1st Floor, Kalyan Shill Road, near Sai Baba Temple, Dombivali East, Thane 421203. <a class="link-u" href="https://www.google.com/maps/search/?api=1&query=${mapQ}" target="_blank" rel="noopener">Open in Google Maps ↗</a></p></div>
    <div class="map" data-reveal="clip"><iframe title="Map showing PC Digital office in Dombivali East" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${mapQ}&output=embed"></iframe></div>
  </div>
</section>
<section class="section section--tight" style="background:var(--paper-2);padding-bottom:calc(clamp(56px,7vw,100px) + 60px)">
  <div class="wrap">
    <div class="section__head"><div>${eyebrow('Right desk, faster answer')}<h2 class="display" data-split>What do you need help with?</h2></div><p data-reveal>Keep your registered mobile number and transaction reference ready when you call.</p></div>
    <div class="cards cards--4" data-stagger>
      <a class="card" href="become-a-partner.html"><span class="mono">New partner</span><h3 class="h3">Join PC Digital</h3><p class="muted">Apply as a retailer, distributor or business.</p></a>
      <a class="card" href="refund-cancellation-policy.html"><span class="mono">Transactions</span><h3 class="h3">Refunds &amp; reversals</h3><p class="muted">How failed and pending transactions are handled.</p></a>
      <a class="card" href="grievance-redressal.html"><span class="mono">Complaints</span><h3 class="h3">Raise a grievance</h3><p class="muted">Escalation levels and timelines.</p></a>
      <a class="card" href="faq.html"><span class="mono">Self-help</span><h3 class="h3">Read the FAQs</h3><p class="muted">Quick answers to common questions.</p></a>
    </div>
  </div>
</section>`;

  /* =================== FAQ =================== */
  const faqGroups = [
    ['General', generalFaqs],
    ['Joining & KYC', [
      ['How do I become a partner?', 'Fill in the form on our <a class="link-u" href="become-a-partner.html">Become a Partner</a> page or call our support numbers. Our team will guide you through KYC and activation.'],
      ['Which documents do I need?', 'PAN, Aadhaar (or another officially valid document), a bank account proof in your own name, proof of your shop or business, and a live photograph. The full list is on our <a class="link-u" href="kyc-onboarding.html">KYC &amp; Onboarding</a> page.'],
      ['Do I need a computer?', 'No. A smartphone with internet is enough for most services. AEPS additionally needs a registered fingerprint device.'],
      ['Can I be both a retailer and a distributor?', 'Roles have separate IDs and KYC. Speak to our team about the right structure for your business.'],
      ['Can I transfer my ID to someone else?', 'No. A partner ID is issued after verifying a specific person or entity and is non-transferable.'],
    ]],
    ['Wallet & settlement', [
      ['How do I add money to my wallet?', 'Transfer funds from your own registered bank account using the methods shown in your panel and raise a load request with the payment reference. Balance is credited once the funds are confirmed.'],
      ['Can someone else deposit money for me?', 'No. Wallet top-ups must come from your own registered bank account. Third-party or cash deposits may be rejected and returned.'],
      ['When do I get my AEPS settlement?', 'AEPS withdrawal amounts are credited to your wallet as per the settlement cycle communicated at onboarding, which depends on partner bank timelines.'],
      ['How is commission paid?', 'Commission on successful transactions is credited as per the structure shown in your panel, after deduction of TDS as required by law.'],
      ['Can I withdraw my wallet balance?', 'Wallet balance is meant for transactions on the platform. On closing your account, the remaining balance is refunded to your registered bank account after verification and settlement of dues.'],
    ]],
    ['Transactions & refunds', [
      ['A transaction shows “pending”. What should I do?', 'Do not repeat it immediately. Pending transactions are reconciled with the service provider and will be marked success or reversed. If it stays pending, contact support with the transaction ID.'],
      ['A transaction failed but money was deducted.', 'Failed transactions are reversed to your wallet, or to the customer’s bank account in the case of AEPS and UPI, under the timelines in our <a class="link-u" href="refund-cancellation-policy.html">Refund &amp; Cancellation Policy</a>.'],
      ['I entered a wrong number or account. Can it be reversed?', 'A successful transaction processed on the details entered cannot be reversed by PC Digital. Please verify details with the customer before confirming.'],
      ['How do I raise a complaint?', 'Call or email support with your transaction reference. If you are not satisfied, escalate as described on our <a class="link-u" href="grievance-redressal.html">Grievance Redressal</a> page.'],
    ]],
    ['Safety & security', [
      ['Will PC Digital ever ask for my OTP or password?', 'Never. No one from PC Digital will ask for your password, MPIN or OTP. Do not share them with anyone.'],
      ['How do I know a call or message is really from PC Digital?', 'Our official contact details are the phone numbers and email on this website. If in doubt, disconnect and call us back on those numbers.'],
      ['Do you store customers’ fingerprints?', 'No. Biometric data for AEPS is captured through a registered device and sent in encrypted form for authentication. PC Digital does not store it.'],
      ['What should I do if I suspect fraud?', 'Contact us immediately so we can secure your account. You can also report financial cyber-fraud to the National Cyber Crime Helpline on 1930.'],
    ]],
  ];
  const faq = phero({ crumbs: [['FAQs']], eyebrowText: 'Help centre', h1: 'Questions, <span class="grad-text">answered.</span>',
    lede: 'Straight answers about joining PC Digital, KYC, wallet, transactions, refunds and security.',
    extra: `<div class="legal-nav" data-reveal style="--d:.5">${faqGroups.map(([g], i) => `<a href="#g${i}">${g}</a>`).join('')}</div>` }) + `
<section class="section rounded-top" style="background:var(--paper);padding-bottom:calc(clamp(80px,11vw,160px) + 60px)">
  <div class="wrap">${faqGroups.map(([g, items], i) => `
    <div class="split split--sticky" id="g${i}" style="padding:${i ? 'clamp(50px,7vw,90px)' : '0'} 0 0">
      <div><span class="mono" style="color:var(--violet)">0${i + 1} / 0${faqGroups.length}</span><h2 class="display" data-split>${g}</h2></div>
      <div data-reveal>${faqBlock(items)}</div>
    </div>`).join('')}
    <div class="note" style="margin-top:70px" data-reveal>Still stuck? Call ${co.phones.map(tel).join(' or ')}, or write to <a class="link-u" href="mailto:${co.email}">${co.email}</a>.</div>
  </div>
</section>`;

  /* =================== 404 =================== */
  const nf = `<section class="nf dark"><div class="hero__glow"></div><div class="wrap">
    ${eyebrow('Error 404')}<b class="grad-text" data-reveal="scale">404</b>
    <h1 class="display" style="font-size:clamp(1.8rem,4vw,3.2rem);margin:10px 0 16px">This transaction didn’t go through.</h1>
    <p class="muted" style="max-width:46ch;margin:0 auto 30px">The page you’re looking for doesn’t exist or has moved. Nothing has been debited — promise.</p>
    <div class="hero__actions" style="justify-content:center">${btn('Back to home', 'index.html', 'btn--gold')}${btn('Contact support', 'contact.html', 'btn--ghost')}</div></div></section>`;

  return [
    { file: 'index.html', title: 'PC Digital — Digital Finance • Smarter Future | Recharge, BBPS, AEPS, DMT, UPI & Travel', desc: 'PC Digital Private Limited gives retailers, distributors and businesses one platform for recharge, BBPS bill payments, AEPS, money transfer, payouts, UPI and travel bookings.', body: home },
    { file: 'about.html', title: 'About Us — PC Digital Private Limited', desc: 'PC Digital is a fintech company from Dombivali, Thane, making everyday financial and digital services available at the shop around the corner.', body: about },
    { file: 'leadership.html', title: 'Leadership — Directors of PC Digital', desc: 'Meet Mr. Chandan Singh and Mr. Pravin Puthran, directors of PC Digital Private Limited, with 42 years of combined experience across banking, fintech and telecom.', body: leadership },
    { file: 'services.html', title: 'Services — Recharge, BBPS, AEPS, DMT, Payout, UPI & Travel | PC Digital', desc: 'Explore all nine PC Digital services: Recharge & DTH, BBPS, AEPS, DMT, Payout, UPI collection & payouts, hotel, flight and IRCTC booking.', body: servicesPage },
    { file: 'become-a-partner.html', title: 'Become a Partner — Retailer, Distributor or Business | PC Digital', desc: 'Join PC Digital as a retailer, distributor or business and offer nine digital services from one partner ID.', body: partner },
    { file: 'kyc-onboarding.html', title: 'KYC Process for Onboarding — PC Digital', desc: 'The PC Digital KYC and onboarding process: steps, documents required, service-specific requirements and conditions.', body: kyc },
    { file: 'contact.html', title: 'Contact Us — PC Digital Support & Service', desc: 'Contact PC Digital: call 8169108855 or 8169508855, email Support@pcdigital.in, or visit us at Mg Plaza, Dombivali East, Thane 421203.', body: contact },
    { file: 'faq.html', title: 'FAQs — PC Digital', desc: 'Answers to common questions about joining PC Digital, KYC, wallet, transactions, refunds and security.', body: faq },
    { file: '404.html', title: 'Page not found — PC Digital', desc: 'Page not found.', body: nf, opts: { noCta: true, noindex: true } },
  ];
};
