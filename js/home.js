// Homepage: name-photo flipper, work grid, tag filters, work list.

/* ---------- 1. Name flipper ---------- */
flipper(
  document.getElementById("name-flipper"),
  NAME_PHOTOS.length
    ? NAME_PHOTOS.map((src, i) => media(src, "Name photo " + (i + 1)))
    : [1, 2, 3, 4].map((n) => media("", "name photo " + n)),
  NAME_FLIP_MS
);

/* ---------- 2–3. Work grid + list ---------- */
const grid = document.getElementById("grid");
const list = document.getElementById("work-list");
const body = document.getElementById("work-body");
const filters = document.getElementById("filters");

const sorted = [...PROJECTS].sort((a, b) => b.year - a.year);
const link = (p) => "project.html?id=" + encodeURIComponent(p.id);

// Grid tiles
const tiles = sorted.map((p) => {
  const a = document.createElement("a");
  a.href = link(p);
  a.className = "tile";
  a.dataset.tags = p.tags.join(" ");
  a.appendChild(media(p.cover, p.cover ? p.title : ""));
  const cap = document.createElement("span");
  cap.className = "tile-caption";
  cap.textContent = p.title.toUpperCase();
  a.appendChild(cap);
  return a;
});
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
function applyFilter(tag) {
  filters.querySelectorAll("button").forEach((b) =>
    b.classList.toggle("active", b.dataset.tag === tag)
  );
  const match = (el) => tag === "all" || el.dataset.tags.split(" ").includes(tag);
  tiles.forEach((t) => t.classList.toggle("hidden", !match(t)));
  ul.querySelectorAll("li").forEach((li) => li.classList.toggle("hidden", !match(li)));
  // The list only appears once a tag is chosen; ALL shows the full-width grid.
  body.classList.toggle("with-list", tag !== "all");
  sketchLink.href = "sketchbook.html?tag=" + tag;
  relayout();
}

filters.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) applyFilter(b.dataset.tag);
});

applyFilter("all");
