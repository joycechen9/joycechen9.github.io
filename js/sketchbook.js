// Sketchbook page: one grid holding every sketchbook; the buttons switch between
// them with the same glide-and-reshuffle as the work grid on the homepage.

const grid = document.getElementById("s-grid");
const filters = document.getElementById("s-filters");
const intro = document.getElementById("s-intro");
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const cells = Object.entries(SKETCHBOOKS).flatMap(([tag, book]) =>
  (book.images.length ? book.images : Array(6).fill("")).map((src, i) => {
    const cell = document.createElement("div");
    cell.className = "photo";
    cell.dataset.tag = tag;
    cell.appendChild(media(src, src ? `${tag} sketchbook page ${i + 1}` : "sketchbook page"));
    return cell;
  })
);
const relayout = masonry(grid, cells, gridColumns);

function show(tag, animate = true) {
  if (!SKETCHBOOKS[tag]) tag = "art";
  filters.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.tag === tag));
  document.title = tag.toUpperCase() + " SKETCHBOOK | Joyce Chen";
  intro.textContent = SKETCHBOOKS[tag].intro || "";
  try { history.replaceState(null, "", "?tag=" + tag); } catch (e) {}

  const before = new Map();
  if (animate && !REDUCE)
    cells.forEach((c) => { if (!c.classList.contains("hidden")) before.set(c, c.getBoundingClientRect()); });

  cells.forEach((c) => c.classList.toggle("hidden", c.dataset.tag !== tag));
  relayout();

  if (!animate || REDUCE) return;
  let k = 0;
  cells.forEach((c) => {
    if (c.classList.contains("hidden")) return;
    const now = c.getBoundingClientRect(), was = before.get(c);
    if (was) {
      c.animate([{ transformOrigin: "top left", transform: `translate(${was.left - now.left}px, ${was.top - now.top}px) scale(${was.width / now.width}, ${was.height / now.height})` },
                 { transformOrigin: "top left", transform: "none" }],
                { duration: 950, easing: "cubic-bezier(.2,.8,.2,1)" });
    } else {
      c.animate([{ opacity: 0, transform: "translateY(24px) scale(.94)" }, { opacity: 1, transform: "none" }],
                { duration: 850, delay: 60 * Math.min(k++, 12), easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
    }
  });
}

filters.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (b) show(b.dataset.tag);
});
show(new URLSearchParams(location.search).get("tag"), false);
