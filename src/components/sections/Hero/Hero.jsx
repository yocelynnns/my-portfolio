import React from "react";
import HeroContent from "./HeroContent";
import HeroAvatar from "./HeroAvatar";
import { HERO, floatingShapes } from "./Hero.constants";

export default function Hero() {
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
          <HeroContent hero={HERO} />
          <HeroAvatar />
        </div>
      </div>
    </section>
  );
}