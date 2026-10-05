// Generates index.html (English) and mr/index.html (Marathi) from content.js.
// Usage: node build.js
const fs = require('fs');
const path = require('path');
const { common, en, mr } = require('./content');

const icon = {
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  house: '<path d="M3 20V11a9 9 0 0118 0v9"/><path d="M3 20h18M9 20v-6M15 20v-6M3 14h18"/>',
  tree: '<circle cx="12" cy="9" r="6"/><path d="M12 15v6M9 21h6M9.5 8.5l2 2 3-3"/>',
  sprout: '<path d="M12 21v-9"/><path d="M12 13c0-4 3-7 8-7 0 4-3 7-8 7zM12 16c0-3-2-5-6-5 0 3 2 5 6 5z"/>',
  badge: '<circle cx="12" cy="9" r="5.5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/>',
  file: '<path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 13h7M9 17h7"/>',
  bank: '<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18"/>',
  scale: '<path d="M12 4v16M7 20h10M5 8h14"/><path d="M5 8l-3 7a3 3 0 006 0zM19 8l-3 7a3 3 0 006 0z"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  wa: '<path d="M3 21l1.6-4.8A9 9 0 1112 21a9 9 0 01-4.3-1.1z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.8-2-1-1 .8a4 4 0 01-2-2l.8-1-1-2z"/>',
  mapPin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
};
const svg = (name, cls = '') =>
  `<svg class="ic ${cls}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icon[name]}</svg>`;

const num = (n, lang) =>
  lang === 'mr' ? String(n).replace(/\d/g, (d) => '०१२३४५६७८९'[d]) : String(n);

const esc = (s) => s.replace(/"/g, '&quot;');
const strip = (s) => s.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&');

const galleryFiles = ['greenhouse', 'nursery-pots', 'nursery-table', 'nursery-shelf', 'moneyplant-mug', 'moneyplant-pot'];

function page(t) {
  const logo = `<img class="logo" src="${t.lang === 'en' ? '' : '../'}assets/img/logo-white.png" alt="Om Agro-Tech" width="640" height="131">`;
  const other = t.lang === 'en' ? mr : en;
  const base = t.lang === 'en' ? '' : '../';
  const url = common.domain + t.path;
  const wa = (msg) => `https://wa.me/${common.whatsapp}?text=${encodeURIComponent(msg)}`;
  const mapEmbed = `https://www.google.com/maps?q=${encodeURIComponent(common.mapQuery)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(common.mapQuery)}`;
  const f = t.contact.form;

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Om Agrotech',
    url: common.domain + '/',
    description: en.description,
    telephone: common.phones.map((p) => p.tel),
    email: common.email,
    founder: { '@type': 'Person', name: 'Hemant Kapase' },
    areaServed: { '@type': 'AdministrativeArea', name: 'Maharashtra, India' },
    availableLanguage: ['English', 'Marathi', 'Hindi'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Punyoday Apartment, S.N. 26, CTS 1352, Vishal Nagar, Pimple Nilakh',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411027',
      addressCountry: 'IN',
    },
  };

  return `<!doctype html>
<html lang="${t.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${t.title}</title>
<meta name="description" content="${esc(t.description)}">
<meta name="theme-color" content="#14391f">
<link rel="canonical" href="${url}">
<link rel="alternate" hreflang="en" href="${common.domain}/">
<link rel="alternate" hreflang="mr" href="${common.domain}/mr/">
<link rel="alternate" hreflang="x-default" href="${common.domain}/">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Om Agrotech">
<meta property="og:title" content="${esc(t.title)}">
<meta property="og:description" content="${esc(t.description)}">
<meta property="og:url" content="${url}">
<meta property="og:locale" content="${t.locale}">
<meta property="og:locale:alternate" content="${other.locale}">
<meta name="twitter:card" content="summary">
<link rel="icon" href="${base}assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Mukta:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${base}assets/style.css">
<script type="application/ld+json">${JSON.stringify(jsonld)}</script>
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<a class="skip" href="#main">${t.skip}</a>

<header class="site-header" id="top">
  <div class="wrap bar">
    <a class="brand" href="./" aria-label="Om Agrotech">${logo}</a>
    <nav class="nav" id="nav" aria-label="Main">
      ${t.nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('\n      ')}
    </nav>
    <div class="bar-actions">
      <a class="lang" href="${t.lang === 'en' ? 'mr/' : '../'}" hreflang="${other.lang}" lang="${other.lang}" title="${t.switchTitle}">${t.switchLabel}</a>
      <a class="btn btn-call" href="tel:${common.phones[0].tel}">${svg('phone')}<span>${t.callNow}</span></a>
      <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="nav" aria-label="${t.menu}">${svg('menu', 'open')}${svg('close', 'shut')}</button>
    </div>
  </div>
</header>

<main id="main">

<section class="hero">
  <div class="wrap hero-grid">
    <div class="hero-copy">
      <p class="eyebrow light">${t.hero.eyebrow}</p>
      <h1>${t.hero.title}</h1>
      <p class="lead">${t.hero.lead}</p>
      <div class="hero-cta">
        <a class="btn btn-wa" href="${wa(t.hero.waGreeting)}" target="_blank" rel="noopener">${svg('wa')}<span>${t.hero.primary}</span></a>
        <a class="btn btn-ghost" href="#services">${t.hero.secondary}${svg('arrow')}</a>
      </div>
    </div>
    <aside class="hero-card" aria-label="${esc(t.hero.cardTitle)}">
      <h2>${t.hero.cardTitle}</h2>
      <ul>
        ${t.hero.card.map((c) => `<li>${svg('check')}<span>${c}</span></li>`).join('\n        ')}
      </ul>
    </aside>
  </div>
  <svg class="hero-field" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0 80C240 20 480 20 720 70s480 50 720-10v100H0z" fill="#e3eedb"/>
    <path d="M0 110c260-50 520-40 760 0s460 30 680-20v70H0z" fill="#fbf8f1"/>
  </svg>
</section>

<section class="trust" aria-label="Credentials">
  <div class="wrap trust-grid">
    ${t.trust.map((x) => `<div class="trust-item"><b>${x.n}</b><span>${x.t}</span></div>`).join('\n    ')}
  </div>
</section>

<section class="schemes">
  <div class="wrap">
    <p class="schemes-title">${t.schemesTitle}</p>
    <ul class="scheme-list">
      ${common.schemes
        .map((s) => `<li title="${esc(strip(t.schemeNames[s]))}"><b>${s}</b><span>${t.schemeNames[s]}</span></li>`)
        .join('\n      ')}
    </ul>
  </div>
</section>

<section class="section about" id="about">
  <div class="wrap about-grid">
    <div class="about-visual reveal">
      <img src="${base}assets/img/greenhouse.jpg" alt="${esc(t.gallery.caps[0])}" width="900" height="600" loading="lazy" decoding="async">
      <div class="founder-badge">
        <small>${t.about.badgeTop}</small>
        <b>${t.about.badgeName}</b>
        <span>${t.about.badgeRole}</span>
      </div>
    </div>
    <div class="about-copy reveal">
      <p class="eyebrow">${t.about.eyebrow}</p>
      <h2>${t.about.title}</h2>
      <p>${t.about.p1}</p>
      <p>${t.about.p2}</p>
      <p>${t.about.p3}</p>
      <ul class="ticks">
        ${t.about.points.map((p) => `<li>${svg('check')}<span>${p}</span></li>`).join('\n        ')}
      </ul>
    </div>
  </div>
</section>

<section class="section services" id="services">
  <div class="wrap">
    <header class="section-head reveal">
      <p class="eyebrow">${t.services.eyebrow}</p>
      <h2>${t.services.title}</h2>
      <p>${t.services.lead}</p>
    </header>
    <div class="cards">
      ${t.services.items
        .map(
          ([ic, title, text], i) => `<article class="card reveal">
        <span class="card-ic">${svg(ic)}</span>
        <h3>${title}</h3>
        <p>${text}</p>
        <ul class="more" aria-label="${esc(t.services.detailsTitle)}">
          ${t.services.more[i].map((m) => `<li>${svg('check')}<span>${m}</span></li>`).join('')}
        </ul>
      </article>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section gallery" id="gallery">
  <div class="wrap">
    <header class="section-head reveal">
      <p class="eyebrow">${t.gallery.eyebrow}</p>
      <h2>${t.gallery.title}</h2>
      <p>${t.gallery.lead}</p>
    </header>
    <div class="gallery-grid">
      ${galleryFiles
        .map(
          (f, i) => `<figure class="shot shot-${i + 1} reveal"><img src="${base}assets/img/${f}.jpg" alt="${esc(t.gallery.caps[i])}" loading="lazy" decoding="async"><figcaption>${t.gallery.caps[i]}</figcaption></figure>`
        )
        .join('\n      ')}
    </div>
  </div>
</section>

<section class="section process" id="process">
  <div class="wrap">
    <header class="section-head reveal">
      <p class="eyebrow">${t.process.eyebrow}</p>
      <h2>${t.process.title}</h2>
      <p>${t.process.lead}</p>
    </header>
    <ol class="steps">
      ${t.process.steps
        .map(
          ([title, text], i) => `<li class="step reveal"><span class="step-n">${num(i + 1, t.lang)}</span><div><h3>${title}</h3><p>${text}</p></div></li>`
        )
        .join('\n      ')}
    </ol>
  </div>
</section>

<section class="section clients" id="clients">
  <div class="wrap">
    <header class="section-head reveal">
      <p class="eyebrow">${t.clients.eyebrow}</p>
      <h2>${t.clients.title}</h2>
      <p>${t.clients.lead}</p>
    </header>
    <ul class="client-grid">
      ${t.clients.items
        .map(
          (c) => `<li class="client reveal"><span class="avatar" aria-hidden="true">${[...c.name][0]}</span><div><b>${c.name}</b>${
            c.person ? `<span>${c.person}${c.note ? ` · ${c.note}` : ''}</span>` : ''
          }</div></li>`
        )
        .join('\n      ')}
    </ul>
  </div>
</section>

<section class="cta-band">
  <div class="wrap cta-inner">
    <div>
      <h2>${t.cta.title}</h2>
      <p>${t.cta.text}</p>
    </div>
    <div class="cta-actions">
      <a class="btn btn-wa" href="${wa(t.hero.waGreeting)}" target="_blank" rel="noopener">${svg('wa')}<span>${t.whatsappCta}</span></a>
      <a class="btn btn-ghost" href="tel:${common.phones[0].tel}">${svg('phone')}<span>${common.phones[0].display}</span></a>
    </div>
  </div>
</section>

<section class="section contact" id="contact">
  <div class="wrap">
    <header class="section-head reveal">
      <p class="eyebrow">${t.contact.eyebrow}</p>
      <h2>${t.contact.title}</h2>
      <p>${t.contact.lead}</p>
    </header>
    <div class="contact-grid">
      <div class="contact-info reveal">
        <ul class="info-list">
          <li>${svg('mapPin')}<div><b>${t.contact.addressLabel}</b><address>${t.contact.address}</address><a class="text-link" href="${mapLink}" target="_blank" rel="noopener">${t.contact.directions} ${svg('arrow', 'sm')}</a></div></li>
          <li>${svg('phone')}<div><b>${t.contact.phoneLabel}</b>${common.phones
            .map((p) => `<a href="tel:${p.tel}">${p.display}</a>`)
            .join('')}</div></li>
          <li>${svg('mail')}<div><b>${t.contact.emailLabel}</b><a href="mailto:${common.email}">${common.email}</a></div></li>
        </ul>
        <div class="map"><iframe title="${esc(t.mapTitle)}" src="${mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe></div>
      </div>
      <form class="enquiry reveal" id="enquiry" data-wa="${common.whatsapp}" data-greet="${esc(f.greet)}" data-l-name="${esc(f.lName)}" data-l-phone="${esc(f.lPhone)}" data-l-interest="${esc(f.lInterest)}" data-l-message="${esc(f.lMessage)}">
        <h3>${f.title}</h3>
        <p class="hint">${f.hint}</p>
        <label>${f.name}<input name="name" type="text" autocomplete="name" required></label>
        <label>${f.phone}<input name="phone" type="tel" inputmode="tel" autocomplete="tel" pattern="[+0-9\\s\\-]{10,15}" required></label>
        <label>${f.interest}
          <select name="interest">
            <option value="">${f.interestPlaceholder}</option>
            ${t.services.items.map(([, title]) => `<option>${strip(title)}</option>`).join('\n            ')}
            <option>${f.other}</option>
          </select>
        </label>
        <label>${f.message}<textarea name="message" rows="4"></textarea></label>
        <button class="btn btn-wa" type="submit">${svg('wa')}<span>${f.submit}</span></button>
      </form>
    </div>
  </div>
</section>

</main>

<footer class="site-footer">
  <div class="wrap foot-grid">
    <div>
      <a class="brand" href="#top" aria-label="Om Agrotech">${logo}</a>
      <p class="foot-tag">${t.footer.tagline}</p>
    </div>
    <div>
      <h4>${t.footer.links}</h4>
      <ul>${t.nav.map(([id, label]) => `<li><a href="#${id}">${label}</a></li>`).join('')}</ul>
    </div>
    <div>
      <h4>${t.footer.reach}</h4>
      <ul>
        ${common.phones.map((p) => `<li><a href="tel:${p.tel}">${p.display}</a></li>`).join('')}
        <li><a href="mailto:${common.email}">${common.email}</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap foot-base"><span>© <span id="year">2026</span> Om Agrotech. ${t.footer.rights}</span><span>${t.gallery.credit}</span></div>
</footer>

<div class="dock" role="group" aria-label="Quick contact">
  <a class="dock-call" href="tel:${common.phones[0].tel}">${svg('phone')}<span>${t.call}</span></a>
  <a class="dock-wa" href="${wa(t.hero.waGreeting)}" target="_blank" rel="noopener">${svg('wa')}<span>${t.whatsappCta}</span></a>
</div>
<a class="wa-float" href="${wa(t.hero.waGreeting)}" target="_blank" rel="noopener" aria-label="${esc(t.whatsappCta)}">${svg('wa')}</a>

<script src="${base}assets/main.js" defer></script>
</body>
</html>
`;
}

fs.mkdirSync(path.join(__dirname, 'mr'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'index.html'), page(en));
fs.writeFileSync(path.join(__dirname, 'mr', 'index.html'), page(mr));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${[en, mr]
  .map(
    (t) => `  <url><loc>${common.domain}${t.path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${common.domain}/"/>
    <xhtml:link rel="alternate" hreflang="mr" href="${common.domain}/mr/"/></url>`
  )
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(__dirname, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${common.domain}/sitemap.xml\n`);
console.log('Built index.html, mr/index.html, sitemap.xml, robots.txt');
