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
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Hero />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact' element={<ContactUS />}></Route>

        </Routes>
      </BrowserRouter>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
