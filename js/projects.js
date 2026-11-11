/*
  SITE CONTENT
  ------------
  Everything on the homepage grid, the work list, and each project page
  is generated from this file. To add or edit a project, edit an entry below.

  Fields:
    id         used in the URL: project.html?id=new-windsor  (lowercase, dashes, no spaces)
    title      shown in the list, grid hover, and project page
    year       number
    tags       any of: "design", "engineering", "art"
    materials  short line under the title on the project page
    summary    first paragraph on the project page
    details    extra paragraphs (array of strings); **text** is bold
    size       (optional) e.g. "24 × 36 in." (height × width), shown under materials
    pieces     (optional) list of { label, materials, size } for multi-piece works,
               shown under the title like a gallery wall label
    video      (optional) a YouTube link, embedded under the images
    spotify    (optional) a Spotify album/playlist/track link, embedded under the text
    diagram    (optional) labelled image with numbered notes beside it (see Salico)
    links      (optional) links shown under the text: [{ label: "...", href: "https://..." }]
               add top: true to show it right under the summary, highlighted in green
    covers     (optional) several grid images for one project, each its own tile,
               all linking to the same project page. Use instead of cover.
    tagCovers  (optional) a different grid image for one filter, e.g. { art: "...jpg" }.
               The main cover shows in ALL and the other filters.
    cover      image shown in the grid, e.g. "assets/img/work/new-windsor/cover.jpg"
               leave "" to show a grey placeholder.
               Tiles keep the shape of their image and line up in 3 columns.
    featured   the large image at the top of the project page, a list of images
               (stacked on top of each other at equal width), or a video (.mp4),
               which plays silently on loop
    featuredWide (optional) true = featured image spans the full page width,
               under the title (for very wide pieces like a triptych)
    featuredLayout (optional) "slider" = the featured images slide past one at a time.
               "trio" = three pieces next to the title: the first
               two stacked on the left, the third (a tall one) on the right.
               Items can be { src, label, materials, size }; these are listed
               under the title, like a gallery wall label.
    poster     (videos only, optional) still image shown while the video loads
    photos     images in the grid below it
    photosLayout  (optional) "row" = photos side by side at the same height,
               3 per row. Leave out for the 3-column masonry grid.
    sections   (optional) extra labelled photo groups further down the page:
               [{ label: "Iteration 1", layout: "row", perRow: 4, photos: ["...jpg"] }]
*/

const PROJECTS = [
{
    id: "new-windsor",
    title: "New Windsor",
    year: 2026,
    tags: ["design"],
    materials: "Steel, Walnut, Acrylic",
    summary: "New Windsor is a modern spin on the iconic and classic Windsor chair.",
    details: ["More details", "More details"],
    cover: "assets/img/work/new-windsor/new-windsor-01.jpg",
    featured: "assets/img/work/new-windsor/new-windsor-02.jpg",
    photos: [
      "assets/img/work/new-windsor/new-windsor-01.jpg",
      "assets/img/work/new-windsor/new-windsor-03.jpg",
      "assets/img/work/new-windsor/new-windsor-04.jpg",
      "assets/img/work/new-windsor/new-windsor-05.jpg",
      "assets/img/work/new-windsor/new-windsor-06.jpg",
      "assets/img/work/new-windsor/new-windsor-07.jpg"
    ]
  },
{
    id: "saturn-with-a-moon",
    title: "Saturn with a Moon",
    year: 2026,
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-cover.jpg",
    featured: "assets/img/work/saturn-with-a-moon/saturn-with-a-moon.mp4",
    poster: "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-poster.jpg",
    photos: [
      "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-01.jpg",
      "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-02.jpg",
      "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-03.jpg",
      "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-04.jpg",
      "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-05.jpg",
      "assets/img/work/saturn-with-a-moon/saturn-with-a-moon-06.jpg"
    ]
  },
{
    id: "manchild",
    title: "Manchild",
    year: 2025,
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/manchild/manchild-cover.jpg",
    featured: "assets/img/work/manchild/manchild-featured.jpg",
    photosLayout: "row",
    photos: [
      "assets/img/work/manchild/manchild-01.jpg",
      "assets/img/work/manchild/manchild-02.jpg",
      "assets/img/work/manchild/manchild-03.jpg"
    ],
    sections: [
      {
        label: "Iteration 1",
        layout: "row",
        photos: [
          "assets/img/work/manchild/manchild-iter1-01.jpg",
          "assets/img/work/manchild/manchild-iter1-02.jpg",
          "assets/img/work/manchild/manchild-iter1-03.jpg"
        ]
      }
    ]
  },
{
    id: "for-sale",
    title: "For Sale",
    year: 2025,
    tags: ["design", "art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/for-sale/for-sale-01.jpg",
    tagCovers: { art: "assets/img/work/for-sale/for-sale-02.jpg" },
    featured: "assets/img/work/for-sale/for-sale-01.jpg",
    photos: [
      "assets/img/work/for-sale/for-sale-02.jpg"
    ]
  },
{
    id: "display-shelf",
    title: "Display Shelf",
    year: 2025,
    tags: ["design"],
    materials: "Poplar with polyurethane finish",
    summary: "This hanging wall shelf features a French cleat and sits flush and seamless on your wall with no hardware visible. It was made on the table saw and sander and finished with a polyurethane coating. Its many surfaces offer a comfortable home for your small, loved objects.",
    details: [],
    cover: "assets/img/work/display-shelf/display-shelf-cover.jpg",
    featuredLayout: "slider",
    featured: ["assets/img/work/display-shelf/shelf-08.jpg", "assets/img/work/display-shelf/shelf-09.jpg", "assets/img/work/display-shelf/shelf-10.jpg", "assets/img/work/display-shelf/shelf-11.jpg"],
    photos: [],
    sections: [
      { label: "", layout: "row", photos: ["assets/img/work/display-shelf/shelf-12.jpg", "assets/img/work/display-shelf/shelf-13.jpg", "assets/img/work/display-shelf/shelf-14.jpg"] },
      { label: "Installation", layout: "row", perRow: 4, photos: ["assets/img/work/display-shelf/shelf-01.jpg", "assets/img/work/display-shelf/shelf-02.jpg", "assets/img/work/display-shelf/shelf-03.jpg", "assets/img/work/display-shelf/shelf-04.jpg"] },
      { label: "Details", layout: "row", photos: ["assets/img/work/display-shelf/shelf-05.jpg", "assets/img/work/display-shelf/shelf-06.jpg", "assets/img/work/display-shelf/shelf-07.jpg"] },
      { label: "Manual Fabrication", layout: "row", perRow: 4, photos: ["assets/img/work/display-shelf/shelf-21.jpg", "assets/img/work/display-shelf/shelf-22.jpg", "assets/img/work/display-shelf/shelf-23.jpg", "assets/img/work/display-shelf/shelf-24.jpg"] },
      { label: "Roughly Planning Out on CAD", layout: "row", perRow: 4, photos: ["assets/img/work/display-shelf/shelf-15.jpg", "assets/img/work/display-shelf/shelf-16.jpg", "assets/img/work/display-shelf/shelf-17.jpg", "assets/img/work/display-shelf/shelf-18.jpg"] },
      { label: "Sketching and Brainstorming", layout: "row", perRow: 2, photos: ["assets/img/work/display-shelf/shelf-19.jpg", "assets/img/work/display-shelf/shelf-20.jpg"] }
    ]
  },
{
    id: "fountain-for-bees",
    title: "Fountain for Bees",
    year: 2025,
    tags: ["design", "art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/fountain-for-bees/fountain-for-bees-01.jpg",
    tagCovers: { art: "assets/img/work/fountain-for-bees/fountain-for-bees-02.jpg" },
    featured: "assets/img/work/fountain-for-bees/fountain-for-bees-01.jpg",
    photos: [
      "assets/img/work/fountain-for-bees/fountain-for-bees-02.jpg"
    ]
  },
{
    id: "kong",
    title: "Kong",
    year: 2024,
    tags: ["design", "engineering"],
    materials: "Powder-coated steel sheet metal, injection-moulded back panel",
    summary: "A plug-and-play demo kit for security devices, designed during my internship at Verkada.",
    details: [
      "Kong (DK22) is the third generation of Verkada's Access Control demo kit. Sales reps take it to conventions, meetings, and site visits so customers can see the products working with almost no setup.",
      "I helped finish the industrial design and did the engineering design through to production. Studying the older kits, the goal was a demo kit that was beautiful, light, and portable, with as few screws showing as possible and built to survive a lifetime of travel.",
      "I visited the sheet metal vendor in Taiwan and assembled the first prototypes by hand, then worked with the injection moulder on the magnetic back panel. At the assembly house in Texas, I taught and supervised the line workers to build and test each unit. Kong launched at Verkada One with 650 units built."
    ],
    links: [
      { label: "Kong on Verkada's site", href: "https://www.verkada.com/ca/access-control/dk22/" }
    ],
    cover: "assets/img/work/kong/kong-01.jpg",
    featured: "assets/img/work/kong/kong-01.jpg",
    photos: []
  },
{
    id: "redbull-flugtag",
    title: "Redbull Flugtag",
    year: 2022,
    tags: ["design", "engineering"],
    materials: "Wood, bicycle wheels, balloons",
    summary: "The Snap Pea Flying Machine, which won first place at Red Bull Flugtag Toronto 2022.",
    details: [
      "I did the complete creative and mechanical design of the glider. Once we were accepted to the competition, I had limited time to turn my concept sketch into parts we could actually build. The project caught on at work, and soon the whole Product Design team was helping bring it to life.",
      "We went into competition day cautiously optimistic and came away with first place. The prize was a ride in a stunt plane with a trained pilot."
    ],
    links: [
      { label: "More about the project", href: "https://snappeadesign.com/we-can-design-anything/" }
    ],
    cover: "assets/img/work/redbull-flugtag/redbull-flugtag-flight.jpg",
    featured: "assets/img/work/redbull-flugtag/redbull-flugtag-flight.jpg",
    photosLayout: "row",
    photos: [
      "assets/img/work/redbull-flugtag/redbull-flugtag-08.jpg",
      "assets/img/work/redbull-flugtag/redbull-flugtag-podium.jpg"
    ],
    sections: [
      {
        label: "Stunt Plane Ride",
        layout: "row",
        photos: [
          "assets/img/work/redbull-flugtag/redbull-flugtag-09.jpg",
          "assets/img/work/redbull-flugtag/redbull-flugtag-10.jpg"
        ]
      },
      {
        label: "Construction",
        photos: [
          "assets/img/work/redbull-flugtag/redbull-flugtag-02.jpg",
          "assets/img/work/redbull-flugtag/redbull-flugtag-03.jpg",
          "assets/img/work/redbull-flugtag/redbull-flugtag-04.jpg",
          "assets/img/work/redbull-flugtag/redbull-flugtag-05.jpg",
          "assets/img/work/redbull-flugtag/redbull-flugtag-06.jpg",
          "assets/img/work/redbull-flugtag/redbull-flugtag-07.jpg"
        ]
      }
    ]
  },
  {
    id: "telescoping-drop-pole",
    title: "Telescoping Drop Pole",
    year: 2026,
    tags: ["engineering"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/telescoping-drop-pole/telescoping-drop-pole-01.jpg",
    featured: "assets/img/work/telescoping-drop-pole/telescoping-drop-pole-01.jpg",
    photos: []
  },
{
    id: "salico",
    title: "Salico",
    year: 2025,
    tags: ["engineering"],
    materials: "",
    summary: "An automatic harvester for sea asparagus, built with farmer and scientist Dr. Wenhao Sun for Olakai, his farm in Hawaii.",
    details: [
      "**TLDR:** Sea asparagus is a salt-tolerant crop that cleans water and helps with carbon capture. As fresh water and farmland run short, it's a crop for the future, but the best harvest is still done by hand, which limits how far it can scale. Existing machines cut and bruise the plant, hurting its quality and shelf life.",
      "Salico mimics hand harvesting. Two cast urethane rollers grip the plant and pull, so the ripe tips separate naturally at the nodes. A ramp and conveyor carry the tips to a floating cargo bin.",
      "This was my Mechatronics Engineering capstone (over 8 months long, team of 5). I was a mechanical engineer, project manager, and visual designer. We prototyped the picker in Toronto without any sea asparagus to test on, then took three trips to the farm in Hawaii to test the roller design and the full-size robot."
    ],
    links: [
      { label: "Development blog", href: "https://salico-uw.github.io/", top: true }
    ],
    // Labelled render. x/y = the point on the machine, lx/ly = where the label sits
    // (all in % of the diagram box). side: which side of the line the text goes.
    diagram: {
      image: "assets/img/work/salico/salico-render.png",
      labels: [
        { text: "Aluminum extrusion frame for easy assembly and corrosion resistance", x: 18.8, y: 23.5, lx: 11, ly: 17, side: "top", w: 14 },
        { text: "Pneumatic pistons to lift and lower onto the plant", x: 34.5, y: 12.7, lx: 28, ly: 7, side: "top", w: 14 },
        { text: "Electrical and battery boxes", x: 43.8, y: 16.9, lx: 44, ly: 12, side: "top", w: 12 },
        { text: "Fans redirect the harvested plant coming from the picking mechanism", x: 51.2, y: 34.6, lx: 59, ly: 3, side: "top", w: 15 },
        { text: "Pneumatic box", x: 70, y: 6, lx: 84, ly: 10, side: "top", w: 12 },
        { text: "Direct drive motors run the rollers, one from each side", x: 31.5, y: 42.7, lx: 19, ly: 78, side: "bottom", w: 14 },
        { text: "The cast urethane rollers, along with the hinged sheet metal frame and spring, provide compliance to wrap and pinch around the plant, mimicking a human hand", x: 43.5, y: 43.5, lx: 57, ly: 85, side: "right", w: 30 },
        { text: "The ramp acts like a cup when the machine is lowered and a slide when it is lifted", x: 49.8, y: 45, lx: 63, ly: 63, side: "right", w: 15 },
        { text: "Tray to collect the harvested plant", x: 58, y: 52, lx: 80, ly: 63, side: "right", w: 13 },
        { text: "Pontoons for floating in ponds", x: 93.8, y: 54.1, lx: 93.8, ly: 72, side: "bottom", w: 11 }
      ],
      // ==text== is highlighted
      notes: [
        { title: "Background", text: "The world is limited on our supply of clean, fresh water. ==Sea asparagus (Salicornia)== is a salt-tolerant plant that is not only ==delicious and nutritious==, but also has a variety of environmental benefits. As a food, it's rich in vitamins, minerals, and iodine. As a plant, it ==cleans water and helps in carbon capture, mangrove restoration, and desalination.==" },
        { title: "Problem and need", text: "The current harvesting process relies on ==manual labour==, which ==limits scalability.== Existing semi-automated harvesting machines cut and bruise the plant, resulting in worse quality and shelf life. The ideal harvest requires the tips of the plant to be ==pulled off at its nodes instead of cut.==" },
        { title: "Resolution", text: "This automated harvester ==mimics hand harvesting== by using a ==double roller mechanism that grips and pulls the sea asparagus.== The ripe, tender parts naturally separate at the nodes of the plant. This machine improves ==harvesting efficiency, speed, and greatly reduces manual labour.==" }
      ]
    },
    // Process story under the diagram. Each section is a heading plus blocks, in order.
    sections: [
      {
        label: "Brainstorming & Sketching",
        blocks: [
          { type: "text", text: ["There are two main challenges:"] },
          { type: "list", items: [
            "We cannot cut or bruise the sea asparagus.",
            "We do not have any sea asparagus to test with where we live (Toronto, Canada). A large part of the initial design is guessing until we get to Hawaii for testing."
          ] },
          { type: "stack", maxWidth: 1000, images: ["assets/img/work/salico/salico-s01.jpg", "assets/img/work/salico/salico-s02.jpg", "assets/img/work/salico/salico-s03.jpg"] }
        ]
      },
      {
        label: "CAD of the Top Options",
        blocks: [
          { type: "annotated-grid", items: [
            { image: "assets/img/work/salico/salico-s05.jpg", pad: { l: "34%" }, labels: [
              { text: "Gears", x: 30, y: 18, side: "left" },
              { text: "Motor", x: 55, y: 31, side: "left" },
              { text: "Compliant grabber material", x: 58, y: 80, side: "left" }
            ] },
            { image: "assets/img/work/salico/salico-s06.jpg", pad: { l: "30%" }, labels: [
              { text: "Pistons", x: 25, y: 40, side: "left" },
              { text: "Double brushes", x: 66, y: 56, side: "left" },
              { text: "Double rollers", x: 57, y: 72, side: "left" }
            ] },
            { image: "assets/img/work/salico/salico-s07.jpg", pad: { l: "22%", r: "22%" }, labels: [
              { text: "Shield", x: 25, y: 30, side: "left" },
              { text: "Pinching and lifting rollers", x: 38, y: 62, side: "left", at: 56 },
              { text: "Conveyor", x: 22, y: 73, side: "left", at: 76 },
              { text: "Cargo", x: 18, y: 88, side: "left" },
              { text: "Temporary cargo", x: 80, y: 72, side: "right" }
            ] },
            { image: "assets/img/work/salico/salico-s08.jpg", highlight: "To build", labels: [] }
          ] }
        ]
      },
      {
        label: "Prototyping Round 1",
        blocks: [
          { type: "text", text: ["There are 4 main subsystems to consider: picking, transporting harvested tips, cargo, and traversal. For our first prototype, we zoom in on just the picker mechanism and make a small scale version to validate the roller design for our first trip to Hawaii."] },
          { type: "pair", items: [
            { type: "image", src: "assets/img/work/salico/salico-s09.jpg", caption: "Making cast urethane and plastic rollers, assembling the frame, and calibrating the motors." },
            { type: "annotated", image: "assets/img/work/salico/salico-s11.jpg", pad: { t: "64px", b: "70px" }, caption: "Assembled first prototype", labels: [
              { text: "Motor", x: 18, y: 42, side: "top", at: 17 },
              { text: "3D printed hub", x: 66, y: 27, side: "top", at: 62 },
              { text: "Crossed polyurethane belting", x: 78, y: 20, side: "top", at: 84, row: 1 },
              { text: "Aluminum frame", x: 47.3, y: 80, side: "bottom", row: 1 },
              { text: "Cast urethane rollers (Vytaflex 10)", x: 76.2, y: 80, side: "bottom" }
            ] }
          ] }
        ]
      },
      {
        label: "Testing Round 1",
        blocks: [
          { type: "text", text: ["The first trip to the farm for testing prioritized characterization of the plant and its associated properties, and validating our roller design. The team made a list of [experiments](https://salico-uw.github.io/2024-10-06-does/) to complete."] },
          { type: "row", images: ["assets/img/work/salico/salico-s12.jpg", "assets/img/work/salico/salico-s13.jpg"] },
          { type: "text", text: ["Our first urethane roller prototype harvesting the plant, trying out the hand picking procedure, and learning from Dr. Wenhao Sun in the ponds."] },
          { type: "videos", items: [
            { src: "assets/img/work/salico/salico-roller-test.mp4", poster: "assets/img/work/salico/salico-roller-test-poster.jpg", w: 600, h: 924 },
            { src: "assets/img/work/salico/salico-ponds.mp4", poster: "assets/img/work/salico/salico-ponds-poster.jpg", w: 1280, h: 618 }
          ] }
        ]
      }
    ],
    cover: "assets/img/work/salico/salico-cover.jpg",
    featured: "assets/img/work/salico/salico.mp4",
    featuredWide: true,
    poster: "assets/img/work/salico/salico-poster.jpg",
    photos: []
  },
  {
    id: "lego-rescue",
    title: "Lego Rescue",
    year: 2023,
    tags: ["engineering"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/lego-rescue/lego-rescue-01.jpg",
    featured: "assets/img/work/lego-rescue/lego-rescue-01.jpg",
    photos: []
  },
  {
    id: "around-the-counter",
    title: "Around the Counter",
    year: 2026,
    tags: ["art"],
    materials: "",
    summary: "",
    details: [],
    cover: "",
    covers: ["assets/img/work/around-the-counter/around-the-counter-01.jpg", "assets/img/work/around-the-counter/around-the-counter-02.jpg", "assets/img/work/around-the-counter/around-the-counter-03.jpg"],
    featuredLayout: "trio",
    featured: [
      { src: "assets/img/work/around-the-counter/around-the-counter-03.jpg", label: "Top left", materials: "Acrylic, collage, and pencil crayon on plywood", size: "6 × 18 in." },
      { src: "assets/img/work/around-the-counter/around-the-counter-02.jpg", label: "Bottom left", materials: "Acrylic on paper", size: "9 × 12 in." },
      { src: "assets/img/work/around-the-counter/around-the-counter-01.jpg", label: "Right", materials: "Acrylic, pen, and marker on paper", size: "12 × 9 in." }
    ],
    photos: []
  },
  {
    id: "dad-and-crab",
    title: "Dad and Crab",
    year: 2026,
    tags: ["art"],
    materials: "Acrylic on paper",
    size: "12 \u00d7 9 in.",
    summary: "",
    details: [],
    cover: "assets/img/work/dad-and-crab/dad-and-crab-01.jpg",
    featured: "assets/img/work/dad-and-crab/dad-and-crab-01.jpg",
    photos: []
  },
  {
    id: "chinese-market",
    title: "Chinese Market",
    year: 2026,
    tags: ["art"],
    materials: "Acrylic, collage, and pen on plywood and paper",
    size: "Sizes vary",
    summary: "This is a collection of work exploring the vibrant, busy atmosphere of the Chinese grocery stores in Toronto. Growing up in a Chinese immigrant home in Toronto and loving food meant that this was a common scene in my life. Using a variety of media, I experimented with recreating the noise, colour, and movement characteristic of this space.",
    details: [],
    cover: "",
    covers: ["assets/img/work/chinese-market/chinese-market-01.jpg", "assets/img/work/chinese-market/chinese-market-02.jpg", "assets/img/work/chinese-market/chinese-market-03.jpg", "assets/img/work/chinese-market/chinese-market-04.jpg", "assets/img/work/chinese-market/chinese-market-05.jpg", "assets/img/work/chinese-market/chinese-market-06.jpg", "assets/img/work/chinese-market/chinese-market-07.jpg", "assets/img/work/chinese-market/chinese-market-08.jpg"],
    featured: "assets/img/work/chinese-market/chinese-market-01.jpg",
    photos: [
      "assets/img/work/chinese-market/chinese-market-02.jpg",
      "assets/img/work/chinese-market/chinese-market-03.jpg",
      "assets/img/work/chinese-market/chinese-market-04.jpg",
      "assets/img/work/chinese-market/chinese-market-05.jpg",
      "assets/img/work/chinese-market/chinese-market-06.jpg",
      "assets/img/work/chinese-market/chinese-market-07.jpg",
      "assets/img/work/chinese-market/chinese-market-08.jpg"
    ]
  },
  {
    id: "working-on-the-car",
    title: "Working on the Car",
    year: 2026,
    tags: ["art"],
    materials: "Acrylic on canvas",
    size: "20 \u00d7 30 in.",
    summary: "",
    details: [],
    cover: "assets/img/work/working-on-the-car/working-on-the-car-01.jpg",
    featured: "assets/img/work/working-on-the-car/working-on-the-car-01.jpg",
    photos: []
  },
  {
    id: "mark-making-and-sound",
    title: "Mark Making and Sound",
    year: 2023,
    tags: ["art"],
    materials: "Acrylic on canvas",
    spotify: "https://open.spotify.com/playlist/7IIyPc29BMdxA3C6ZaujdE",
    size: "24 \u00d7 24 in.",
    summary: "This painting was made while listening to this album on loop:",
    details: [],
    cover: "assets/img/work/mark-making-and-sound/mark-making-and-sound-01.jpg",
    featured: "assets/img/work/mark-making-and-sound/mark-making-and-sound-01.jpg",
    photos: []
  },
  {
    id: "campus",
    title: "Campus",
    year: 2021,
    tags: ["art"],
    materials: "Triptych, acrylic on canvas",
    links: [{ label: "Artist spotlight in Imprint", href: "https://archive.uwimprint.ca/article/artists-spotlight-slc-pac-expansion/" }, { label: "On Instagram", href: "https://www.instagram.com/p/CSuo2dYlPM9/?img_index=1" }],
    size: "Three panels, each 30 \u00d7 60 in.",
    summary: "",
    details: [
      "A triptych for the University of Waterloo, now on display in the Student Life Centre meditation room. These paintings are inspired by the buzz of student life around campus, and the scenes of its buildings and parks."
    ],
    cover: "assets/img/work/campus/campus-02.jpg",
    featured: "assets/img/work/campus/campus-triptych.jpg",
    featuredWide: true,
    photos: [],
    sections: [
      { label: "Detailed Shots", layout: "row", photos: ["assets/img/work/campus/campus-detail-01.jpg", "assets/img/work/campus/campus-detail-02.jpg", "assets/img/work/campus/campus-detail-03.jpg"] },
      { label: "In the Student Life Centre", layout: "row", photos: ["assets/img/work/campus/campus-installed.jpg"] }
    ]
  },
  {
    id: "perception",
    title: "Perception",
    year: 2021,
    tags: ["art"],
    materials: "Chalk pastel, grapeseed oil, oil pastel, pen, and ink on paper",
    pieces: [{ label: "Left", size: "7 × 14 in." }, { label: "Right", size: "24 × 50 in." }],
    summary: "",
    details: [
      "My visual perception of myself is a compilation of reflections, images, objects, and lines that crowd my life.",
      "This piece was made from photos of the reflections of myself I see every day, in car windows or the bathroom mirror. By layering these images, I created a rough depiction of the confusion surrounding identity and appearance."
    ],
    cover: "assets/img/work/perception/perception-01.jpg",
    featured: "assets/img/work/perception/perception-pair.jpg",
    featuredWide: true,
    photos: []
  },
  {
    id: "my-dream-about-thunderstorms",
    title: "My Dream About Thunderstorms",
    year: 2020,
    tags: ["art"],
    materials: "Digital, made in Photoshop and Premiere Pro",
    video: "https://www.youtube.com/watch?v=Gv1pcA5L7Bk",
    summary: "This piece is inspired by the phenomenon of thunderstorms and how my memories interlace throughout my dreams. The imagery is made from distorted photos from my camera, representing my experiences during the day and how they live on through the night as impressions in my dreams.",
    details: [],
    cover: "assets/img/work/my-dream-about-thunderstorms/my-dream-about-thunderstorms-01.jpg",
    featured: "assets/img/work/my-dream-about-thunderstorms/my-dream-about-thunderstorms-01.jpg",
    photos: []
  },
  {
    id: "dishwasher",
    title: "Dishwasher",
    year: 2020,
    tags: ["art"],
    materials: "Acrylic and ceramic on canvas",
    size: "30 \u00d7 40 in.",
    summary: "A painting of my grandmother washing dishes. Pieces of a chipped plate from my kitchen are glued onto the canvas.",
    details: [
      "In my house, my family has only ever washed dishes by hand. The friction and effort of this task is a mundane but intrinsic piece of the cultural identity of my childhood."
    ],
    cover: "assets/img/work/dishwasher/dishwasher-01.jpg",
    featured: "assets/img/work/dishwasher/dishwasher-01.jpg",
    photos: [],
    sections: [
      { label: "Sketchbook Process", photos: ["assets/img/sketchbook/art/art-sketch-12.jpg", "assets/img/sketchbook/art/art-sketch-13.jpg", "assets/img/sketchbook/art/art-sketch-26.jpg"] }
    ]
  },
  {
    id: "cardboard-party",
    title: "Cardboard Party",
    year: 2020,
    tags: ["art"],
    materials: "Acrylic on cardboard",
    size: "30 \u00d7 30 in.",
    summary: "When I found a huge Bose cardboard box about to be thrown out, I was drawn to its materiality. The speakers it once held brought music to the room, so it made me think of my friends dancing.",
    details: [],
    cover: "assets/img/work/cardboard-party/cardboard-party-01.jpg",
    featured: "assets/img/work/cardboard-party/cardboard-party-01.jpg",
    photos: [],
    sections: [
      { label: "Sketchbook Process", photos: ["assets/img/sketchbook/art/art-sketch-19.jpg", "assets/img/sketchbook/art/art-sketch-20.jpg", "assets/img/sketchbook/art/art-sketch-21.jpg"] }
    ]
  },
  {
    id: "night",
    title: "Night",
    year: 2020,
    tags: ["art"],
    materials: "Acrylic on canvas",
    summary: "The last part of the day includes entering a brightly lit portal in your hand.",
    details: [],
    cover: "assets/img/work/night/night-01.jpg",
    featured: "assets/img/work/night/night-01.jpg",
    photos: []
  },
  {
    id: "it-is-so-cute",
    title: "It Is So Cute",
    year: 2019,
    tags: ["art"],
    materials: "Acrylic and mixed media on canvas",
    size: "48 \u00d7 30 in.",
    summary: "Experimenting with neo-expressionism, with a Sphynx cat.",
    details: [],
    cover: "assets/img/work/it-is-so-cute/it-is-so-cute-01.jpg",
    featured: "assets/img/work/it-is-so-cute/it-is-so-cute-01.jpg",
    photos: []
  },
  {
    id: "medusa",
    title: "Medusa",
    year: 2019,
    tags: ["art"],
    materials: "Graphite on paper",
    size: "24 \u00d7 30 in.",
    summary: "A depiction of Athena's rage toward Medusa in the Greek myth, inspired by the emotionally saturated, jarring works of German Expressionism.",
    details: [
      "Explosions of controlled chaos swirl in the intensity of tight, dark strokes."
    ],
    cover: "assets/img/work/medusa/medusa-01.jpg",
    featured: "assets/img/work/medusa/medusa-01.jpg",
    photos: [
      "assets/img/sketchbook/art/art-sketch-14.jpg",
      "assets/img/sketchbook/art/art-sketch-15.jpg",
      "assets/img/sketchbook/art/art-sketch-16.jpg",
      "assets/img/sketchbook/art/art-sketch-17.jpg",
      "assets/img/sketchbook/art/art-sketch-18.jpg"
    ]
  }
];

/* One sketchbook per tag. The SKETCHBOOK link under the work list opens
   the one for the selected filter: sketchbook.html?tag=design, etc. */
const SKETCHBOOKS = {
  design: { intro: "", images: ["assets/img/work/display-shelf/shelf-19.jpg", "assets/img/work/display-shelf/shelf-20.jpg"] },
  engineering: { intro: "", images: ["assets/img/work/display-shelf/shelf-19.jpg", "assets/img/work/display-shelf/shelf-20.jpg"] },
  art: {
    intro: "",
    images: [
      "assets/img/sketchbook/art/art-sketch-09.jpg",
      "assets/img/sketchbook/art/art-sketch-10.jpg",
      "assets/img/sketchbook/art/art-sketch-11.jpg",
      "assets/img/sketchbook/art/art-sketch-12.jpg",
      "assets/img/sketchbook/art/art-sketch-13.jpg",
      "assets/img/sketchbook/art/art-sketch-14.jpg",
      "assets/img/sketchbook/art/art-sketch-15.jpg",
      "assets/img/sketchbook/art/art-sketch-16.jpg",
      "assets/img/sketchbook/art/art-sketch-17.jpg",
      "assets/img/sketchbook/art/art-sketch-18.jpg",
      "assets/img/sketchbook/art/art-sketch-19.jpg",
      "assets/img/sketchbook/art/art-sketch-20.jpg",
      "assets/img/sketchbook/art/art-sketch-21.jpg",
      "assets/img/sketchbook/art/art-sketch-22.jpg",
      "assets/img/sketchbook/art/art-sketch-23.jpg",
      "assets/img/sketchbook/art/art-sketch-24.jpg",
      "assets/img/sketchbook/art/art-sketch-25.jpg",
      "assets/img/sketchbook/art/art-sketch-26.jpg",
      "assets/img/sketchbook/art/art-sketch-27.jpg",
      "assets/img/sketchbook/art/art-sketch-28.jpg",
      "assets/img/sketchbook/art/art-sketch-29.jpg",
      "assets/img/sketchbook/art/art-sketch-30.jpg"
    ]
  }
};

/* Photos that cycle in the homepage about section, about 1 per second.
   They play in a new random order on every visit. */
const NAME_PHOTOS = [
  "assets/img/about/about-01.jpg",
  "assets/img/about/about-02.jpg",
  "assets/img/about/about-03.jpg",
  "assets/img/about/about-04.jpg",
  "assets/img/about/about-05.jpg",
  "assets/img/about/about-06.jpg",
  "assets/img/about/about-07.jpg",
  "assets/img/about/about-08.jpg",
  "assets/img/about/about-09.jpg",
  "assets/img/about/about-10.jpg",
  "assets/img/about/about-11.jpg",
  "assets/img/about/about-12.jpg",
  "assets/img/about/about-13.jpg",
  "assets/img/about/about-14.jpg",
  "assets/img/about/about-15.jpg",
  "assets/img/about/about-16.jpg",
  "assets/img/about/about-18.jpg",
  "assets/img/about/about-19.jpg",
  "assets/img/about/about-20.jpg",
  "assets/img/about/about-21.jpg",
  "assets/img/about/about-22.jpg",
  "assets/img/about/about-23.jpg",
  "assets/img/about/about-24.jpg",
  "assets/img/about/about-25.jpg",
  "assets/img/about/about-26.jpg",
  "assets/img/about/about-27.jpg",
  "assets/img/about/about-28.jpg",
  "assets/img/about/about-29.jpg",
  "assets/img/about/about-30.jpg",
  "assets/img/about/about-31.jpg",
  "assets/img/about/about-32.jpg",
  "assets/img/about/about-33.jpg",
  "assets/img/about/about-34.jpg",
  "assets/img/about/about-35.jpg",
  "assets/img/about/about-36.jpg",
  "assets/img/about/about-37.jpg",
  "assets/img/about/about-38.jpg",
  "assets/img/about/about-39.jpg",
  "assets/img/about/about-40.jpg",
  "assets/img/about/about-41.jpg",
  "assets/img/about/about-42.jpg",
  "assets/img/about/about-43.jpg",
  "assets/img/about/about-44.jpg",
  "assets/img/about/about-45.jpg",
  "assets/img/about/about-46.jpg",
  "assets/img/about/about-47.jpg",
  "assets/img/about/about-48.jpg",
  "assets/img/about/about-49.jpg",
  "assets/img/about/about-50.jpg",
  "assets/img/about/about-51.jpg"
];
/* Always shown first (Golden Gate photo); the rest play in random order. */
const FIRST_PHOTO = "assets/img/about/about-03.jpg";
const NAME_FLIP_MS = 1000;

/* Hand-arranged grid for a filter (desktop only). Each inner list is a column,
   top to bottom, by project id; `widths` sets the columns' relative widths.
   Tiles are cropped so every column ends at the same height, except those
   listed in `contain`, which are shown whole on a white background. */
const GRID_LAYOUTS = {
  engineering: {
    columns: [["salico", "redbull-flugtag"], ["kong", "lego-rescue"], ["telescoping-drop-pole"]],
    widths: [750, 550, 390],
    // shown whole (never cropped); any leftover space is filled with white
    contain: ["kong"]
  },
  // Hand-arranged: For Sale/Kong and Trinket Shelf/Redbull swapped from the automatic grid.
  // fit: false = tiles keep their own shape (no cropping, columns end unevenly)
  design: {
    columns: [["new-windsor", "for-sale"], ["saturn-with-a-moon", "kong", "fountain-for-bees"], ["manchild", "redbull-flugtag", "display-shelf"]],
    fit: false
  }
};

/* What SELECTED WORKS shows. Works listed in `hide` appear only under their
   own filters. For works with several grid images, `covers` picks which ones
   (1 = first image in its covers list). */
const SELECTED_WORKS = {
  // order of tiles (left to right, top to bottom); "id:n" = that work's n-th grid image
  order: [
    "new-windsor",
    "salico",
    "saturn-with-a-moon",
    "kong",
    "manchild",
    "around-the-counter:3",
    "redbull-flugtag",
    "dad-and-crab",
    "chinese-market:1",
    "display-shelf",
    "telescoping-drop-pole",
    "perception",
    "for-sale",
    "working-on-the-car",
    "lego-rescue",
    "chinese-market:6",
    "fountain-for-bees",
    "dishwasher",
    "mark-making-and-sound",
    "chinese-market:2",
    "cardboard-party",
    "night"
  ],
  hide: ["campus", "my-dream-about-thunderstorms", "it-is-so-cute", "medusa"],
  covers: {
    "around-the-counter": [3],
    "chinese-market": [1, 2, 6]
  }
};


/* Sections in a filter's work list, top to bottom. The first section is the
   strongest work and is shown in bold; works not listed go in a last section. */
const LIST_GROUPS = {
  design: [
    ["new-windsor", "saturn-with-a-moon", "manchild", "kong", "redbull-flugtag"],
    ["for-sale", "display-shelf", "fountain-for-bees"]
  ],
  engineering: [
    ["salico", "kong", "redbull-flugtag"],
    ["telescoping-drop-pole", "lego-rescue"]
  ]
};
