// Shared helpers used by every page.

// Image, or a grey placeholder box when there's no image yet.
function media(src, label) {
  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = label || "";
    img.loading = "lazy";
    return img;
  }
  const ph = document.createElement("div");
  ph.className = "ph";
  ph.textContent = label || "";
  return ph;
}

// Placeholder shapes (height / width) so the empty layout looks like a real masonry grid.
const PH_RATIOS = [1.3, 0.75, 1.0, 1.45, 0.8, 1.15, 0.68];

// Find each item's height/width ratio: from its image once loaded, or a placeholder shape.
function ratioOf(el, i) {
  const img = el.querySelector("img") || (el.tagName === "IMG" ? el : null);
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
      const c = heights.indexOf(Math.min(...heights));
      cols[c].appendChild(el);
      heights[c] += r;
    });
  }

  // Re-layout when images finish loading (their real shapes become known).
  items.forEach((el) => {
    const img = el.querySelector("img") || (el.tagName === "IMG" ? el : null);
    if (img && !img.complete) img.addEventListener("load", layout, { once: true });
  });

  let lastN = columnsFor();
  window.addEventListener("resize", () => {
    const n = columnsFor();
    if (n !== lastN) { lastN = n; layout(); }
  });

  layout();
  return layout;
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
