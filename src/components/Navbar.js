import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import avatar from '../images/cat.jpg'
import '../styles/navbar.css'

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center text-lg">
        <a href="/" className="flex items-center space-x-4 text-white font-medium justify-between">
          <div className="w-10 h-10 rounded-full avatar"></div>
          <div className="font-sans dark:text-white md:block hidden">Aditya Sinha</div>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-lg justify-center">
        <a href="#about" className="mr-5 hover:text-white">
            about
          </a>
          <a href="#experience" className="mr-5 hover:text-white">
            experience
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            skills
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a> */}
        </nav>
        {/* <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a> */}
      </div>
    </header>
  );
}
