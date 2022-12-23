import { ArrowCircleDownIcon, ArrowRightIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import avatar from '../images/cat.jpg'
import '../styles/navbar.css'
import resume from '../assets/resume.pdf';

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if(theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <header className="dark:bg-skin-base bg-skin-inverted md:sticky top-0 z-10">
      <div className="flex flex-row justify-between items-center">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-lg">
        <a href="/" className="flex items-center space-x-4 text-skin-muted font-medium justify-between">
          <div className="w-10 h-10 rounded-full avatar"></div>
          <div className="font-sans dark:text-skin-muted text-skin-inverted md:block hidden">Aditya Sinha</div>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-lg justify-center">
          <a href="#about" className="mr-5 dark:text-skin-muted text-skin-inverted hover:text-skin-muted">
            about
          </a>
          <a href="#experience" className="mr-5 dark:text-skin-muted text-skin-inverted hover:text-skin-muted">
            experience
          </a>
          <a href="#skills" className="mr-5 dark:text-skin-muted text-skin-inverted hover:text-skin-muted">
            skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-skin-muted">
            Testimonials
          </a> */}
        </nav>
        <a
          href={resume} download={"AdityaSinha.pdf"} target="_blank"
          className="inline-flex items-center bg-skin-base text-skin-base dark:bg-skin-inverted dark:text-skin-inverted border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Resume
          <ArrowCircleDownIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
      <div className="">
      <button id="theme-toggle" type="button" className="text-skin-inverted dark:text-skin-base hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none  dark:focus:ring-gray-700 rounded-full text-sm p-2.5" onClick={handleThemeSwitch}>
      <svg id="theme-toggle-dark-icon" className={theme==="dark" ? "hidden w-7 h-7" : "w-7 h-7"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
      <svg id="theme-toggle-light-icon" className={theme==="light" ? "hidden w-7 h-7" : "w-7 h-7"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>
      </div>
      </div>
    </header>
  );
}
