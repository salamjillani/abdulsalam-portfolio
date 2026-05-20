import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-neutral-950 text-neutral-800 dark:text-neutral-100 antialiased selection:bg-violet-100 selection:text-violet-900 dark:selection:bg-violet-900/40 dark:selection:text-violet-200">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
