// Project detail page: reads ?id= from the URL and fills the page from PROJECTS.

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

  // Featured photos flip like the homepage name photos
  const feat = document.getElementById("p-featured");
  const frames = (p.featured.length ? p.featured : ["", "", ""]).map((src, i) =>
    media(src, src ? p.title + " photo " + (i + 1) : "featured photo " + (i + 1))
  );
  frames.forEach((f, i) => {
    f.classList.add("frame");
    if (i === 0) f.classList.add("on");
    feat.appendChild(f);
  });
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (frames.length > 1 && !reduceMotion) {
    let i = 0;
    setInterval(() => {
      frames[i].classList.remove("on");
      i = (i + 1) % frames.length;
      frames[i].classList.add("on");
    }, 2000);
  }

  // Other photos
  const grid = document.getElementById("p-photos");
  const photos = p.photos.length ? p.photos : ["", "", "", "", ""];
  photos.forEach((src, i) => {
    const cell = media(src, src ? p.title + " photo" : "other photo");
    cell.classList.add("photo");
    grid.appendChild(cell);
  });
}
