import { about } from "../data/content.js";
import { asset } from "../asset.js";
import SectionHeading from "./SectionHeading.jsx";

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionHeading tag={about.tag} title={about.title} />
      <div className="about-body">
        <img className="about-photo" src={asset(about.image)} alt="Portrait of the artist" loading="lazy" />
        <div className="about-copy">
          <div className="about-text">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 20)}>{text}</p>
            ))}
          </div>
          <dl className="about-stats">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
