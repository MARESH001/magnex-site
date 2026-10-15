/* =========================================================
   MAGNEX — shared shell: nav, search, footer, reveal, FAQ
   ========================================================= */

const LOGO_SVG = `
<svg class="brand__mark" viewBox="0 0 100 55.53" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs><linearGradient id="mgx" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#45d4fe"/><stop offset="1" stop-color="#1a8fd4"/></linearGradient></defs>
  <path d="M99.9 55.2 L82.6 38.9 L82.1 47.9 L74.6 47.8 L74.5 0.0 L50.4 25.0 L49.8 3.0 L0.0 55.2 L21.6 55.3 L34.3 42.3 L34.5 55.3 L49.9 55.3 L50.1 48.1 L58.7 39.0 L59.5 55.4 Z" fill="url(#mgx)"/>
</svg>`;

function catLink(cid) { return `category.html?cat=${cid}`; }

function buildNav() {
  const cats = Object.entries(CATALOG);
  const el = document.createElement("header");
  el.className = "nav";
  el.innerHTML = `
  <div class="nav__inner">
    <a class="brand" href="index.html" aria-label="Magnex home">
      ${LOGO_SVG}
      <span class="brand__txt">
        <span class="brand__name">${SITE.name}</span><br>
        <span class="brand__sub">${SITE.sub}</span>
      </span>
    </a>
    <div class="nav__spacer"></div>
    <div class="search">
      <input type="text" id="siteSearch" placeholder="Search products..." autocomplete="off" aria-label="Search products">
      <svg class="search__ico" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="7"/><path d="M16 16l5.5 5.5"/></svg>
      <div class="search__out" id="searchOut"></div>
    </div>
    <nav class="nav__links" aria-label="Primary">
      <div class="nav__item">
        <a class="nav__link" href="products.html">Products <i class="chev"></i></a>
        <div class="mega">
          <div class="mega__title">Export Portfolio</div>
          ${cats.map(([cid, c]) => `<a href="${catLink(cid)}">${c.name}</a>`).join("")}
          <a href="products.html" style="color:var(--gold)">View all →</a>
        </div>
      </div>
      <a class="nav__link" href="index.html#why">Why Us</a>
      <a class="nav__link" href="index.html#presence">Presence</a>
      <a class="nav__link" href="index.html#faq">FAQ</a>
    </nav>
    <a class="btn btn--solid btn--sm nav__cta" href="contact.html">Contact Us</a>
    <button class="theme-btn" id="themeBtn" aria-label="Switch between white and gold theme" title="White / gold">
      <svg class="ico-moon" viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      <svg class="ico-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
    </button>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>`;
  const here = location.pathname.split("/").pop() || "index.html";
  el.querySelectorAll(".nav__link, .nav__cta").forEach(a => { if (a.getAttribute("href") === here) a.classList.add("is-active"); });
  document.body.prepend(el);

  // mobile drawer
  const m = document.createElement("div");
  m.className = "mnav"; m.id = "mnav";
  m.innerHTML = `
    <h4>Products</h4>
    ${cats.map(([cid, c]) => `<a href="${catLink(cid)}">${c.name}</a>`).join("")}
    <h4>Company</h4>
    <a href="index.html#why">Why Us</a>
    <a href="index.html#presence">Presence</a>
    <a href="index.html#faq">FAQ</a>
    <a href="contact.html">Contact Us</a>
    <div style="margin-top:28px"><a class="btn btn--solid" href="contact.html" style="width:100%">Contact Us</a></div>
`;
  document.body.appendChild(m);

  // theme toggle: white (light) <-> gold; ?theme=gold|light in the URL also sets it
  el.querySelector("#themeBtn").addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "gold" ? "light" : "gold";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("magnex-theme", next); } catch (err) {}
    paintAllTextures();
  });


  const burger = el.querySelector("#burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-open");
    m.classList.toggle("is-open");
    document.body.style.overflow = m.classList.contains("is-open") ? "hidden" : "";
  });

  // sticky state
  const onScroll = () => el.classList.toggle("is-stuck", scrollY > 30);
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // search
  const input = el.querySelector("#siteSearch");
  const out = el.querySelector("#searchOut");
  const idx = allProducts();
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 2) { out.classList.remove("is-open"); return; }
    const hits = idx.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.catName.toLowerCase().includes(q) ||
      (p.varieties || []).some(v => (v.name || v).toLowerCase().includes(q))
    ).slice(0, 8);
    out.innerHTML = hits.length
      ? hits.map(p => `<a href="product.html?id=${p.id}">${p.name}<span class="s-cat">${p.catName} · ${p.groupName}</span></a>`).join("")
      : `<div class="s-empty">No products match “${input.value}”.</div>`;
    out.classList.add("is-open");
  });
  document.addEventListener("click", e => {
    if (!e.target.closest(".search")) out.classList.remove("is-open");
  });
}

function buildFooter() {
  const cats = Object.entries(CATALOG);
  const pops = POPULAR.map(findProduct).filter(Boolean);
  const f = document.createElement("footer");
  f.className = "foot"; f.id = "footer";
  f.innerHTML = `
  <div class="wrap">
    <div class="foot__grid">
      <div class="foot__brand">
        <a class="brand" href="index.html">${LOGO_SVG}
          <span class="brand__txt"><span class="brand__name">${SITE.name}</span><br><span class="brand__sub">${SITE.sub}</span></span>
        </a>
        <p>Exporting premium Indian agricultural commodities worldwide with a focus on quality, transparency, and reliable service.</p>
        <div class="foot__contact">
          <a href="tel:${SITE.phone.replace(/[^+\d]/g, "")}">${SITE.phone}</a>
          <a href="mailto:${SITE.email}">${SITE.email}</a>
          <span style="font-size:13.5px;color:var(--muted);display:block;margin-top:8px;line-height:1.7">${SITE.address}</span>
        </div>
      </div>
      <div>
        <h5>Quick Links</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">Products</a></li>
          <li><a href="index.html#why">Why Us</a></li>
          <li><a href="index.html#presence">Presence</a></li>
          <li><a href="index.html#faq">FAQ</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5>Regions Served</h5>
        <ul>
          <li><a href="#">Americas · Europe</a></li>
          <li><a href="#">Middle East</a></li>
          <li><a href="#">Asia · Africa</a></li>
          <li><a href="#">Australia · CIS</a></li>
        </ul>
      </div>
      <div>
        <h5>Categories</h5>
        <ul>${cats.map(([cid, c]) => `<li><a href="${catLink(cid)}">${c.name}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h5>Popular</h5>
        <ul>${pops.map(p => `<li><a href="product.html?id=${p.id}">${p.name}</a></li>`).join("")}</ul>
      </div>
    </div>
    <div class="foot__bottom">
      <span>© ${new Date().getFullYear()} ${SITE.legal}. All rights reserved.</span>
      <span>ISO Certified · FSSAI Compliant · APEDA Registered</span>
    </div>
  </div>`;
  document.body.appendChild(f);

  const wa = document.createElement("a");
  wa.className = "wa"; wa.href = SITE.whatsapp; wa.target = "_blank"; wa.rel = "noopener";
  wa.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .2 0 .7-.2 1.3z"/></svg>
    Chat with us`;
  // pre-fill the chat at click time so a product page passes its product name
  wa.addEventListener("click", () => {
    const pn = document.getElementById("pdName");
    wa.href = SITE.whatsapp + "?text=" + encodeURIComponent(SITE.whatsappText + (pn ? pn.textContent : ""));
  });
  document.body.appendChild(wa);
}

/* scroll-reveal — fires once per element; siblings in the same parent stagger 60ms (capped) */
function initReveal() {
  // index children of grids so CSS can stagger them (--i drives --rv-delay)
  document.querySelectorAll(".why, .stats, .pgrid, .catgrid").forEach(grid =>
    [...grid.children].forEach((c, i) => c.style.setProperty("--i", Math.min(i, 8))));
  // .rv siblings that share a parent rise in sequence instead of all at once
  document.querySelectorAll(".rv").forEach(el => {
    const sibs = [...el.parentElement.children].filter(c => c.classList.contains("rv"));
    const idx = sibs.indexOf(el);
    if (sibs.length > 1 && idx > 0 && !el.style.getPropertyValue("--rv-delay"))
      el.style.setProperty("--rv-delay", Math.min(idx, 8) * 60 + "ms");
  });
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -40px" });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));
  // clear the delay after the reveal so later transitions aren't held back
  document.addEventListener("transitionend", e => {
    if (e.target.classList && e.target.classList.contains("is-in")) e.target.style.removeProperty("--rv-delay");
  });
}

/* looping strips only run while on screen (and while the tab is visible) */
function initLoopGating() {
  const loops = document.querySelectorAll(".strip, .tradefeed, .voyage");
  if (!loops.length) return;
  const io = new IntersectionObserver(es =>
    es.forEach(e => e.target.classList.toggle("is-offscreen", !e.isIntersecting)), { threshold: 0 });
  loops.forEach(el => io.observe(el));
  document.addEventListener("visibilitychange", () =>
    loops.forEach(el => el.classList.toggle("is-offscreen", document.hidden)));
}

/* FAQ accordion — pass [[q,a],...] and a container */
function renderFAQ(container, faqs, openFirst = true) {
  container.innerHTML = faqs.map(([q, a], i) => `
    <div class="faq__item${openFirst && i === 0 ? " is-open" : ""}">
      <button class="faq__q">${q}<span class="faq__ico"></span></button>
      <div class="faq__a"><p>${a}</p></div>
    </div>`).join("");
  container.querySelectorAll(".faq__item").forEach(item => {
    const btn = item.querySelector(".faq__q");
    const body = item.querySelector(".faq__a");
    const sync = () => { body.style.maxHeight = item.classList.contains("is-open") ? body.scrollHeight + "px" : "0"; };
    btn.addEventListener("click", () => {
      const was = item.classList.contains("is-open");
      container.querySelectorAll(".faq__item").forEach(x => {
        x.classList.remove("is-open");
        x.querySelector(".faq__a").style.maxHeight = "0";
      });
      if (!was) { item.classList.add("is-open"); sync(); }
    });
    sync();
  });
}

/* query param */
function qp(name) { return new URLSearchParams(location.search).get(name); }

/* repaint textures on resize (debounced) */
let _rzT;
addEventListener("resize", () => {
  clearTimeout(_rzT);
  _rzT = setTimeout(() => paintAllTextures(), 220);
});

document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildFooter();
  if (typeof pageInit === "function") pageInit();
  paintAllTextures();
  initReveal();
  initLoopGating();
});
