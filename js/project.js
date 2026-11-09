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

  // Text: on wide-layout pages only the one-line summary sits above the big image;
  // the longer paragraphs and links go underneath it.
  const text = document.getElementById("p-text");
  const more = p.featuredWide ? document.getElementById("p-more") : text;
  const addPara = (box, t) => {
    const para = document.createElement("p");
    para.textContent = t;
    box.appendChild(para);
  };
  addPara(text, p.summary);
  (p.details || []).forEach((t) => addPara(more, t));

  (p.links || []).forEach((l) => {
    const para = document.createElement("p");
    para.className = "p-link";
    const a = document.createElement("a");
    a.href = l.href; a.target = "_blank"; a.rel = "noopener";
    a.textContent = l.label + " ↗";
    para.appendChild(a);
    more.appendChild(para);
  });

  // Featured block: a photo, or a video (.mp4) that plays silently on loop
  const featBox = document.getElementById("p-featured");
  if (p.featuredWide) document.querySelector(".project-top").classList.add("wide");
  if (Array.isArray(p.featured)) {
    featBox.classList.add("stacked");
    p.featured.forEach((src) => featBox.appendChild(media(src, p.title, "(max-width: 900px) 100vw, 65vw")));
  } else if (/\.(mp4|webm|mov)$/i.test(p.featured)) {
    const v = document.createElement("video");
    v.src = p.featured;
    if (p.poster) v.poster = p.poster;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.preload = "auto";
    v.setAttribute("aria-label", p.title + " video");
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.autoplay = true;
    else v.controls = true;
    featBox.appendChild(v);
  } else {
    featBox.appendChild(media(p.featured, p.featured ? p.title : "featured photo",
      p.featuredWide ? "100vw" : "(max-width: 900px) 100vw, 65vw"));
  }

  // Other photos: 3-column masonry, each photo keeps its own shape
  const photos = (p.photos.length ? p.photos : p.featured ? [] : ["", "", "", "", ""]).map((src) => {
    const cell = document.createElement("div");
    cell.className = "photo";
    cell.appendChild(media(src, src ? p.title + " photo" : "other photo"));
    return cell;
  });
  photoGrid(document.getElementById("p-photos"), photos, p.photosLayout);

  // Extra labelled sections (e.g. "Iteration 1"), each with its own photo grid
  const secBox = document.getElementById("p-sections");
  (p.sections || []).forEach((sec) => {
    const wrap = document.createElement("section");
    wrap.className = "project-section";
    const h = document.createElement("h2");
    h.textContent = sec.label.toUpperCase();
    const g = document.createElement("div");
    g.className = "project-photos";
    wrap.append(h, g);
    secBox.appendChild(wrap);
    const cells = sec.photos.map((src) => {
      const cell = document.createElement("div");
      cell.className = "photo";
      cell.appendChild(media(src, p.title + " " + sec.label));
      return cell;
    });
    photoGrid(g, cells, sec.layout);
  });
}
