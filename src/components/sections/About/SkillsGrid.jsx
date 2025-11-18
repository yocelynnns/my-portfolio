import React from 'react';
import { skills } from '../../../data/skills';
import {
  SiJavascript, SiReact, SiNodedotjs, SiCplusplus,
  SiPython, SiTailwindcss, SiHtml5, SiCss3,
  SiFirebase, SiMariadb, SiTypescript, SiDocker,
  SiLinux,
} from "react-icons/si";
import { FaFigma, FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

// Create an icon mapping object
const iconComponents = {
  SiJavascript: SiJavascript,
  SiReact: SiReact,
  SiNodedotjs: SiNodedotjs,
  SiCplusplus: SiCplusplus,
  SiPython: SiPython,
  SiTailwindcss: SiTailwindcss,
  SiHtml5: SiHtml5,
  SiCss3: SiCss3,
  SiFirebase: SiFirebase,
  SiMariadb: SiMariadb,
  SiTypescript: SiTypescript,
  SiDocker: SiDocker,
  SiLinux: SiLinux,
  DiMysql: DiMysql,
  FaFigma: FaFigma,
  FaGithub: FaGithub
};

export default function SkillsGrid() {
  const programmingSkills = skills.filter(s => s.category === "programming" || s.category === "framework");
  const toolSkills = skills.filter(s => s.category === "backend" || s.category === "tools");

  return (
    <div className="max-w-6xl mx-auto" data-aos="fade-up">
      <h2 className="text-5xl font-bold text-center mb-10 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="space-y-10">

        {/* Programming & Frameworks */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3 justify-center">
            <span className="text-3xl">💻</span>
            Programming & Frameworks
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {programmingSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-3 justify-center">
            <span className="text-3xl">🛠️</span>
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
            {toolSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index + 100} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill, index }) {
  const IconComponent = iconComponents[skill.iconName];
  
  return (
    <div 
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center"
      data-aos="zoom-in"
      data-aos-delay={index * 50}
    >
      {/* Skill Icon */}
      <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
        {IconComponent && <IconComponent />}
      </div>
      
      {/* Skill Name */}
      <div className="font-medium text-gray-700 text-sm">
        {skill.name}
      </div>
      
      {/* Tooltip on Hover */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {skill.name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
}