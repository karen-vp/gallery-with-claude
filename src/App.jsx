import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Services from "./components/Services.jsx";
import About from "./components/About.jsx";
import Reviews from "./components/Reviews.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Gallery />
        <Services />
        <About />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
