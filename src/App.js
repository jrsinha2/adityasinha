import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App() {
  
  return (
    <main className="dark:text-gray-400 dark:bg-gray-900 body-font text-gray-900 bg-gray-400">
      <Navbar />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Skills />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
