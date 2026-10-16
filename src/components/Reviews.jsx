import { reviews } from "../data/content.js";
import { asset } from "../asset.js";
import SectionHeading from "./SectionHeading.jsx";
import Carousel from "./Carousel.jsx";

function Stars({ rating }) {
  return (
    <span className="stars" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" className={i < rating ? "on" : ""}>
          <path d="M12 1.5l3.1 7.1 7.4.6-5.6 4.9 1.7 7.4L12 17.6l-6.6 3.9 1.7-7.4-5.6-4.9 7.4-.6z" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="section">
      <div className="container">
        <SectionHeading tag={reviews.tag} title={reviews.title} subtitle={reviews.subtitle} />
      </div>
      <Carousel label="reviews" className="reviews-carousel">
        {reviews.items.map((review) => (
          <article key={review.name} className="review-card">
            <img src={asset(review.image)} alt={`Mehndi design for ${review.name}`} loading="lazy" />
            <div className="review-info">
              <div className="review-title">
                <h3>{review.name}</h3>
                <Stars rating={review.rating} />
              </div>
              <p>{review.text}</p>
            </div>
          </article>
        ))}
      </Carousel>
    </section>
  );
}
