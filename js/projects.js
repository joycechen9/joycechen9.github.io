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
    cover      image shown in the grid, e.g. "assets/img/work/new-windsor/cover.jpg"
               leave "" to show a grey placeholder.
               Tiles keep the shape of their image and line up in 3 columns.
    featured   the large image at the top of the project page
    photos     images in the grid below it
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
    cover: "",
    featured: "",
    photos: []
  },
{
    id: "saturn-with-a-moon",
    title: "Saturn with a Moon",
    year: 2026,
    tags: ["design"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
{
    id: "manchild",
    title: "Manchild",
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
    cover: "",
    featured: "",
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
    featured: "",
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
    id: "chinese-market",
    title: "Chinese Market",
    year: 2026,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "working-on-the-car",
    title: "Working on the Car",
    year: 2026,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
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
    cover: "",
    featured: "",
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
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "everything-i-love",
    title: "Everything I Love",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
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
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "cardboard-party",
    title: "Cardboard Party",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
    photos: []
  },
  {
    id: "night",
    title: "Night",
    year: 2020,
    tags: ["art"],
    materials: "Materials",
    summary: "One-line description.",
    details: [],
    cover: "",
    featured: "",
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
    cover: "",
    featured: "",
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
    cover: "",
    featured: "",
    photos: []
  }
];

/* One sketchbook per tag. The SKETCHBOOK link under the work list opens
   the one for the selected filter: sketchbook.html?tag=design, etc. */
const SKETCHBOOKS = {
  design:      { intro: "", images: [] },
  engineering: { intro: "", images: [] },
  art:         { intro: "", images: [] }
};

/* Photos of your name that flip on the homepage, about 1 per second.
   e.g. "assets/img/name/name-01.jpg". Leave empty to show placeholders. */
const NAME_PHOTOS = [];
const NAME_FLIP_MS = 1000;
