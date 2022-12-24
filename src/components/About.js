import React from "react";
import '../styles/about.css';
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="md:flex-grow md:w-1/2 flex flex-col md:items-start text-left mb-16 md:mb-0 items-start md:ml-24 sm:ml-16 ml-8">
          <h1 className="title-font name sm:text-6xl md:text-8xl text-4xl font-medium dark:text-skin-muted text-skin-inverted">
            Hi<span className="wave" aria-labelledby="hey" role="img">&#128075;</span>, I'm <span className="animate-text text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-600 to-purple-400">Aditya</span>
          </h1>
          <h3 className="mb-8 subtitle font-medium dark:text-skin-inverted_light text-skin-base_dark md:text-6xl sm:text-5xl text-3xl">
            Building web technologies.
          </h3>
          {/* <p className="mb-8 leading-relaxed description text-skin-inverted dark:text-skin-base">
            A Software Engineer currently working in JPMorgan Chase & Co. 
          </p> */}
        </div>
      </div>
    </section>
  );
}
