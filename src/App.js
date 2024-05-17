import React from "react";
import { Routes, Route } from "react-router-dom";

// common components
import CallToAction from "./Components/CallToAction";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// pages
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Faq from "./pages/Faq";
// services
import Residential from "./pages/services/Residential";
import Commercial from "./pages/services/Commercial";
import SpaceSaving from "./pages/services/SpaceSaving";
import Automation from "./pages/services/Automation";
import HomeTheatre from "./pages/services/HomeTheatre";
import Entertainment from "./pages/services/Entertainment";
import Landscape from "./pages/services/Landscape";
import Remodel from "./pages/services/Remodel";
import Senior from "./pages/services/Senior";
import Blog from "./pages/Blog";
import Themes from "./pages/Themes";

import About from "./Components/About";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* services */}
        <Route path="/residential-interiors" element={<Residential />} />
        <Route path="/commercial-nteriors" element={<Commercial />} />
        <Route path="/space-saving-furniture" element={<SpaceSaving />} />
        <Route path="/home-automation" element={<Automation />} />
        <Route path="/home-theatre" element={<HomeTheatre />} />

        <Route path="/entertainment-zone" element={<Entertainment />} />
        <Route path="/landscape-music" element={<Landscape />} />

        <Route path="/remodeling" element={<Remodel />} />
        <Route path="/senior-citizen-homes" element={<Senior />} />

        <Route path="/career" element={<Career />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Themes" element={<Themes />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
