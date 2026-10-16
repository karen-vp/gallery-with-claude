import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { site, nav, hero } from "../data/content.js";
import { asset } from "../asset.js";

function useActiveSection() {
  const [active, setActive] = useState(nav[0].href);
  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return active;
}

export default function Hero() {
  const active = useActiveSection();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${asset(hero.image)})` }}>
      <div className="container hero-bar">
        <a href="#home" className="logo" aria-label={site.name.join(" ")}>
          <img src={asset(site.logo)} alt={site.name.join(" ")} width="107" height="38" />
        </a>

        <nav className={`hero-nav${menuOpen ? " open" : ""}`} aria-label="Main">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : undefined}
              aria-current={active === item.href ? "true" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              <span className="dot" aria-hidden="true" />
              {item.label}
            </a>
          ))}
        </nav>

        <a href={site.bookingLink} className="btn btn-light hero-book">
          Book Now
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div className="container hero-body">
        <div className="hero-copy">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <div className="hero-actions">
            <a href={site.bookingLink} className="btn btn-light">
              Book Now
            </a>
            <a href="#gallery" className="btn btn-glass">
              Portfolio
            </a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>{hero.stats[0].value}</strong>
            <span>{hero.stats[0].label}</span>
            <div className="avatars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="hero-stat">
            <strong>{hero.stats[1].value}</strong>
            <span>{hero.stats[1].label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
