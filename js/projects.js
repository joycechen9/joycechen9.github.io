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
    covers     (optional) several grid images for one project, each its own tile,
               all linking to the same project page. Use instead of cover.
    cover      image shown in the grid, e.g. "assets/img/work/new-windsor/cover.jpg"
               leave "" to show a grey placeholder.
               Tiles keep the shape of their image and line up in 3 columns.
    featured   the large image at the top of the project page, or a video (.mp4),
               which plays silently on loop
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
    materials: "Materials",
    summary: "A demo kit for security devices, designed during my internship at Verkada.",
    details: [],
    cover: "assets/img/work/kong/kong-01.jpg",
    featured: "assets/img/work/kong/kong-01.jpg",
    photos: []
  },
{
    id: "redbull-flugtag",
    title: "Redbull Flugtag",
    year: 2022,
    tags: ["design", "engineering"],
    materials: "Materials",
    summary: "Snap pea flying machine!",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "telescoping-pole",
    title: "Telescoping Pole",
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
    materials: "Materials",
    summary: "An automatic harvester for sea asparagus.",
    details: [],
    cover: "",
    featured: "assets/img/work/salico/salico.mp4",
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
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "around-the-counter",
    title: "Around the Counter",
    year: 2026,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    covers: ["assets/img/work/around-the-counter/around-the-counter-01.jpg", "assets/img/work/around-the-counter/around-the-counter-02.jpg", "assets/img/work/around-the-counter/around-the-counter-03.jpg"],
    featured: "assets/img/work/around-the-counter/around-the-counter-01.jpg",
    photos: [
      "assets/img/work/around-the-counter/around-the-counter-02.jpg",
      "assets/img/work/around-the-counter/around-the-counter-03.jpg"
    ]
  },
  {
    id: "dad-and-crab",
    title: "Dad and Crab",
    year: 2026,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
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
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/working-on-the-car/working-on-the-car-01.jpg",
    featured: "assets/img/work/working-on-the-car/working-on-the-car-01.jpg",
    photos: []
  },
  {
    id: "sound",
    title: "Sound",
    year: 2023,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/sound/sound-01.jpg",
    featured: "assets/img/work/sound/sound-01.jpg",
    photos: []
  },
  {
    id: "campus",
    title: "Campus",
    year: 2021,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "perception",
    title: "Perception",
    year: 2021,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/perception/perception-01.jpg",
    featured: "assets/img/work/perception/perception-01.jpg",
    photos: [
      "assets/img/work/perception/perception-02.jpg"
    ]
  },
  {
    id: "everything-i-love",
    title: "Everything I Love",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/everything-i-love/everything-i-love-01.jpg",
    featured: "assets/img/work/everything-i-love/everything-i-love-01.jpg",
    photos: []
  },
  {
    id: "dishwasher",
    title: "Dishwasher",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/dishwasher/dishwasher-01.jpg",
    featured: "assets/img/work/dishwasher/dishwasher-01.jpg",
    photos: [
      "assets/img/sketchbook/art/art-sketch-12.jpg",
      "assets/img/sketchbook/art/art-sketch-13.jpg",
      "assets/img/sketchbook/art/art-sketch-26.jpg"
    ]
  },
  {
    id: "cardboard-party",
    title: "Cardboard Party",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "assets/img/work/cardboard-party/cardboard-party-01.jpg",
    featured: "assets/img/work/cardboard-party/cardboard-party-01.jpg",
    photos: [
      "assets/img/sketchbook/art/art-sketch-19.jpg",
      "assets/img/sketchbook/art/art-sketch-20.jpg",
      "assets/img/sketchbook/art/art-sketch-21.jpg"
    ]
  },
  {
    id: "night",
    title: "Night",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
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
    materials: "Materials",
    summary: "One-line description.",
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
    materials: "Materials",
    summary: "One-line description.",
    details: [],
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
      "assets/img/sketchbook/art/art-sketch-08.jpg",
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
  "assets/img/about/about-41.jpg"
];
const NAME_FLIP_MS = 1000;
