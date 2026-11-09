// Homepage: name-photo flipper, work grid, tag filters, work list.

/* ---------- 1. Photo cycle ----------
   Photos load a few frames ahead of when they're shown, so the page
   doesn't download all of them at once. If the next photo isn't ready
   yet, the current one simply stays up a little longer. */
(function photoCycle() {
  const box = document.getElementById("name-flipper");
  if (!NAME_PHOTOS.length) {
    flipper(box, [1, 2, 3, 4].map((n) => media("", "photo " + n)), NAME_FLIP_MS);
    return;
  }
  const AHEAD = 3;
  // New random order on every visit (Fisher–Yates shuffle)
  const order = [...NAME_PHOTOS];
  for (let k = order.length - 1; k > 0; k--) {
    const r = Math.floor(Math.random() * (k + 1));
    [order[k], order[r]] = [order[r], order[k]];
  }
  const imgs = order.map((src, i) => {
    const img = document.createElement("img");
    img.alt = i === 0 ? "Joyce Chen" : "";
    img.className = "frame" + (i === 0 ? " on" : "");
    img.dataset.src = src;
    box.appendChild(img);
    return img;
  });
  const load = (i) => {
    const img = imgs[i % imgs.length];
    if (!img.src) img.src = img.dataset.src;
  };
  for (let k = 0; k <= AHEAD; k++) load(k);

  if (imgs.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let i = 0;
  setInterval(() => {
    const next = imgs[(i + 1) % imgs.length];
    if (!(next.complete && next.naturalWidth)) return; // wait for it
    imgs[i].classList.remove("on");
    i = (i + 1) % imgs.length;
    next.classList.add("on");
    load(i + AHEAD);
  }, NAME_FLIP_MS);
})();

/* ---------- 2–3. Work grid + list ---------- */
const grid = document.getElementById("grid");
const list = document.getElementById("work-list");
const body = document.getElementById("work-body");
const filters = document.getElementById("filters");

const sorted = [...PROJECTS].sort((a, b) => b.year - a.year);
const link = (p) => "project.html?id=" + encodeURIComponent(p.id);

// Grid tiles: one per cover image (a project can have several, all linking to its page)
const tiles = sorted.flatMap((p) =>
  (p.covers && p.covers.length ? p.covers : [p.cover]).map((src) => {
    const a = document.createElement("a");
    a.href = link(p);
    a.className = "tile";
    a.dataset.tags = p.tags.join(" ");
    a.appendChild(media(src, src ? p.title : ""));
    const cap = document.createElement("span");
    cap.className = "tile-caption";
    cap.textContent = p.title.toUpperCase();
    a.appendChild(cap);
    return a;
  })
);
const relayout = masonry(grid, tiles, gridColumns);

// List
const ul = document.createElement("ul");
sorted.forEach((p) => {
  const li = document.createElement("li");
  li.dataset.tags = p.tags.join(" ");
  li.innerHTML = `<a href="${link(p)}"><span class="li-title"></span><span class="li-year">${p.year}</span></a>`;
  li.querySelector(".li-title").textContent = p.title.toUpperCase();
  ul.appendChild(li);
});
list.appendChild(ul);

// Sketchbook link: points at the sketchbook for whichever tag is selected
const sketchLink = document.createElement("a");
sketchLink.className = "extra-link";
sketchLink.textContent = "SKETCHBOOK";
list.appendChild(sketchLink);

// Filtering
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function applyFilter(tag, animate = true) {
  filters.querySelectorAll("button").forEach((b) =>
    b.classList.toggle("active", b.dataset.tag === tag)
  );
  const match = (el) => tag === "all" || el.dataset.tags.split(" ").includes(tag);

  // FLIP: remember where each visible tile is before the change
  const before = new Map();
  if (animate && !REDUCE)
    tiles.forEach((t) => { if (!t.classList.contains("hidden")) before.set(t, t.getBoundingClientRect()); });

  tiles.forEach((t) => t.classList.toggle("hidden", !match(t)));
  ul.querySelectorAll("li").forEach((li) => li.classList.toggle("hidden", !match(li)));
  // The list only appears once a tag is chosen; ALL shows the full-width grid.
  body.classList.toggle("with-list", tag !== "all");
  sketchLink.href = "sketchbook.html?tag=" + tag;
  relayout();

  if (!animate || REDUCE) return;
  // ...then glide each tile from its old spot to its new one, and pop new tiles in
  let k = 0;
  tiles.forEach((t) => {
    if (t.classList.contains("hidden")) return;
    const now = t.getBoundingClientRect();
    const was = before.get(t);
    if (was) {
      const dx = was.left - now.left, dy = was.top - now.top;
      const sx = was.width / now.width, sy = was.height / now.height;
      if (Math.abs(dx) + Math.abs(dy) + Math.abs(sx - 1) + Math.abs(sy - 1) < 1) return;
      t.animate(
        [{ transformOrigin: "top left", transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
         { transformOrigin: "top left", transform: "none" }],
        { duration: 950, easing: "cubic-bezier(.2,.8,.2,1)" }
      );
    } else {
      t.animate(
        [{ opacity: 0, transform: "translateY(24px) scale(.94)" }, { opacity: 1, transform: "none" }],
        { duration: 850, delay: 60 * Math.min(k++, 12), easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" }
      );
    }
  });
  // List items fade in too
  ul.querySelectorAll("li:not(.hidden)").forEach((li, i) =>
    li.animate([{ opacity: 0, transform: "translateX(-8px)" }, { opacity: 1, transform: "none" }],
      { duration: 600, delay: 35 * i, easing: "ease-out", fill: "backwards" })
  );
}

filters.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) applyFilter(b.dataset.tag);
});

applyFilter("all", false);

/* ---------- About → Work: snap with easing, About fades out ---------- */
(function snapScroll() {
  const hero = document.getElementById("about");
  const work = document.getElementById("work");
  const header = document.querySelector(".site-header");
  const workTop = () => work.offsetTop - header.offsetHeight;

  // Fade (and slightly lift) the About section as you leave it
  function fade() {
    const t = Math.min(1, Math.max(0, window.scrollY / workTop()));
    hero.style.opacity = (1 - t * 1.15).toFixed(3);
    hero.style.transform = REDUCE ? "" : `translateY(${(t * -40).toFixed(1)}px)`;
  }
  window.addEventListener("scroll", () => requestAnimationFrame(fade), { passive: true });
  fade();

  if (REDUCE) return;
  let busy = false, cooldown = 0;
  // Ease-out: picks up the scroll's momentum immediately, then settles gently
  const ease = (x) => 1 - Math.pow(1 - x, 4);
  function glide(to) {
    busy = true;
    const from = window.scrollY, d = to - from, dur = 850, t0 = performance.now();
    document.documentElement.style.scrollBehavior = "auto";
    (function step(now) {
      const p = Math.min(1, (now - t0) / dur);
      window.scrollTo(0, from + d * ease(p));
      if (p < 1) requestAnimationFrame(step);
      else { busy = false; cooldown = performance.now() + 700; document.documentElement.style.scrollBehavior = ""; }
    })(t0);
  }
  // Decide whether a scroll gesture should snap between the two sections
  function intent(dy, e) {
    const y = window.scrollY, top = workTop();
    if (busy) { e.preventDefault(); return; }            // don't fight the glide
    if (performance.now() < cooldown) return;             // let leftover momentum scroll naturally
    if (dy > 0 && y < top - 2) { e.preventDefault(); glide(top); }
    else if (dy < 0 && y > 2 && y <= top + 2) { e.preventDefault(); glide(0); }
  }
  window.addEventListener("wheel", (e) => { if (Math.abs(e.deltaY) > 2) intent(e.deltaY, e); }, { passive: false });
  let ty = null;
  window.addEventListener("touchstart", (e) => { ty = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (ty === null) return;
    const dy = ty - e.touches[0].clientY;
    if (Math.abs(dy) > 12) { intent(dy, e); ty = null; }
  }, { passive: false });
  window.addEventListener("keydown", (e) => {
    const down = ["ArrowDown", "PageDown", " "].includes(e.key), up = ["ArrowUp", "PageUp"].includes(e.key);
    if ((down || up) && !e.target.closest("input, textarea, button")) intent(down ? 1 : -1, e);
  });
  // Header / nav links to #work and #about use the same glide
  document.querySelectorAll('a[href$="#work"], a[href$="#about"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      if (!a.pathname.endsWith("index.html") && a.pathname !== location.pathname) return;
      e.preventDefault();
      glide(a.hash === "#work" ? workTop() : 0);
    })
  );
})();
