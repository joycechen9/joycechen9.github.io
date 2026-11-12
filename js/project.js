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
    para.innerHTML = t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
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
    if (l.top) para.classList.add("p-link-top");
    (l.top ? text : more).appendChild(para);
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
    // On full-width pages the pieces sit side by side; beside images they stack
    if (p.featuredWide) dl.classList.add("inline");
    labelled.forEach((f) => {
      const item = document.createElement("div");
      const dt = document.createElement("dt");
      dt.textContent = f.label || "";
      const dd = document.createElement("dd");
      dd.innerHTML = [f.materials, f.size].filter(Boolean).map((x) => x.replace(/</g, "&lt;")).join("<br>");
      item.append(dt, dd);
      dl.appendChild(item);
    });
    text.appendChild(dl);
  }
  if (p.featuredLayout === "slider" && Array.isArray(p.featured)) {
    buildSlider(featBox, p.featured.map(srcOf), p.title);
  } else if (p.featuredLayout === "trio" && Array.isArray(p.featured) && p.featured.length === 3) {
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
      // line the bottom of the player up with the bottom of the artwork
      if (!p.featuredWide) document.querySelector(".project-top").classList.add("align-bottom");
    }
  }

  // YouTube video. YouTube needs to know which site is embedding it (the Referer),
  // and a page opened straight from a file has none, which shows "Error 153".
  // So when previewing locally, show a still that links to YouTube instead.
  if (p.video) {
    const m = p.video.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
    if (m) {
      const box = document.getElementById("p-video");
      if (location.protocol === "file:") {
        const a = document.createElement("a");
        a.href = `https://www.youtube.com/watch?v=${m[1]}`;
        a.target = "_blank"; a.rel = "noopener";
        a.className = "p-video-link";
        a.innerHTML = `<img src="https://i.ytimg.com/vi/${m[1]}/hqdefault.jpg" alt=""><span>▶ Watch on YouTube</span>`;
        box.appendChild(a);
      } else {
        const f = document.createElement("iframe");
        f.src = `https://www.youtube-nocookie.com/embed/${m[1]}?rel=0`;
        f.title = p.title + " video";
        f.loading = "lazy";
        f.referrerPolicy = "strict-origin-when-cross-origin";
        f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
        f.allowFullscreen = true;
        box.appendChild(f);
      }
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

  if (p.diagram) buildDiagram(document.getElementById("p-sections"), p.diagram, p.title);

  // Extra labelled sections (e.g. "Iteration 1"), each with its own photo grid
  const secBox = document.getElementById("p-sections");
  (p.sections || []).forEach((sec) => {
    const wrap = document.createElement("section");
    wrap.className = "project-section";
    const h = document.createElement("h2");
    h.textContent = (sec.label || "").toUpperCase();
    if (!sec.label) { h.hidden = true; wrap.classList.add("no-label"); }
    wrap.appendChild(h);
    secBox.appendChild(wrap);
    if (sec.blocks) { renderBlocks(wrap, sec.blocks, p.title); return; }
    const g = document.createElement("div");
    g.className = "project-photos";
    wrap.appendChild(g);
    const cells = sec.photos.map((src) => {
      const cell = document.createElement("div");
      cell.className = "photo";
      cell.appendChild(media(src, p.title + " " + sec.label));
      return cell;
    });
    photoGrid(g, cells, sec.layout, sec.perRow);
  });

  // The big image at the top loads first
  const top = document.querySelector("#p-featured img");
  if (top) { top.loading = "eager"; top.fetchPriority = "high"; }
}

/* Slider: one image at a time, sliding to the next every 2.5 seconds.
   Arrows and dots to move by hand; swipe on touch screens; pauses on hover. */
function buildSlider(box, srcs, title) {
  box.classList.add("slider-box");
  const view = document.createElement("div");
  view.className = "slider";
  const track = document.createElement("div");
  track.className = "slider-track";
  // a copy of the first slide at the end lets the loop keep sliding forward
  [...srcs, srcs[0]].forEach((src, i) => {
    const cell = document.createElement("div");
    cell.className = "slide";
    const img = media(src, i < srcs.length ? `${title}, photo ${i + 1} of ${srcs.length}` : "", "(max-width: 900px) 100vw, 60vw");
    if (i === 0) { img.loading = "eager"; img.fetchPriority = "high"; }
    cell.appendChild(img);
    track.appendChild(cell);
  });
  view.appendChild(track);

  const prev = document.createElement("button"), next = document.createElement("button");
  prev.className = "slider-arrow prev"; prev.setAttribute("aria-label", "Previous photo"); prev.textContent = "←";
  next.className = "slider-arrow next"; next.setAttribute("aria-label", "Next photo"); next.textContent = "→";
  view.append(prev, next);

  const dots = document.createElement("div");
  dots.className = "slider-dots";
  srcs.forEach((_, i) => {
    const d = document.createElement("button");
    d.setAttribute("aria-label", `Photo ${i + 1}`);
    d.addEventListener("click", () => go(i));
    dots.appendChild(d);
  });
  box.append(view, dots);

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let i = 0, timer = null;
  const place = (animate) => {
    track.style.transition = animate && !reduce ? "transform .7s cubic-bezier(.65,0,.35,1)" : "none";
    track.style.transform = `translateX(${-100 * i}%)`;
    [...dots.children].forEach((d, k) => d.classList.toggle("on", k === i % srcs.length));
  };
  const go = (k) => { i = k; place(true); restart(); };
  track.addEventListener("transitionend", () => {
    if (i === srcs.length) { i = 0; place(false); }   // landed on the copy: jump back to the real first slide
  });
  next.addEventListener("click", () => go(i + 1));
  prev.addEventListener("click", () => {
    if (i === 0) { i = srcs.length; place(false); void track.offsetWidth; }
    go(i - 1);
  });
  const restart = () => {
    clearInterval(timer);
    if (!reduce && srcs.length > 1) timer = setInterval(() => { i += 1; place(true); }, 2500);
  };
  view.addEventListener("mouseenter", () => clearInterval(timer));
  view.addEventListener("mouseleave", restart);
  let x0 = null;
  view.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  view.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev).click();
  });
  place(false);
  restart();
}

/* Labelled diagram: an image with labels and dotted leader lines on wide screens;
   on narrow screens the labels become numbered dots with a list underneath. */
function buildDiagram(parent, d, title) {
  const esc = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const marked = (t) => esc(t).replace(/==(.+?)==/g, "<mark>$1</mark>");
  const IMG_TOP = 6, IMG_H = 82;             // where the image sits in the box (%)
  const Y = (y) => IMG_TOP + (y * IMG_H) / 100;

  const wrap = document.createElement("section");
  wrap.className = "diagram";
  const fig = document.createElement("figure");
  fig.className = "diagram-fig";
  const stage = document.createElement("div");
  stage.className = "diagram-stage";
  const img = media(d.image, title + " render with labelled parts", "(max-width: 1000px) 100vw, 65vw");
  img.className = "diagram-img";
  img.style.top = IMG_TOP + "%"; img.style.height = IMG_H + "%";
  stage.appendChild(img);

  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.classList.add("diagram-lines");
  stage.appendChild(svg);

  const list = document.createElement("ol");
  list.className = "diagram-list";

  d.labels.forEach((l, n) => {
    const py = Y(l.y);
    const path = document.createElementNS(NS, "polyline");
    path.setAttribute("points", `${l.lx},${l.ly} ${l.lx},${py} ${l.x},${py}`);
    path.setAttribute("vector-effect", "non-scaling-stroke");
    svg.appendChild(path);

    const dot = document.createElement("span");
    dot.className = "diagram-dot";
    dot.style.left = l.x + "%";
    dot.style.setProperty("--y", l.y);   // CSS places it (the image sits differently on phones)
    dot.textContent = n + 1;
    stage.appendChild(dot);

    const lab = document.createElement("span");
    lab.className = "diagram-label " + l.side;
    lab.style.left = l.lx + "%"; lab.style.top = l.ly + "%";
    lab.style.width = (l.w || 15) + "%";
    lab.textContent = l.text;
    stage.appendChild(lab);

    const li = document.createElement("li");
    li.textContent = l.text;
    list.appendChild(li);
  });
  fig.append(stage, list);

  const notes = document.createElement("ol");
  notes.className = "diagram-notes";
  (d.notes || []).forEach((t) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${esc(t.title).toUpperCase()}:</strong> ${marked(t.text)}`;
    notes.appendChild(li);
  });
  wrap.append(fig, notes);
  parent.appendChild(wrap);
}

/* ---------- Story blocks (sections with `blocks`) ---------- */
function richText(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/==(.+?)==/g, "<mark>$1</mark>")
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function renderBlocks(box, blocks, title) {
  blocks.forEach((b) => box.appendChild(renderBlock(b, title)));
}

function renderBlock(b, title) {
  const el = document.createElement("div");
  el.className = "blk blk-" + b.type;
  if (b.maxWidth) el.style.maxWidth = b.maxWidth + "px";
  if (b.type === "text") {
    b.text.forEach((t) => { const p = document.createElement("p"); p.innerHTML = richText(t); el.appendChild(p); });
  } else if (b.type === "list") {
    const ol = document.createElement("ol");
    b.items.forEach((t) => { const li = document.createElement("li"); li.innerHTML = richText(t); ol.appendChild(li); });
    el.appendChild(ol);
  } else if (b.type === "stack") {
    b.images.forEach((src) => el.appendChild(media(src, title + " sketch", "(max-width: 900px) 100vw, 1000px")));
  } else if (b.type === "image") {
    const fig = document.createElement("figure");
    fig.appendChild(media(b.src, b.caption || title, "(max-width: 900px) 100vw, 50vw"));
    if (b.caption) { const c = document.createElement("figcaption"); c.textContent = b.caption; fig.appendChild(c); }
    el.appendChild(fig);
  } else if (b.type === "row") {
    const cells = b.images.map((src) => { const c = document.createElement("div"); c.className = "photo"; c.appendChild(media(src, title)); return c; });
    rows(el, cells, () => (isNarrow() ? 1 : b.images.length));
  } else if (b.type === "pair") {
    b.items.forEach((it) => el.appendChild(renderBlock(it, title)));
  } else if (b.type === "annotated-grid") {
    b.items.forEach((it) => el.appendChild(annotated(it, title)));
  } else if (b.type === "annotated") {
    el.appendChild(annotated(b, title));
  } else if (b.type === "videos") {
    b.items.forEach((v) => {
      const vid = loopVideo(v.src, v.poster, v.w, v.h);
      vid.style.flex = `${(v.w / v.h).toFixed(4)} 1 0`;
      el.appendChild(vid);
    });
  } else if (b.type === "media-rows") {
    // Rows of images and looping videos; everything in a row shares one height
    const cells = b.items.map((it) => {
      const cell = document.createElement("div");
      cell.className = "mr-cell";
      let w, h;
      if (typeof it === "string") {
        const d = SIZES[it] || [4, 3]; w = d[0]; h = d[1];
        cell.appendChild(media(it, title));
      } else {
        w = it.w; h = it.h;
        cell.appendChild(loopVideo(it.video, it.poster, w, h));
      }
      cell.style.flex = `${(w / h).toFixed(4)} 1 0`;
      cell.style.aspectRatio = `${w} / ${h}`;
      return cell;
    });
    const per = () => (isNarrow() ? Math.min(2, b.perRow || 3) : b.perRow || 3);
    let last = 0;
    const build = () => {
      const n = per(); if (n === last) return; last = n;
      el.innerHTML = "";
      for (let k = 0; k < cells.length; k += n) {
        const row = document.createElement("div");
        row.className = "mr-row";
        cells.slice(k, k + n).forEach((c) => row.appendChild(c));
        el.appendChild(row);
      }
      fitSizes(el);
    };
    build();
    window.addEventListener("resize", build);
  }
  return el;
}

/* Image with labels joined to points on it by dotted lines.
   label: { text, x, y (% of image), side: left|right|top|bottom, at (% along that side), row } */
function annotated(cfg, title) {
  const wrap = document.createElement("figure");
  wrap.className = "ann" + (cfg.highlight ? " ann-highlight" : "");
  const fig = document.createElement("div");
  fig.className = "ann-fig";
  const pad = cfg.pad || {};
  fig.style.padding = `${pad.t || 0} ${pad.r || 0} ${pad.b || 0} ${pad.l || 0}`;
  const img = media(cfg.image, title, "(max-width: 900px) 90vw, 45vw");
  fig.appendChild(img);
  const NS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(NS, "svg");
  svg.classList.add("ann-lines");
  fig.appendChild(svg);
  const labs = (cfg.labels || []).map((l) => {
    const s = document.createElement("span");
    s.className = "ann-label " + l.side;
    s.textContent = l.text;
    fig.appendChild(s);
    return s;
  });
  wrap.appendChild(fig);
  if (cfg.highlight || cfg.caption) {
    const c = document.createElement("figcaption");
    c.textContent = cfg.highlight || cfg.caption;
    wrap.appendChild(c);
  }

  function layout() {
    const F = fig.getBoundingClientRect(), R = img.getBoundingClientRect();
    if (!R.width) return;
    const ix = R.left - F.left, iy = R.top - F.top, iw = R.width, ih = R.height;
    svg.setAttribute("viewBox", `0 0 ${F.width} ${F.height}`);
    svg.innerHTML = "";
    const gap = 8, rowH = 20;
    cfg.labels.forEach((l, k) => {
      const s = labs[k];
      const px = ix + (l.x / 100) * iw, py = iy + (l.y / 100) * ih;
      let ax, ay, pts;
      if (l.side === "left" || l.side === "right") {
        ay = l.at != null ? iy + (l.at / 100) * ih : py;
        ax = l.side === "left" ? ix - gap : ix + iw + gap;
        s.style.top = ay + "px";
        if (l.side === "left") { s.style.right = (F.width - ax + 6) + "px"; s.style.left = ""; s.style.maxWidth = (ax - 6) + "px"; }
        else { s.style.left = (ax + 6) + "px"; s.style.maxWidth = (F.width - ax - 6) + "px"; }
        pts = [[ax, ay], [px, ay], [px, py]];
      } else {
        ax = l.at != null ? ix + (l.at / 100) * iw : px;
        const off = (l.row || 0) * rowH;
        ay = l.side === "top" ? iy - gap - off : iy + ih + gap + off;
        s.style.top = ay + "px";
        // centre the label on its line, but keep it inside the figure
        s.style.maxWidth = Math.min(F.width * 0.45, 260) + "px";
        const w = s.offsetWidth;
        s.style.left = Math.max(0, Math.min(F.width - w, ax - w / 2)) + "px";
        pts = [[ax, ay], [ax, py], [px, py]];
      }
      const line = document.createElementNS(NS, "polyline");
      line.setAttribute("points", pts.map((p) => p.join(",")).join(" "));
      svg.appendChild(line);
      const dot = document.createElementNS(NS, "circle");
      dot.setAttribute("cx", ax); dot.setAttribute("cy", ay); dot.setAttribute("r", 2.6);
      svg.appendChild(dot);
    });
  }
  if (cfg.labels && cfg.labels.length) {
    img.addEventListener("load", layout);
    new ResizeObserver(layout).observe(fig);
    requestAnimationFrame(layout);
  }
  return wrap;
}

// Silent looping video that plays only while it's on screen
function loopVideo(src, poster, w, h) {
  const vid = document.createElement("video");
  vid.src = src; vid.poster = poster || "";
  vid.muted = true; vid.loop = true; vid.playsInline = true; vid.preload = "metadata";
  if (w && h) vid.style.aspectRatio = `${w} / ${h}`;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) vid.controls = true;
  else {
    vid.autoplay = true;
    new IntersectionObserver(([e]) => (e.isIntersecting ? vid.play().catch(() => {}) : vid.pause())).observe(vid);
  }
  return vid;
}
