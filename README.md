# Portfolio Site
Joyce Chen's portfolio — joycechen9.github.io

## Editing content
- **Projects** (grid, list, and project pages): `js/projects.js`. Add or edit an entry; the site builds itself from it.
- **Name photos** on the homepage: `NAME_PHOTOS` in `js/projects.js`.
- **Intro text and contact links**: `index.html`.
- **Styles**: `css/site.css`.

Project pages live at `project.html?id=<project id>`.

## Images
After adding or replacing images, run:

    python3 tools/optimize_images.py

It makes small web copies (`.w800/.w1200/.w1600.webp`) next to each image and records
image sizes in `js/image-sizes.js`, so pages load fast and the grid doesn't jump around.
