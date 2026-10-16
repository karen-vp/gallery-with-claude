import { site, footer } from "../data/content.js";
import { asset } from "../asset.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#home" className="footer-logo">
            <img src={asset(site.logo)} alt={site.name.join(" ")} width="214" height="76" />
          </a>
          <div className="footer-columns">
            {footer.columns.map((column) => (
              <div key={column.title}>
                <h3>{column.title}</h3>
                <ul>
                  {column.links.map((link) => (
                    <li key={link.label}>{link.href ? <a href={link.href}>{link.label}</a> : link.label}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <div>
            {footer.legal.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
