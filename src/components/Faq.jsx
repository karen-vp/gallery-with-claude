import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faq } from "../data/content.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Faq() {
  // The design shows the second question open.
  const [open, setOpen] = useState(1);

  return (
    <section id="faq" className="section container faq">
      <SectionHeading tag={faq.tag} title={faq.title} subtitle={faq.subtitle} />
      <div className="faq-list">
        {faq.items.map((item, index) => {
          const isOpen = open === index;
          return (
            <div key={index} className={`faq-item${isOpen ? " open" : ""}`}>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
                onClick={() => setOpen(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                {isOpen ? <Minus size={40} strokeWidth={1.5} /> : <Plus size={40} strokeWidth={1.5} />}
              </button>
              <div id={`faq-${index}`} className="faq-answer" hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
