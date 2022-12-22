import React from "react";
import '../styles/about.css';
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="md:flex-grow md:w-1/2 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font name sm:text-7xl text-3xl mb-4 font-medium text-white">
            Hi<span className="wave" aria-labelledby="hey" role="img">&#128075;</span>, I'm Aditya
            {/* <br className="hidden lg:inline-block" />I love to build amazing */}
            {/* apps. */}
          </h1>
          <p className="mb-8 leading-relaxed subtitle">
            A Software Engineer currently working in JPMorgan Chase & Co. 
          </p>
        </div>
      </div>
    </section>
  );
}
