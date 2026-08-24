/* =========================================================
   MAGNEX — shared shell: nav, search, footer, reveal, FAQ
   ========================================================= */

const LOGO_SVG = `
<svg class="brand__mark" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
  <rect width="44" height="44" rx="8" fill="#17171a"/>
  <rect width="44" height="44" rx="8" fill="none" stroke="rgba(201,168,106,.4)"/>
  <path d="M10 32 L17 13 L22 25 L27 13 L34 32" fill="none" stroke="#c9a86a" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 32 L34 32" stroke="rgba(201,168,106,.5)" stroke-width="1.4" stroke-linecap="round"/>
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
      <a class="nav__link" href="index.html#faq">FAQ</a>
      <a class="nav__link" href="index.html#contact">Contact</a>
    </nav>
    <a class="btn btn--ghost btn--sm" href="index.html#contact" style="border-color:var(--gold);color:var(--gold)">Get a Quote</a>
    <button class="burger" id="burger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div>`;
  document.body.prepend(el);

  // mobile drawer
  const m = document.createElement("div");
  m.className = "mnav"; m.id = "mnav";
  m.innerHTML = `
    <h4>Products</h4>
    ${cats.map(([cid, c]) => `<a href="${catLink(cid)}">${c.name}</a>`).join("")}
    <h4>Company</h4>
    <a href="index.html#why">Why Us</a>
    <a href="index.html#faq">FAQ</a>
    <a href="index.html#contact">Contact</a>
    <div style="margin-top:28px"><a class="btn btn--solid" href="index.html#contact" style="width:100%">Get a Quote</a></div>`;
  document.body.appendChild(m);

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
  f.className = "foot"; f.id = "contact";
  f.innerHTML = `
  <div class="wrap">
    <div class="foot__grid">
      <div class="foot__brand">
        <a class="brand" href="index.html">${LOGO_SVG}
          <span class="brand__txt"><span class="brand__name">${SITE.name}</span><br><span class="brand__sub">${SITE.sub}</span></span>
        </a>
        <div class="foot__tag">Star Export House · Est. 2008</div>
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
          <li><a href="index.html#faq">FAQ</a></li>
          <li><a href="index.html#contact">Contact</a></li>
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
      <span>© ${new Date().getFullYear()} ${SITE.name} International Trade. All rights reserved.</span>
      <span>ISO Certified · FSSAI Compliant · APEDA Registered</span>
    </div>
  </div>`;
  document.body.appendChild(f);

  const wa = document.createElement("a");
  wa.className = "wa"; wa.href = SITE.whatsapp; wa.target = "_blank"; wa.rel = "noopener";
  wa.innerHTML = `<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.1.2-.3.3-.1.6.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.3.6.4 0 .2 0 .7-.2 1.3z"/></svg>
    Chat with us`;
  document.body.appendChild(wa);
}

/* scroll-reveal */
function initReveal() {
  const io = new IntersectionObserver(es => {
    es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: "0px 0px -40px" });
  document.querySelectorAll(".rv").forEach(el => io.observe(el));
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
});
