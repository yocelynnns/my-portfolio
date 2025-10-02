import React from 'react';

export default function Navbar() {
  return (
    <nav className="p-6 bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-end space-x-8 font-medium">
          <li><a href="#about" className="hover:text-blue-500 transition duration-300">About</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}