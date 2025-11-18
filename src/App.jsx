import React, { useEffect } from 'react';
import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/layout/Footer/Footer";
import { useAOS } from './hooks/useAOS';

function App() {
  useAOS();

  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;