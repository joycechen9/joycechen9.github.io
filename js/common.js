// Shared helpers used by every page.

// Image, or a grey placeholder box when there's no image yet.
// When tools/optimize_images.py has made web-sized copies, the browser picks
// the smallest one that looks sharp at the size it's shown (`sizes`).
const SIZES = typeof IMAGE_SIZES !== "undefined" ? IMAGE_SIZES : {};
const PREVIEWS = typeof IMAGE_PREVIEWS !== "undefined" ? IMAGE_PREVIEWS : {};
const REDUCE_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Blur-up: show a tiny blurred preview straight away, then sharpen into the real image.
function blurUp(img, src) {
  const pv = PREVIEWS[src];
  if (!pv) return;
  img.style.backgroundImage = `url("${pv}")`;
  img.style.backgroundSize = "cover";
  img.style.backgroundPosition = "center";
  img.addEventListener("load", () => {
    img.style.backgroundImage = "";
    if (!REDUCE_MOTION && performance.now() - img._t0 > 60)   // skip the effect if it was already cached
      img.animate([{ filter: "blur(10px)" }, { filter: "blur(0)" }], { duration: 350, easing: "ease-out" });
  }, { once: true });
  img._t0 = performance.now();
}
function media(src, label, sizes) {
  if (src) {
    const img = document.createElement("img");
    const dims = SIZES[src];
    if (dims) {
      const base = src.replace(/\.[^.]+$/, "");
      img.srcset = `${base}.w800.webp 800w, ${base}.w1200.webp 1200w, ${base}.w1600.webp 1600w`;
      img.sizes = sizes || "(max-width: 900px) 50vw, 33vw";
      img.width = dims[0];
      img.height = dims[1];
    }
    blurUp(img, src);
    img.src = src; // fallback for very old browsers
    img.alt = label || "";
    img.loading = "lazy";
    img.decoding = "async";
    return img;
  }
  const ph = document.createElement("div");
  ph.className = "ph";
  ph.textContent = label || "";
  return ph;
}

// Tell the browser how wide each image really shows, so it downloads a copy that
// is sharp at that size (a full-width photo gets the big copy, a small tile the small one).
function fitSizes(container) {
  container.querySelectorAll("img[srcset]").forEach((img) => {
    const w = Math.ceil(img.parentElement.getBoundingClientRect().width);
    if (w) img.sizes = w + "px";
  });
}

// Placeholder shapes (height / width) so the empty layout looks like a real masonry grid.
const PH_RATIOS = [1.3, 0.75, 1.0, 1.45, 0.8, 1.15, 0.68];

// Find each item's height/width ratio: from its image once loaded, or a placeholder shape.
function ratioOf(el, i) {
  const img = el.querySelector("img") || (el.tagName === "IMG" ? el : null);
  const known = img && SIZES[img.getAttribute("src")];
  if (known) return known[1] / known[0];          // known up front: no reshuffle while loading
  if (img && img.naturalWidth) return img.naturalHeight / img.naturalWidth;
  return PH_RATIOS[i % PH_RATIOS.length];
}

/*
  Masonry: puts items into N side-by-side columns, left to right, each item
  going into whichever column is currently shortest. Every item keeps the
  proportions of its own image. Hidden items (class "hidden") are skipped.
*/
function masonry(container, items, columnsFor) {
  function layout() {
    if (container._custom && container._custom()) return;   // a hand-arranged layout took over
    const n = columnsFor();
    container.innerHTML = "";
    const cols = [];
    const heights = [];
    for (let c = 0; c < n; c++) {
      const col = document.createElement("div");
      col.className = "m-col";
      container.appendChild(col);
      cols.push(col);
      heights.push(0);
    }
    items.forEach((el, i) => {
      if (el.classList.contains("hidden")) return;
      const r = ratioOf(el, i);
      el.style.aspectRatio = (1 / r).toFixed(4);
      el.style.height = "";
      const c = heights.indexOf(Math.min(...heights));
      cols[c].appendChild(el);
      heights[c] += r;
    });
    fitSizes(container);
  }

  // Re-layout when images finish loading (their real shapes become known).
  items.forEach((el) => {
    const img = el.querySelector("img") || (el.tagName === "IMG" ? el : null);
    if (img && !img.complete && !SIZES[img.getAttribute("src")]) img.addEventListener("load", layout, { once: true });
  });

  let lastN = columnsFor();
  window.addEventListener("resize", () => {
    const n = columnsFor();
    if (n !== lastN) { lastN = n; layout(); }
  });

  layout();
  return layout;
}

/*
  Rows: lays items out in rows of up to `perRow`, every item in a row at the
  same height (widths follow each image's proportions, so the row is flush).
*/
function rows(container, items, perRowFor) {
  function layout() {
    const n = perRowFor();
    container.innerHTML = "";
    container.classList.add("rows");
    for (let i = 0; i < items.length; i += n) {
      const row = document.createElement("div");
      row.className = "r-row";
      items.slice(i, i + n).forEach((el, k) => {
        const w = 1 / ratioOf(el, i + k);          // width / height
        el.style.aspectRatio = w.toFixed(4);
        el.style.flex = w.toFixed(4) + " 1 0";
        row.appendChild(el);
      });
      container.appendChild(row);
    }
    fitSizes(container);
  }
  items.forEach((el) => {
    const img = el.querySelector("img");
    if (img && !img.complete && !SIZES[img.getAttribute("src")]) img.addEventListener("load", layout, { once: true });
  });
  let lastN = perRowFor();
  window.addEventListener("resize", () => {
    const n = perRowFor();
    if (n !== lastN) { lastN = n; layout(); }
  });
  layout();
}

// Pick masonry columns or equal-height rows for a photo group.
function photoGrid(container, items, layout, perRow = 3) {
  if (layout === "row") rows(container, items, () => (isNarrow() ? (perRow > 3 ? 2 : 1) : perRow));
  else masonry(container, items, gridColumns);
}

const isNarrow = () => window.matchMedia("(max-width: 900px)").matches;
const gridColumns = () => (isNarrow() ? 2 : 3);

// Cross-fade through a set of frames inside a box.
function flipper(box, frames, ms) {
  frames.forEach((f, i) => {
    f.classList.add("frame");
    if (i === 0) f.classList.add("on");
    box.appendChild(f);
  });
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (frames.length < 2 || reduce) return;
  let i = 0;
  setInterval(() => {
    frames[i].classList.remove("on");
    i = (i + 1) % frames.length;
    frames[i].classList.add("on");
  }, ms);
}

// Mark the sticky filter bar while it's pinned under the header (for the shared frosted fade)
document.addEventListener("DOMContentLoaded", () => {
  const f = document.querySelector(".filters");
  const h = document.querySelector(".site-header");
  if (!f || !h) return;
  const check = () => {
    const stuck = f.getBoundingClientRect().top <= h.offsetHeight + 1 && window.scrollY > 0;
    f.classList.toggle("stuck", stuck);
    document.body.classList.toggle("filters-stuck", stuck);
  };
  window.addEventListener("scroll", check, { passive: true });
  window.addEventListener("resize", check);
  check();
});
