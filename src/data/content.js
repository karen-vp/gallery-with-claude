// All of the site's text and images live in this file.
// Images go in the `public/images/` folder; refer to them as "images/your-file.jpg".

export const site = {
  name: ["RIDDHI", "MEHENDI"],
  logo: "images/logo.png",
  bookingLink: "#contact",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#gallery" },
  { label: "Service", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  image: "images/hero.jpg",
  title: "Where Art Meets Tradition One Hand at a Time",
  subtitle: "Bringing timeless mehndi designs to life for your most unforgettable moments.",
  stats: [
    { value: "200+", label: "Happy Customer" },
    { value: "10+", label: "Year of Experience" },
  ],
};

export const gallery = {
  tag: "Gallery",
  title: "A Glimpse into My Hands of Art",
  subtitle:
    "Explore the rich detailing, flow, and grace of designs handcrafted with love s handcrafted with love.",
  // Filter buttons, in order. "All" is added automatically.
  categories: ["Bridal", "Arabic", "Baby Shower", "Festival", "Contemporary", "Custom Designs"],
  // Each artwork needs an image, a short description (alt) and one of the categories above.
  items: [
    { image: "images/gallery-01.jpg", alt: "Hands with henna designs joined together", category: "Festival" },
    { image: "images/gallery-02.jpg", alt: "Detailed full-hand bridal mehndi", category: "Bridal" },
    { image: "images/gallery-03.jpg", alt: "Round motif on the back of a hand", category: "Arabic" },
    { image: "images/gallery-04.jpg", alt: "Delicate vine design over green leaves", category: "Contemporary" },
    { image: "images/gallery-05.jpg", alt: "Bridal mehndi on both feet", category: "Bridal" },
    { image: "images/gallery-06.jpg", alt: "Wedding couple holding hands", category: "Bridal" },
    { image: "images/gallery-07.jpg", alt: "Two hands with fresh henna", category: "Festival" },
    { image: "images/gallery-08.jpg", alt: "Artist applying henna with a cone", category: "Custom Designs" },
    { image: "images/gallery-09.jpg", alt: "Group of hands with henna over a pink outfit", category: "Baby Shower" },
    { image: "images/gallery-01.jpg", alt: "Hands with henna designs joined together", category: "Festival" },
    { image: "images/gallery-02.jpg", alt: "Detailed full-hand bridal mehndi", category: "Bridal" },
  ],
};

export const services = {
  tag: "Services",
  title: "Artful Mehendi Services",
  subtitle: "Tailored for every occasion, with love and precision.",
  items: [
    {
      image: "images/gallery-05.jpg",
      name: "Bridal Mehendi",
      price: "$ 200.00",
      details: ["Full-hand & foot designs included", "Approx. time: 3–5 hours"],
    },
    {
      image: "images/service-02.jpg",
      name: "Bridal Mehendi",
      price: "$ 200.00",
      details: ["Full-hand & foot designs included", "Approx. time: 3–5 hours"],
    },
    {
      image: "images/service-03.jpg",
      name: "Bridal Mehendi",
      price: "$ 200.00",
      details: ["Full-hand & foot designs included", "Approx. time: 3–5 hours"],
    },
    {
      image: "images/gallery-02.jpg",
      name: "Bridal Mehendi",
      price: "$ 200.00",
      details: ["Full-hand & foot designs included", "Approx. time: 3–5 hours"],
    },
  ],
};

export const about = {
  tag: "About Me",
  title: "The Artist Behind the Cone",
  image: "images/about.jpg",
  paragraphs: [
    "Hi, I’m RIDDHI VAGHELA— a passionate and certified mehndi artist with over 10 years of experience, specializing in bridal, Arabic, and contemporary fusion styles.",
    "Each design I create is more than just art — it’s a celebration of culture, love, and individuality. Whether it’s a grand bridal event or a festive gathering, I ensure every stroke reflects your story. I use only 100% natural, skin-safe henna to deliver deep stains and beautiful memories. With a calm presence and attention to detail, I aim to make your mehndi experience as joyful and relaxed as the design itself.",
  ],
  stats: [
    { value: "200+", label: "Happy Customer" },
    { value: "10+", label: "Year of Experience" },
    { value: "500+", label: "Designs Created" },
  ],
};

const reviewText =
  "Riddhi did my bridal mehendi and left me speechless. The design had elements of our love story — exactly what I wanted!\"";

export const reviews = {
  tag: "Review",
  title: "Words from Happy Hands",
  subtitle: "Real stories. Real smiles.",
  items: [
    { image: "images/review-01.jpg", name: "Jasmine Bhatt", rating: 5, text: reviewText },
    { image: "images/review-02.jpg", name: "Payal Vaghela", rating: 5, text: reviewText },
    { image: "images/service-03.jpg", name: "Sneha Kansara", rating: 5, text: reviewText },
  ],
};

const faqAnswer =
  "We recommend booking at least 2–3 months in advance, especially during peak wedding seasons, to ensure your desired date is reserved.";

export const faq = {
  tag: "FAQs",
  title: "Frequently Asked Questions",
  subtitle: "Everything You Need to Know, In One Place",
  items: Array.from({ length: 6 }, () => ({
    question: "How early should I book my bridal mehendi?",
    answer: faqAnswer,
  })),
};

export const contact = {
  tag: "Contact Me",
  title: "Let’s Make Your Special Day Unforgettable",
  subtitle:
    "Have a bridal event, festive celebration, or custom mehendi idea in mind? Share the details and I’ll get back to you shortly with everything you need to get started.",
  image: "images/contact.jpg",
  phone: "+91 12345 67890",
  email: "mehendiartist123@gmail.com",
  address: "Ahmedabad, Gujarat - 382421",
  instagram: "#",
  facebook: "#",
};

export const footer = {
  columns: [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "#home" },
        { label: "Work", href: "#gallery" },
        { label: "About", href: "#about" },
        { label: "Service", href: "#services" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Service",
      links: [
        { label: "Bridal Mehndi", href: "#services" },
        { label: "Festival Mehndi", href: "#services" },
        { label: "Arabic Mehndi", href: "#services" },
        { label: "Custom Mehndi", href: "#services" },
        { label: "Baby Shower Mehndi", href: "#services" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "+91 12345 67890", href: "tel:+911234567890" },
        { label: "abc@gmail.com", href: "mailto:abc@gmail.com" },
        { label: "Gandhinagar" },
      ],
    },
  ],
  copyright: "@2025 All Rights Reserved by Riddhi Vaghela",
  legal: [
    { label: "Terms and Condition", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};
