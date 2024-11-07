import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import SocialBar from './components/SocialBar';

  return (
    <>
      <Snow isActive={showSnow} />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <SocialBar />
    </>
  );

export default App; 