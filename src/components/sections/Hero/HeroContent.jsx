import React from "react";
import ShinyText from "../../effects/ShinyText/ShinyText";
import BlurText from "../../effects/BlurText";
import yocelynCV from "../../../assets/yocelyn_cv.pdf"; 

export default function HeroContent({ hero }) {
  return (
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
        <q className="text-gray-700 font-medium">{hero.tagline}</q>
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
        Hi, I'm{" "}
        <ShinyText
          text={hero.name}
          speed={3}
          className="block mt-2"
        />
      </h1>

      <BlurText
        text={hero.intro}
        delay={200}
        className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8"
      />

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <a
          href={yocelynCV}
          download="Yocelyn_Theona_CV.pdf"
          className="px-8 py-4 rounded-full font-semibold text-white bg-linear-to-r from-pink-400 to-purple-500 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 hover:from-pink-500 hover:to-purple-600 flex items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <span>📄</span>
          Download CV
        </a>

        <a
          href="#projects"
          className="px-8 py-4 rounded-full font-semibold text-gray-700 bg-white border border-pink-200 shadow-md hover:border-pink-300 hover:shadow-lg transition-all hover:-translate-y-1 flex items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          <span>🚀</span>
          Explore My Projects
        </a>
      </div>

      {/* Social */}
      <p className="text-gray-500 mt-8" data-aos="fade-up" data-aos-delay="600">
        {hero.socialHandle}
      </p>
    </div>
  );
}