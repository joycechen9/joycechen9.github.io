// Project detail page: reads ?id= from the URL and fills the page from PROJECTS.

const id = new URLSearchParams(location.search).get("id");
const p = PROJECTS.find((x) => x.id === id);

if (!p) {
  document.getElementById("project").innerHTML =
    '<p class="not-found">Project not found. <a href="index.html#work">Back to work</a></p>';
} else {
  document.title = p.title + " | Joyce Chen";
  document.getElementById("p-title").textContent = p.title.toUpperCase();
  document.getElementById("p-materials").textContent = p.materials;
  document.getElementById("p-year").textContent = p.year;

  const text = document.getElementById("p-text");
  [p.summary, ...(p.details || [])].forEach((t) => {
    const para = document.createElement("p");
    para.textContent = t;
    text.appendChild(para);
  });

  // Featured photos flip in the large frame
  flipper(
    document.getElementById("p-featured"),
    (p.featured.length ? p.featured : ["", "", ""]).map((src, i) =>
      media(src, src ? p.title + " photo " + (i + 1) : "featured photo " + (i + 1))
    ),
    2000
  );

  // Other photos: 3-column masonry, each photo keeps its own shape
  const photos = (p.photos.length ? p.photos : ["", "", "", "", ""]).map((src) => {
    const cell = document.createElement("div");
    cell.className = "photo";
    cell.appendChild(media(src, src ? p.title + " photo" : "other photo"));
    return cell;
  });
  masonry(document.getElementById("p-photos"), photos, gridColumns);
}
