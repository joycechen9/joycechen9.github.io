// Homepage: name-photo flipper, work grid, tag filters, work list.

function media(src, label) {
  if (src) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = label;
    img.loading = "lazy";
    return img;
  }
  const ph = document.createElement("div");
  ph.className = "ph";
  ph.textContent = label;
  return ph;
}

/* ---------- 1. Name flipper ---------- */
(function nameFlipper() {
  const box = document.getElementById("name-flipper");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const frames = NAME_PHOTOS.length
    ? NAME_PHOTOS.map((src, i) => media(src, "Name photo " + (i + 1)))
    : [1, 2, 3, 4].map((n) => media("", "name photo " + n));

  frames.forEach((f, i) => {
    f.classList.add("frame");
    if (i === 0) f.classList.add("on");
    box.appendChild(f);
  });

  if (frames.length < 2 || reduceMotion) return;
  let i = 0;
  setInterval(() => {
    frames[i].classList.remove("on");
    i = (i + 1) % frames.length;
    frames[i].classList.add("on");
  }, NAME_FLIP_MS);
})();

/* ---------- 2–3. Work grid + list ---------- */
const grid = document.getElementById("grid");
const list = document.getElementById("work-list");
const body = document.getElementById("work-body");
const filters = document.getElementById("filters");

const sorted = [...PROJECTS].sort((a, b) => b.year - a.year);
const link = (p) => "project.html?id=" + encodeURIComponent(p.id);

// Grid tiles
sorted.forEach((p) => {
  const a = document.createElement("a");
  a.href = link(p);
  a.className = "tile size-" + (p.size || "small");
  a.dataset.tags = p.tags.join(" ");
  a.appendChild(media(p.cover, ""));
  const cap = document.createElement("span");
  cap.className = "tile-caption";
  cap.textContent = p.title.toUpperCase();
  a.appendChild(cap);
  grid.appendChild(a);
});

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

EXTRA_LINKS.forEach((x) => {
  const a = document.createElement("a");
  a.className = "extra-link";
  a.href = x.href;
  a.textContent = x.title.toUpperCase();
  list.appendChild(a);
});

// Filtering
function applyFilter(tag) {
  filters.querySelectorAll("button").forEach((b) =>
    b.classList.toggle("active", b.dataset.tag === tag)
  );
  const match = (el) => tag === "all" || el.dataset.tags.split(" ").includes(tag);
  grid.querySelectorAll(".tile").forEach((t) => t.classList.toggle("hidden", !match(t)));
  ul.querySelectorAll("li").forEach((li) => li.classList.toggle("hidden", !match(li)));
  // The list only appears once a tag is chosen (wireframe 3); ALL shows the full-width grid.
  body.classList.toggle("with-list", tag !== "all");
}

filters.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) applyFilter(b.dataset.tag);
});

applyFilter("all");
