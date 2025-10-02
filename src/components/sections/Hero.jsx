import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-100 to-white pt-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Yocelyn 👋</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">Software Developer | 42 Singapore Student</p>
      <a href="#projects" className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 font-medium">
        View My Work
      </a>
    </section>
  );
}