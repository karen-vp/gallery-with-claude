import { useMemo, useState } from "react";
import { gallery } from "../data/content.js";
import { asset } from "../asset.js";
import SectionHeading from "./SectionHeading.jsx";

// Row rhythm from the design, in sixths of the row width:
// two halves, three thirds, wide + narrow, narrow + wide.
const ROW_PATTERN = [[3, 3], [2, 2, 2], [4, 2], [2, 4]];

function layoutRows(items) {
  const rows = [];
  let i = 0;
  let p = 0;
  while (i < items.length) {
    let spans = ROW_PATTERN[p % ROW_PATTERN.length];
    const left = items.length - i;
    if (left < spans.length) spans = Array(left).fill(6 / left);
    rows.push(spans.map((span, k) => ({ ...items[i + k], span })));
    i += spans.length;
    p += 1;
  }
  return rows.flat();
}

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", ...gallery.categories];

  const tiles = useMemo(
    () =>
      layoutRows(
        gallery.items.filter((item) => filter === "All" || item.category === filter)
      ),
    [filter]
  );

  return (
    <section id="gallery" className="section container">
      <SectionHeading tag={gallery.tag} title={gallery.title} subtitle={gallery.subtitle} />

      <div className="gallery-body">
        <div className="filters" role="group" aria-label="Filter by style">
          {filters.map((name) => (
            <button
              key={name}
              type="button"
              className={filter === name ? "active" : undefined}
              aria-pressed={filter === name}
              onClick={() => setFilter(name)}
            >
              {name}
            </button>
          ))}
        </div>

        {tiles.length ? (
          <div className="gallery-grid">
            {tiles.map((tile, index) => (
              <figure key={`${filter}-${index}`} className={`tile span-${tile.span}`}>
                <img src={asset(tile.image)} alt={tile.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        ) : (
          <p className="empty">No designs in this category yet.</p>
        )}
      </div>
    </section>
  );
}
