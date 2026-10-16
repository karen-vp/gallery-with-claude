import { PhoneCall, Mail, MapPin } from "lucide-react";
import { contact } from "../data/content.js";
import { asset } from "../asset.js";
import SectionHeading from "./SectionHeading.jsx";
import { InstagramIcon, FacebookIcon } from "./SocialIcons.jsx";

export default function Contact() {
  return (
    <section id="contact" className="section container">
      <SectionHeading tag={contact.tag} title={contact.title} subtitle={contact.subtitle} />
      <div className="contact-body">
        <img className="contact-photo" src={asset(contact.image)} alt="Hands with henna designs" loading="lazy" />
        <ul className="contact-list">
          <li>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
              <PhoneCall size={32} strokeWidth={1.6} />
              <span>{contact.phone}</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <Mail size={32} strokeWidth={1.6} />
              <span>{contact.email}</span>
            </a>
          </li>
          <li>
            <div>
              <MapPin size={36} strokeWidth={1.6} />
              <span>{contact.address}</span>
            </div>
          </li>
          <li>
            <div>
              <span>Follow on:</span>
              <a href={contact.instagram} className="social" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={contact.facebook} className="social" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
