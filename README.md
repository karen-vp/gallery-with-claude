# gallery-with-claude

A simple, fast portfolio site for showcasing artwork. Plain HTML, CSS and
JavaScript — no build step, nothing to install.

## Features

- Masonry-style grid that keeps each artwork's original shape
- Filter buttons by category (Painting, Drawing, Print, …)
- Full-screen viewer with title, medium, size and description; arrow keys and swipe to browse
- About and Contact sections
- Works on phones, tablets and desktops; follows the visitor's light/dark setting

## Viewing it locally

Open `index.html` in a browser, or run a small server from this folder:

```sh
python3 -m http.server 8000
```

then visit http://localhost:8000.

## Adding your artwork

1. Put your image in the `images/` folder (JPG or WebP around 2000px on the long side works well).
2. Open `js/artworks.js` and add an entry:

   ```js
   {
     title: "My New Piece",
     year: 2026,
     medium: "Oil on canvas",
     size: "50 × 70 cm",
     category: "Painting",
     image: "images/my-new-piece.jpg",
     description: "Optional short note about the piece.",
   },
   ```

3. Delete the placeholder `artwork-XX.svg` files and their entries when you no longer need them.

Filter buttons are created automatically from the categories you use.

## Personalising

- **Your name, intro, about and contact text:** edit `index.html` (search for "Your Name").
- **Colours and fonts:** edit the variables at the top of `css/style.css`.

## Publishing for free with GitHub Pages

In the repository on GitHub, go to **Settings → Pages**, choose
**Deploy from a branch**, select your main branch and the `/ (root)` folder,
and save. The site will be live at `https://<username>.github.io/gallery-with-claude/`.
