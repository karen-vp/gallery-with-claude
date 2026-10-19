import { PhoneCall } from "lucide-react";
import { services, contact } from "../data/content.js";
import { asset } from "../asset.js";
import SectionHeading from "./SectionHeading.jsx";
import Carousel from "./Carousel.jsx";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading tag={services.tag} title={services.title} subtitle={services.subtitle} />
      </div>
      <Carousel label="services" className="services-carousel">
        {services.items.map((service, index) => (
          <article key={index} className="service-card">
            <img src={asset(service.image)} alt={service.name} loading="lazy" />
            <div className="service-info">
              <div className="service-title">
                <h3>{service.name}</h3>
                <span>{service.price}</span>
              </div>
              <div className="service-meta">
                <div>
                  {service.details.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="call-button"
                  aria-label={`Call to book ${service.name}`}
                >
                  <PhoneCall size={32} strokeWidth={1.6} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
