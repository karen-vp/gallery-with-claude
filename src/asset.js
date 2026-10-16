// Resolves a path inside `public/` so it works locally and on GitHub Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
