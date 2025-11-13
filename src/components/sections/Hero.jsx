// components/sections/Hero.jsx 
import React, { useRef } from "react";
import ShinyText from "../ShinyText/ShinyText";
import BlurText from "../effects/BlurText";

const HERO = {
  name: "Yocelyn Theona Setiawan",
  tagline: "Building digital experiences with passion",
  intro: "A passionate software engineering student dedicated to crafting modern, high-performance applications through innovative and user-friendly solutions.",
  cvLink: "#",
  avatar: "/IU.jpg",
  badgeImg: "/assets/something.png",
  socialHandle: "@yocelynnns",
};

// FLOATING PARTICLES ARRAY
const floatingShapes = [
  { className: "top-20 left-10 w-6 h-6 bg-pink-200 animate-bounce" },
  { className: "top-40 right-20 w-8 h-8 bg-blue-200 animate-pulse" },
  { className: "bottom-40 left-20 w-10 h-10 bg-purple-200 animate-bounce delay-1000" },
  { className: "top-1/4 right-1/4 w-4 h-4 bg-pink-300 animate-pulse" },
  { className: "bottom-1/3 right-1/3 w-5 h-5 bg-blue-300 animate-bounce delay-500" },
  { className: "top-1/2 left-1/4 w-7 h-7 bg-purple-300 animate-pulse delay-700" },
];

export default function Hero() {
  const avatarRef = useRef(null);

  const handleMouseMove = (e) => {
    const avatar = avatarRef.current;
    if (!avatar) return;

    const { left, top, width, height } = avatar.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    avatar.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    const avatar = avatarRef.current;
    if (avatar) {
      avatar.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden"
    >
      {/* FLOATING PARTICLES RENDERING */}
      {floatingShapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute rounded-full opacity-60 ${shape.className}`}
        />
      ))}

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-16">
          
          {/* Left — Text */}
          <div data-aos="fade-up" data-aos-delay="200">
            {/* Badge */}
            <div 
              className="flex items-center gap-3 mb-8 bg-white/80 backdrop-blur-sm p-4 w-fit rounded-2xl border border-pink-100 shadow-sm"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="w-10 h-10 bg-linear-to-r from-pink-400 to-purple-500 rounded-md flex items-center justify-center text-white font-bold">
                YT
              </div>
              <q className="text-gray-700 font-medium">{HERO.tagline}</q>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
              Hi, I'm{" "}
              <ShinyText
                text={HERO.name}
                speed={3}
                className="block mt-2"
              />
            </h1>

            <BlurText
              text={HERO.intro}
              delay={200}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={HERO.cvLink}
                className="px-8 py-4 rounded-full font-semibold text-white bg-linear-to-r from-pink-400 to-purple-500 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:from-pink-500 hover:to-purple-600"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Download CV
              </a>

              <a
                href="#projects"
                className="px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border border-pink-200 shadow-md hover:border-pink-300 hover:shadow-lg transition-all hover:-translate-y-1"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Explore My Projects
              </a>
            </div>

            {/* Social */}
            <p className="text-gray-500 mt-8" data-aos="fade-up" data-aos-delay="600">
              {HERO.socialHandle}
            </p>
          </div>

          {/* Right — Avatar WITH HOVER EFFECT */}
          <div 
            className="flex justify-center md:justify-end"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div 
              ref={avatarRef}
              className="relative w-72 h-72 md:w-100 md:h-100 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 ease-out cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Replace placeholder with your actual image */}
              <img
                src={HERO.avatar}
                alt="Portrait of Yocelyn Theona Setiawan"
                className="w-full h-full object-cover"
              />
              
              {/* Floating animation background */}
              <div className="absolute inset-0 bg-linear-to-r from-pink-400 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}