/* =========================================================
   Procedural product textures — drawn on canvas so the
   magnifier can zoom losslessly into individual grains.
   ========================================================= */

function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function seedFrom(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
}

/* soft radial vignette + grain noise finish */
function finish(ctx, w, h, rnd, tint) {
  const g = ctx.createRadialGradient(w * .5, h * .42, h * .1, w * .5, h * .5, w * .75);
  g.addColorStop(0, "rgba(0,0,0,0)");
  g.addColorStop(1, "rgba(0,0,0,.5)");
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  if (tint) { ctx.fillStyle = tint; ctx.fillRect(0, 0, w, h); }
  ctx.globalAlpha = .05;
  for (let i = 0; i < w * h / 220; i++) {
    ctx.fillStyle = rnd() > .5 ? "#fff" : "#000";
    ctx.fillRect(rnd() * w, rnd() * h, 1.2, 1.2);
  }
  ctx.globalAlpha = 1;
}

function bgFill(ctx, w, h, c1, c2) {
  const g = ctx.createLinearGradient(0, 0, w * .3, h);
  g.addColorStop(0, c1); g.addColorStop(1, c2);
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}

/* one elongated grain with highlight + crease */
function grain(ctx, x, y, len, wid, rot, base, hi, shadow, rnd) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot);
  ctx.shadowColor = shadow; ctx.shadowBlur = wid * .8; ctx.shadowOffsetY = wid * .28;
  ctx.beginPath();
  ctx.ellipse(0, 0, len / 2, wid / 2, 0, 0, Math.PI * 2);
  const g = ctx.createLinearGradient(0, -wid / 2, 0, wid / 2);
  g.addColorStop(0, hi); g.addColorStop(.55, base); g.addColorStop(1, shadeHex(base, -18));
  ctx.fillStyle = g; ctx.fill();
  ctx.shadowColor = "transparent";
  // centre crease
  ctx.beginPath();
  ctx.moveTo(-len * .38, 0);
  ctx.quadraticCurveTo(0, wid * .08 * (rnd() - .5), len * .38, 0);
  ctx.strokeStyle = "rgba(0,0,0,.14)"; ctx.lineWidth = Math.max(.6, wid * .06); ctx.stroke();
  // glint
  ctx.beginPath();
  ctx.ellipse(-len * .12, -wid * .18, len * .22, wid * .1, .1, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,.22)"; ctx.fill();
  ctx.restore();
}

function roundSeed(ctx, x, y, r, base, hi, rnd, squash = 1) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rnd() * Math.PI);
  ctx.shadowColor = "rgba(0,0,0,.4)"; ctx.shadowBlur = r * .7; ctx.shadowOffsetY = r * .25;
  ctx.beginPath();
  ctx.ellipse(0, 0, r, r * squash, 0, 0, Math.PI * 2);
  const g = ctx.createRadialGradient(-r * .3, -r * .35, r * .1, 0, 0, r * 1.1);
  g.addColorStop(0, hi); g.addColorStop(.7, base); g.addColorStop(1, shadeHex(base, -25));
  ctx.fillStyle = g; ctx.fill();
  ctx.restore();
}

function shadeHex(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = (n >> 16) + amt, g = ((n >> 8) & 255) + amt, b = (n & 255) + amt;
  r = Math.min(255, Math.max(0, r)); g = Math.min(255, Math.max(0, g)); b = Math.min(255, Math.max(0, b));
  return `rgb(${r},${g},${b})`;
}

/* coffee bean with centre cut */
function bean(ctx, x, y, len, rot, base, hi, rnd) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot);
  const wid = len * .72;
  ctx.shadowColor = "rgba(0,0,0,.5)"; ctx.shadowBlur = len * .3; ctx.shadowOffsetY = len * .12;
  ctx.beginPath(); ctx.ellipse(0, 0, len / 2, wid / 2, 0, 0, Math.PI * 2);
  const g = ctx.createLinearGradient(0, -wid / 2, 0, wid / 2);
  g.addColorStop(0, hi); g.addColorStop(.5, base); g.addColorStop(1, shadeHex(base, -22));
  ctx.fillStyle = g; ctx.fill();
  ctx.shadowColor = "transparent";
  ctx.beginPath();
  ctx.moveTo(0, -wid * .42);
  ctx.bezierCurveTo(len * .1 * (rnd() > .5 ? 1 : -1), -wid * .1, -len * .08, wid * .15, 0, wid * .42);
  ctx.strokeStyle = "rgba(20,10,5,.65)"; ctx.lineWidth = len * .07; ctx.lineCap = "round"; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(-len * .16, -wid * .2, len * .14, wid * .1, .3, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,.13)"; ctx.fill();
  ctx.restore();
}

/* tea leaf twist */
function leafCurl(ctx, x, y, len, rot, base, hi, rnd) {
  ctx.save();
  ctx.translate(x, y); ctx.rotate(rot);
  ctx.shadowColor = "rgba(0,0,0,.5)"; ctx.shadowBlur = len * .25; ctx.shadowOffsetY = 2;
  ctx.beginPath();
  const k = len / 2;
  ctx.moveTo(-k, 0);
  ctx.bezierCurveTo(-k * .4, -len * .28 * (rnd() * .6 + .5), k * .4, len * .24 * (rnd() * .6 + .5), k, rnd() * 4 - 2);
  ctx.strokeStyle = base; ctx.lineWidth = len * (.14 + rnd() * .12); ctx.lineCap = "round"; ctx.stroke();
  ctx.shadowColor = "transparent";
  ctx.beginPath();
  ctx.moveTo(-k * .7, -1);
  ctx.bezierCurveTo(-k * .3, -len * .2, k * .3, len * .16, k * .7, 0);
  ctx.strokeStyle = hi; ctx.lineWidth = len * .05; ctx.stroke();
  ctx.restore();
}

const TEXTURE_STYLES = {
  rice:          { bg: ["#232019", "#161410"], draw: "grain",  base: "#efe6d2", hi: "#fbf6ea", n: 1.0, lw: [26, 5.2] },
  goldenrice:    { bg: ["#241d12", "#15100a"], draw: "grain",  base: "#e2c88f", hi: "#f2e0b4", n: 1.0, lw: [26, 5.4] },
  brownrice:     { bg: ["#1e1812", "#120e0a"], draw: "grain",  base: "#b99a6d", hi: "#d3b88e", n: 1.0, lw: [24, 5.4] },
  wheat:         { bg: ["#221b10", "#140f08"], draw: "grain",  base: "#d3a955", hi: "#e8c87e", n: .9,  lw: [17, 7.5] },
  sesame:        { bg: ["#201d16", "#13110c"], draw: "grain",  base: "#f0e8d6", hi: "#fbf7ec", n: 1.5, lw: [10, 5] },
  coffee:        { bg: ["#17100b", "#0c0806"], draw: "bean",   base: "#5a3a24", hi: "#7d5636", n: .55 },
  greencoffee:   { bg: ["#171812", "#0d0e0a"], draw: "bean",   base: "#8b9b6a", hi: "#aab87f", n: .55 },
  tea:           { bg: ["#12100c", "#0a0908"], draw: "leaf",   base: "#241b12", hi: "#5b4632", n: 1.15 },
  leaf:          { bg: ["#101408", "#090b05"], draw: "leaf",   base: "#3a5222", hi: "#6c8a3f", n: 1.15 },
  "spice-red":   { bg: ["#1c0f0a", "#100806"], draw: "round",  base: "#a5341f", hi: "#cf5a35", n: 1.15, r: [7, 4] },
  "spice-yellow":{ bg: ["#231708", "#140d05"], draw: "grain",  base: "#d98f1f", hi: "#f0b344", n: .8,  lw: [30, 10] },
  seeds:         { bg: ["#1a160f", "#0f0c08"], draw: "grain",  base: "#7d6a3f", hi: "#a3905c", n: 1.3, lw: [12, 4.6] },
  "pulses-yellow":{bg: ["#221a0c", "#130f07"], draw: "round",  base: "#e3a92f", hi: "#f5cb62", n: .85, r: [10, 5], squash: .8 },
  "pulses-green":{ bg: ["#161a0f", "#0d0f08"], draw: "round",  base: "#5d7a35", hi: "#87a355", n: .95, r: [9, 4], squash: .9 },
  chickpea:      { bg: ["#201a11", "#12100a"], draw: "round",  base: "#d9b477", hi: "#efd3a0", n: .55, r: [17, 6], squash: .92 },
  almond:        { bg: ["#1c1510", "#100c08"], draw: "grain",  base: "#b57e46", hi: "#d4a067", n: .5,  lw: [34, 18] },
  cashew:        { bg: ["#1e1a13", "#12100b"], draw: "grain",  base: "#e8d9b8", hi: "#f7eed8", n: .5,  lw: [34, 15] },
  raisin:        { bg: ["#171009", "#0d0906"], draw: "round",  base: "#5d3b1e", hi: "#8a5c33", n: .8,  r: [12, 6], squash: .75 },
  "powder-red":  { bg: ["#240d06", "#140704"], draw: "powder", base: "#b03a17", hi: "#e0602c", n: 1 },
  generic:       { bg: ["#1b1a17", "#100f0d"], draw: "round",  base: "#c9c2b2", hi: "#e6e0d2", n: .8,  r: [9, 5] }
};

/**
 * Paint a product texture onto a canvas.
 * density scales grain count; canvases can be any size — draw in device px.
 */
function paintTexture(canvas, type, seedStr, scale = 1) {
  const style = TEXTURE_STYLES[type] || TEXTURE_STYLES.generic;
  const ctx = canvas.getContext("2d");
  const w = canvas.width, h = canvas.height;
  const rnd = mulberry32(seedFrom(seedStr || type));
  bgFill(ctx, w, h, style.bg[0], style.bg[1]);

  const unit = Math.sqrt(w * h) / 26 * scale;

  if (style.draw === "powder") {
    // mounded powder: layered blobs + speckle
    for (let i = 0; i < 5; i++) {
      const cx = w * (.2 + rnd() * .6), cy = h * (.35 + rnd() * .4), r = unit * (4 + rnd() * 5);
      const g = ctx.createRadialGradient(cx - r * .3, cy - r * .3, r * .1, cx, cy, r);
      g.addColorStop(0, style.hi); g.addColorStop(.7, style.base); g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
    }
    for (let i = 0; i < w * h / (140 / scale); i++) {
      ctx.fillStyle = rnd() > .5 ? style.hi : shadeHex(style.base, -30);
      ctx.globalAlpha = .25 + rnd() * .45;
      const s = (.6 + rnd() * 1.6) * scale;
      ctx.fillRect(rnd() * w, rnd() * h, s, s);
    }
    ctx.globalAlpha = 1;
  } else {
    const count = Math.round((w * h) / (unit * unit) * (style.n || 1) * 1.35);
    for (let i = 0; i < count; i++) {
      const x = rnd() * w, y = rnd() * h, rot = rnd() * Math.PI * 2;
      const jitter = .75 + rnd() * .55;
      if (style.draw === "grain") {
        const [L, W] = style.lw;
        grain(ctx, x, y, L / 10 * unit * jitter, W / 10 * unit * jitter, rot,
              style.base, style.hi, "rgba(0,0,0,.45)", rnd);
      } else if (style.draw === "bean") {
        bean(ctx, x, y, unit * 1.35 * jitter, rot, style.base, style.hi, rnd);
      } else if (style.draw === "leaf") {
        leafCurl(ctx, x, y, unit * 1.5 * jitter, rot, style.base, style.hi, rnd);
      } else { // round
        const [R] = style.r || [9, 5];
        roundSeed(ctx, x, y, R / 10 * unit * jitter, style.base, style.hi, rnd, style.squash || 1);
      }
    }
  }
  finish(ctx, w, h, rnd);
  return canvas;
}

/* size a canvas to its element box (device pixels) then paint */
function paintFit(canvas, type, seedStr, scale = 1, dpr = Math.min(devicePixelRatio || 1, 2)) {
  const r = canvas.getBoundingClientRect();
  canvas.width = Math.max(2, Math.round(r.width * dpr));
  canvas.height = Math.max(2, Math.round(r.height * dpr));
  paintTexture(canvas, type, seedStr, scale);
}

/* auto-paint everything tagged data-tex */
function paintAllTextures(root = document) {
  root.querySelectorAll("canvas[data-tex]").forEach(c => {
    paintFit(c, c.dataset.tex, c.dataset.seed || c.dataset.tex, parseFloat(c.dataset.scale || "1"));
  });
}
