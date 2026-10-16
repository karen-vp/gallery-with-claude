# gallery-with-claude

A one-page portfolio site built with React and Vite from the Figma design
"Mehndi Artist Portfolio Design" (by Jaysiddh Vaghela, Figma Community).

Sections: header and hero, gallery with category filters, services carousel,
about, reviews carousel, FAQ accordion, contact and footer. It works on
desktop, tablet and phone.

## Running it locally

You need [Node.js](https://nodejs.org) 18 or newer.

```sh
npm install
npm run dev
```

then open the address it prints (usually http://localhost:5173).

`npm run build` creates the finished site in `dist/`; `npm run preview` serves that build.

## Changing the content

All text and images are in one file: **`src/data/content.js`**.

- **Images:** put your files in `public/images/` and refer to them as
  `"images/your-file.jpg"`. JPG or WebP around 1600px wide works well.
- **Gallery:** add or remove entries in `gallery.items`. Each one needs an
  `image`, a short `alt` description and a `category`. The filter buttons come
  from `gallery.categories`; an artwork shows up under the filter whose name
  matches its `category`.
- **Services, reviews, FAQ, contact, footer:** edit the matching section of the
  same file. Cards are added or removed by adding or removing entries.
- **Logo:** replace `public/images/logo.png` (white lettering on a transparent
  background).

## Colours and fonts

The colours and spacing are variables at the top of `src/styles.css`
(`--green` is the main colour). Text uses the Poppins font, bundled with the site.

## Publishing on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and publishes the site
every time `main` changes.

1. In the repository on GitHub, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow from the **Actions** tab).

The site will be live at `https://<username>.github.io/gallery-with-claude/`.
