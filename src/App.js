import './App.css';
import Hero from "./pages/Hero.js";
import About from "./pages/About.js";
import Services from './pages/Services.js';
import Header from './components/Header.js';
import Team from './pages/Team.js';
import ContactUS from './pages/ContactUs.js';
import Preloader from './components/Preloader.js';
import Footer from './components/Footer';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <>
      <Preloader />

      <Header />

      {/* All sections in ONE PAGE */}
      <Hero />
      <About />
      <Services />
      <Team />
      <ContactUS />

      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
