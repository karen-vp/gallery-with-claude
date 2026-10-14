const gallery = document.querySelector(".gallery");
const filters = document.querySelector(".filters");
const lightbox = document.querySelector(".lightbox");
const lbImg = lightbox.querySelector("img");

let visible = ARTWORKS;
let current = 0;

function meta(art) {
  return [art.medium, art.size, art.year].filter(Boolean).join(" · ");
}

function renderGallery() {
  gallery.innerHTML = "";
  visible.forEach((art, i) => {
    const btn = document.createElement("button");
    btn.className = "card";
    btn.setAttribute("aria-label", `View ${art.title}`);
    btn.innerHTML = `
      <img src="${art.image}" alt="${art.title}" loading="lazy">
      <span class="card-caption">
        <span class="card-title">${art.title}</span>
        <span class="card-year">${art.year}</span>
      </span>`;
    btn.addEventListener("click", () => openLightbox(i));
    gallery.appendChild(btn);
  });
}

function renderFilters() {
  const categories = ["All", ...new Set(ARTWORKS.map((a) => a.category))];
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.setAttribute("aria-pressed", cat === "All");
    btn.addEventListener("click", () => {
      filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
      visible = cat === "All" ? ARTWORKS : ARTWORKS.filter((a) => a.category === cat);
      renderGallery();
    });
    filters.appendChild(btn);
  });
}

function showArtwork(i) {
  current = (i + visible.length) % visible.length;
  const art = visible[current];
  lbImg.src = art.image;
  lbImg.alt = art.title;
  lightbox.querySelector(".lb-title").textContent = art.title;
  lightbox.querySelector(".lb-meta").textContent = meta(art);
  lightbox.querySelector(".lb-desc").textContent = art.description || "";
}

function openLightbox(i) {
  showArtwork(i);
  lightbox.showModal();
}

lightbox.querySelector(".lb-close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lb-prev").addEventListener("click", () => showArtwork(current - 1));
lightbox.querySelector(".lb-next").addEventListener("click", () => showArtwork(current + 1));
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});
lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showArtwork(current - 1);
  if (e.key === "ArrowRight") showArtwork(current + 1);
});

// Swipe left/right on touch screens
let touchX = null;
lightbox.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
lightbox.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) showArtwork(current + (dx < 0 ? 1 : -1));
  touchX = null;
});

document.getElementById("year").textContent = new Date().getFullYear();
renderFilters();
renderGallery();
