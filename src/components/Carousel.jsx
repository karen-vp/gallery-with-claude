import { useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Horizontal row of cards that bleeds past the page edges, as in the design.
// Starts centred; the arrows move it one card at a time.
export default function Carousel({ label, className = "", children }) {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    // Wide screens show the row centred like the design; phones start at the first card.
    if (el && window.innerWidth >= 700) el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
  }, []);

  const step = (direction) => {
    const el = track.current;
    const card = el?.firstElementChild;
    if (!card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className={`carousel ${className}`}>
      <div className="container carousel-controls">
        <button type="button" className="arrow arrow-outline" aria-label={`Previous ${label}`} onClick={() => step(-1)}>
          <ArrowLeft size={28} strokeWidth={2} />
        </button>
        <button type="button" className="arrow arrow-solid" aria-label={`Next ${label}`} onClick={() => step(1)}>
          <ArrowRight size={28} strokeWidth={2} />
        </button>
      </div>
      <div className="carousel-track" ref={track} role="region" aria-label={label} tabIndex={0}>
        {children}
      </div>
    </div>
  );
}
