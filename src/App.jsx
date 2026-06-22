import React from 'react';
import Navbar from '@/layout/Navbar';
import Footer from '@/layout/Footer';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Skills from '@/sections/Skills';
import Experience from '@/sections/Experience';
import Education from '@/sections/Education';
import Certifications from '@/sections/Certifications';
import Contact from '@/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans bg-background text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
