import React from 'react';
import { github, linkedin, resume } from '../assets';

const Footer = () => {
  return (
    <footer className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <div className="mx-auto max-w-screen-xl text-center">
        <div className="flex m-4 justify-around ">
            <a href="https://github.com/laysonaljon" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-150">
                <img src={github} alt="GitHub" className="inline-block mr-1 w-10 h-10" title="GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/aljonlayson/" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-150">
                <img src={linkedin} alt="LinkedIn" className="inline-block mr-1 w-10 h-10" title="LinkedIn"/>
            </a>
            <a href="https://drive.google.com/file/d/1uE1jK3uiRckQbW9IaULnwYucXcyxbOYL/view?usp=sharing" target="_blank" rel="noopener noreferrer"  className="transform transition-transform duration-300 hover:scale-150">
                <img src={resume} alt="Resume" className="inline-block mr-1 w-10 h-10" title="View Resume"/>
            </a>
        </div>

        <div className="mb-4">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Designed and Developed by Aljon G. Layson</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
