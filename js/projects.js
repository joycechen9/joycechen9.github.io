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
    details    extra paragraphs (array of strings)
    size       (optional) e.g. "24 × 36 in." (height × width), shown under materials
    pieces     (optional) list of { label, materials, size } for multi-piece works,
               shown under the title like a gallery wall label
    video      (optional) a YouTube link, embedded under the images
    spotify    (optional) a Spotify album/playlist/track link, embedded under the text
    links      (optional) links shown under the text: [{ label: "...", href: "https://..." }]
    covers     (optional) several grid images for one project, each its own tile,
               all linking to the same project page. Use instead of cover.
    cover      image shown in the grid, e.g. "assets/img/work/new-windsor/cover.jpg"
               leave "" to show a grey placeholder.
               Tiles keep the shape of their image and line up in 3 columns.
    featured   the large image at the top of the project page, a list of images
               (stacked on top of each other at equal width), or a video (.mp4),
               which plays silently on loop
    featuredWide (optional) true = featured image spans the full page width,
               under the title (for very wide pieces like a triptych)
    featuredLayout (optional) "trio" = three pieces next to the title: the first
               two stacked on the left, the third (a tall one) on the right.
               Items can be { src, label, materials, size }; these are listed
               under the title, like a gallery wall label.
    poster     (videos only, optional) still image shown while the video loads
    photos     images in the grid below it
    photosLayout  (optional) "row" = photos side by side at the same height,
               3 per row. Leave out for the 3-column masonry grid.
    sections   (optional) extra labelled photo groups further down the page:
               [{ label: "Iteration 1", layout: "row", photos: ["...jpg"] }]
*/

const PROJECTS = [
{
    id: "for-our-shadow-selves",
    title: "For Our Shadow Selves",
    year: 2026,
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: ["More details"],
    cover: "",
    featured: "",
    photos: []
  },
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
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
{
    id: "trinket-shelf",
    title: "Trinket Shelf",
    year: 2025,
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
{
    id: "fountain-for-bees",
    title: "Fountain for Bees",
    year: 2025,
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
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
    id: "camera-pole-mounts",
    title: "Camera Pole Mounts",
    year: 2026,
    tags: ["engineering"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
{
    id: "salico",
    title: "Salico",
    year: 2025,
    tags: ["engineering"],
    materials: "Aluminum extrusion, sheet metal, cast urethane, pneumatics",
    summary: "An automatic harvester for sea asparagus, built with farmer and scientist Dr. Wenhao Sun for Olakai, his farm in Hawaii.",
    details: [
      "Sea asparagus is a salt-tolerant crop that cleans water and helps with carbon capture. As fresh water and farmland run short, it's a crop for the future, but the best harvest is still done by hand, which limits how far it can scale. Existing machines cut and bruise the plant, hurting its quality and shelf life.",
      "Salico mimics hand harvesting. Two cast urethane rollers grip the plant and pull, so the ripe tips separate naturally at the nodes. A ramp and conveyor carry the tips to a floating cargo bin.",
      "This was my Mechatronics Engineering capstone, on a team of five. I was the mechanical engineer, project manager, and visual designer. We prototyped the picker in Toronto without any sea asparagus to test on, then took two trips to the farm to test the roller design and the full-size robot."
    ],
    links: [
      { label: "Development blog", href: "https://salico-uw.github.io/" }
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
    materials: "Materials",
    summary: "One-line description.",
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
  design:      { intro: "", images: [] },
  engineering: { intro: "", images: [] },
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
      "assets/img/sketchbook/art/art-sketch-27.jpg"
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
  "assets/img/about/about-17.jpg",
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
  "assets/img/about/about-48.jpg"
];
/* Always shown first (Golden Gate photo); the rest play in random order. */
const FIRST_PHOTO = "assets/img/about/about-03.jpg";
const NAME_FLIP_MS = 1000;
