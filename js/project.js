// Project detail page: reads ?id= from the URL and fills the page from PROJECTS.

const id = new URLSearchParams(location.search).get("id");
const p = PROJECTS.find((x) => x.id === id);

if (!p) {
  document.getElementById("project").innerHTML =
    '<p class="not-found">Project not found. <a href="index.html#work">Back to work</a></p>';
} else {
  document.title = p.title + " | Joyce Chen";
  document.getElementById("p-title").textContent = p.title.toUpperCase();
  // Materials, size and year, one per line
  const meta = document.getElementById("p-meta");
  [p.materials, p.size, String(p.year)].filter(Boolean).forEach((line, i) => {
    if (i) meta.appendChild(document.createElement("br"));
    meta.appendChild(document.createTextNode(line));
  });

  // Text: on wide-layout pages only the one-line summary sits above the big image;
  // the longer paragraphs and links go underneath it.
  const text = document.getElementById("p-text");
  const more = p.featuredWide ? document.getElementById("p-more") : text;
  const addPara = (box, t) => {
    const para = document.createElement("p");
    para.textContent = t;
    box.appendChild(para);
  };
  if (p.summary) addPara(text, p.summary);
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
  const srcOf = (f) => (typeof f === "string" ? f : f.src);
  const piece = (f, sizes) => {
    const fig = document.createElement("figure");
    fig.className = "piece";
    fig.appendChild(media(srcOf(f), f.materials ? `${p.title}, ${f.label || ""}: ${f.materials}` : p.title, sizes));
    return fig;
  };
  // Gallery-style label: each piece's position, materials and size, under the title
  const labelled = p.pieces ||
    (Array.isArray(p.featured) ? p.featured.filter((f) => typeof f === "object" && (f.materials || f.size)) : []);
  if (labelled.length) {
    const dl = document.createElement("dl");
    dl.className = "piece-list";
    labelled.forEach((f) => {
      const dt = document.createElement("dt");
      dt.textContent = f.label || "";
      const dd = document.createElement("dd");
      dd.innerHTML = [f.materials, f.size].filter(Boolean).map((x) => x.replace(/</g, "&lt;")).join("<br>");
      dl.append(dt, dd);
    });
    text.appendChild(dl);
  }
  if (p.featuredLayout === "trio" && Array.isArray(p.featured) && p.featured.length === 3) {
    // Two stacked on the left, one tall on the right, sized so both columns end level
    featBox.classList.add("trio");
    const r = p.featured.map((f) => { const d = SIZES[srcOf(f)]; return d ? d[1] / d[0] : 1; });
    const left = document.createElement("div"), right = document.createElement("div");
    left.className = "trio-col"; right.className = "trio-col";
    left.append(piece(p.featured[0], "35vw"), piece(p.featured[1], "35vw"));
    right.append(piece(p.featured[2], "30vw"));
    featBox.append(left, right);
    // Pick column widths so the left stack (2 images + 2 captions + gap) and the
    // right piece (1 image + 1 caption) end at exactly the same height.
    const fit = () => {
      if (getComputedStyle(featBox).flexDirection === "column") {
        left.style.flex = right.style.flex = ""; return;
      }
      const g = parseFloat(getComputedStyle(featBox).columnGap) || 0;
      const cap = featBox.querySelector("figcaption");
      const c = cap ? cap.offsetHeight + parseFloat(getComputedStyle(cap).marginTop) : 0;
      const W = featBox.clientWidth;
      const wL = ((W - g) * r[2] - c - g) / (r[0] + r[1] + r[2]);
      left.style.flex = `0 0 ${wL}px`;
      right.style.flex = `0 0 ${W - g - wL}px`;
    };
    fit();
    window.addEventListener("resize", fit);
  } else if (Array.isArray(p.featured)) {
    featBox.classList.add("stacked");
    p.featured.forEach((f) => featBox.appendChild(media(srcOf(f), p.title, "(max-width: 900px) 100vw, 65vw")));
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

  // Spotify player, under the text
  if (p.spotify) {
    const m = p.spotify.match(/open\.spotify\.com\/(playlist|album|track)\/(\w+)/);
    if (m) {
      const f = document.createElement("iframe");
      f.src = `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator`;
      f.className = "p-spotify";
      f.title = p.title + " playlist";
      f.loading = "lazy";
      f.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      more.appendChild(f);
    }
  }

  // YouTube video, embedded (privacy-enhanced domain, no cookies until played)
  if (p.video) {
    const m = p.video.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    if (m) {
      const f = document.createElement("iframe");
      f.src = `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0`;
      f.title = p.title + " video";
      f.loading = "lazy";
      f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen";
      f.allowFullscreen = true;
      document.getElementById("p-video").appendChild(f);
    }
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
