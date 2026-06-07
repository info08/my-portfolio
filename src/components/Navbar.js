import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/images/PM_026.pdf'; // Path from the public folder
    link.download = 'PM_NextJs_8_CV.pdf'; // Rename file if needed
    link.click();
  };
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Prashant Mishra
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
           Technical Skills
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Professioanl Experience
          </a>
        </nav>
        <button
          onClick={()=>handleDownload()}
          //href="https://github.com/info08/my-portfolio/blob/gh-pages/images/Prashant_7Yrs.pdf"
          //target="_blank"
          //rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Download CV
        </button>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Hire Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
