/* =========================================================
   Widgets: seamless loop card gallery + grain magnifier
   ========================================================= */

/* ---------- SEAMLESS LOOP GALLERY ----------
   buildScrollRing(section, containerEl, items)
   GSAP-demo style: cards sweep through centre with scale/
   opacity stagger. Scroll scrubs one full loop (section pins),
   dragging wraps infinitely, releases snap, buttons step. */
function buildScrollRing(section, ringEl, items) {
  if (!items.length) return;
  const n = items.length;

  ringEl.classList.add("lgal");
  ringEl.innerHTML = `
    <ul class="lgal__cards">
      ${items.map((p, i) => `
        <li class="lgal__card" data-i="${i}">
          <a href="product.html?id=${p.id}" draggable="false">
            <div class="lgal__media">
              ${p.photo
                ? `<img src="${p.photo}" alt="${p.name}" loading="lazy" draggable="false">`
                : `<canvas data-tex="${p.texture || "generic"}" data-seed="${p.id}"></canvas>`}
            </div>
            <span class="lgal__name">${p.name}</span>
            <span class="lgal__desc">${p.short}</span>
          </a>
        </li>`).join("")}
    </ul>`;

  const nav = document.createElement("div");
  nav.className = "ringnav";
  nav.innerHTML = `
    <button class="lgal__btn" data-d="-1" aria-label="Previous">←</button>
    <div class="dots">${items.map((_, i) => `<span class="dot${i === 0 ? " is-on" : ""}"></span>`).join("")}</div>
    <button class="lgal__btn" data-d="1" aria-label="Next">→</button>
    <span class="ringnav__hint">Scroll · drag · click</span>`;
  ringEl.after(nav);
  const dots = nav.querySelectorAll(".dot");

  // scroll room: the section pins while the loop plays once
  section.style.height = `calc(100vh + ${n * 38}vh)`;

  const cards = [...ringEl.querySelectorAll(".lgal__card")];
  const WIN = Math.min(7, Math.max(4, n));       // cards visible across the fan
  let cur = -0.0001, target = 0, raf = null, dragging = false;

  const wrapRel = v => { let r = ((v % n) + n) % n; return r > n / 2 ? r - n : r; };

  function render() {
    cards.forEach((el, i) => {
      const rel = wrapRel(i - cur);
      const a = Math.abs(rel);
      if (a >= WIN / 2) { el.style.visibility = "hidden"; return; }
      el.style.visibility = "visible";
      const t = .5 + rel / WIN;                          // 0..1 across the sweep
      const x = 420 - 840 * t;                           // xPercent, right → left
      const k = Math.max(0, 1 - a / (WIN / 2));          // centre emphasis
      el.style.opacity = Math.pow(k, 1.25).toFixed(3);
      el.style.zIndex = String(100 - Math.round(a * 10));
      el.style.transform = `translate(-50%,-50%) translateX(${x}%) scale(${(.4 + .6 * Math.pow(k, .85)).toFixed(3)})`;
      el.classList.toggle("is-center", a < .5);
    });
    const front = ((Math.round(cur) % n) + n) % n;
    dots.forEach((d, i) => d.classList.toggle("is-on", i === front));
  }

  function tick() {
    cur += (target - cur) * .1;
    if (Math.abs(target - cur) < .0004) { cur = target; render(); raf = null; return; }
    render();
    raf = requestAnimationFrame(tick);
  }
  const kick = () => { if (!raf) raf = requestAnimationFrame(tick); };

  function scrollProgress() {
    const rect = section.getBoundingClientRect();
    const total = section.offsetHeight - innerHeight;
    if (total <= 0) return 0;
    return Math.min(1, Math.max(0, -rect.top / total));
  }
  function onScroll() {
    if (dragging) return;
    target = scrollProgress() * n;          // one full loop over the pinned distance
    kick();
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);

  // set page scroll so the loop lands on card index (any winding)
  function scrollToIndex(idx) {
    const m = ((Math.round(idx) % n) + n) % n;
    cur = m + wrapRel(cur - m);             // rewind along the shortest path
    const total = section.offsetHeight - innerHeight;
    const top = section.getBoundingClientRect().top + scrollY;
    scrollTo({ top: top + (m / n) * total, behavior: "smooth" });
    target = m; kick();
  }

  nav.querySelectorAll(".lgal__btn").forEach(b =>
    b.addEventListener("click", () => scrollToIndex(Math.round(target) + (+b.dataset.d))));
  dots.forEach((d, i) => {
    d.style.cursor = "pointer";
    d.addEventListener("click", () => scrollToIndex(i));
  });

  // drag to spin (mouse + touch), snap on release
  let startX = 0, startT = 0, moved = 0;
  ringEl.addEventListener("pointerdown", e => {
    dragging = true; moved = 0; startX = e.clientX; startT = target;
    ringEl.setPointerCapture(e.pointerId);
  });
  ringEl.addEventListener("pointermove", e => {
    if (!dragging) return;
    const dx = e.clientX - startX; moved = Math.max(moved, Math.abs(dx));
    target = startT - dx / 170; kick();
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    scrollToIndex(Math.round(target));
  };
  ringEl.addEventListener("pointerup", endDrag);
  ringEl.addEventListener("pointercancel", endDrag);

  // clicks: centre card opens, side cards rotate to centre; drags never navigate
  ringEl.addEventListener("click", e => {
    const li = e.target.closest(".lgal__card");
    if (!li) return;
    if (moved > 6) { e.preventDefault(); return; }
    const i = +li.dataset.i;
    const rel = wrapRel(i - cur);
    if (Math.abs(rel) >= .5) {
      e.preventDefault();
      scrollToIndex(Math.round(cur) + Math.round(rel));
    }
  });

  render();
  requestAnimationFrame(() => paintAllTextures(ringEl));
}

/* ---------- GRAIN MAGNIFIER ----------
   Real photo when provided; procedural texture fallback.
   A high-res source is sampled by the lens for sharp zoom. */
function buildMagnifier(frame, type, seed, zoom = 2.6, photo = null) {
  const view = frame.querySelector("canvas.viewer__main");
  const lens = frame.querySelector(".viewer__lens");
  const lensCvs = lens.querySelector("canvas");

  const dpr = Math.min(devicePixelRatio || 1, 2);
  const r = frame.getBoundingClientRect();

  view.width = Math.round(r.width * dpr); view.height = Math.round(r.height * dpr);
  const SRC = document.createElement("canvas");
  SRC.width = Math.min(3200, Math.round(r.width * dpr * zoom));
  SRC.height = Math.min(2400, Math.round(r.height * dpr * zoom));

  const cover = (cvs, img) => {
    const c = cvs.getContext("2d");
    const s = Math.max(cvs.width / img.naturalWidth, cvs.height / img.naturalHeight);
    const w = img.naturalWidth * s, h = img.naturalHeight * s;
    c.fillStyle = "#101012"; c.fillRect(0, 0, cvs.width, cvs.height);
    c.drawImage(img, (cvs.width - w) / 2, (cvs.height - h) / 2, w, h);
  };

  const paintBoth = () => { paintTexture(view, type, seed, 1); paintTexture(SRC, type, seed, 1); };
  // swap = true when replacing a photo already on screen: blur-mask the crossfade
  const loadPhoto = (src, swap = false) => {
    const img = new Image();
    if (swap) frame.classList.add("is-swapping");
    const done = () => { if (swap) requestAnimationFrame(() => frame.classList.remove("is-swapping")); };
    img.onload = () => { cover(view, img); cover(SRC, img); done(); };
    img.onerror = () => { paintBoth(); done(); };
    img.src = src;
  };
  if (photo) loadPhoto(photo); else paintBoth();

  const lctx = lensCvs.getContext("2d");
  function sizeLens() {
    const lr = lens.getBoundingClientRect();
    lensCvs.width = Math.round(lr.width * dpr);
    lensCvs.height = Math.round(lr.height * dpr);
  }
  sizeLens();

  frame.addEventListener("pointermove", e => {
    const fr = frame.getBoundingClientRect();
    const x = e.clientX - fr.left, y = e.clientY - fr.top;
    const lw = lens.offsetWidth, lh = lens.offsetHeight;
    lens.style.left = (x - lw / 2) + "px";
    lens.style.top = (y - lh / 2) + "px";

    const sx = (x / fr.width) * SRC.width - (lw * dpr) / 2;
    const sy = (y / fr.height) * SRC.height - (lh * dpr) / 2;
    lctx.clearRect(0, 0, lensCvs.width, lensCvs.height);
    lctx.drawImage(SRC, sx, sy, lw * dpr, lh * dpr, 0, 0, lensCvs.width, lensCvs.height);

    const g = lctx.createRadialGradient(lensCvs.width * .35, lensCvs.height * .3, 0, lensCvs.width * .5, lensCvs.height * .5, lensCvs.width * .7);
    g.addColorStop(0, "rgba(255,255,255,.10)");
    g.addColorStop(.4, "rgba(255,255,255,0)");
    g.addColorStop(1, "rgba(0,0,0,.25)");
    lctx.fillStyle = g;
    lctx.fillRect(0, 0, lensCvs.width, lensCvs.height);
  });

  addEventListener("resize", () => {
    const fr = frame.getBoundingClientRect();
    view.width = Math.round(fr.width * dpr); view.height = Math.round(fr.height * dpr);
    if (photo) loadPhoto(photo); else paintTexture(view, type, seed, 1);
    sizeLens();
  });

  // allow the page to swap the photo (e.g. variety selection)
  return { setPhoto(src) { if (src === photo) return; photo = src || null; if (src) loadPhoto(src, true); else paintBoth(); } };
}
