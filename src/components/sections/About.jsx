// components/sections/About.jsx - ULTIMATE HYBRID VERSION
import React, { useState } from "react";
import {
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiCplusplus,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFirebase,
  SiMariadb,
  SiTypescript,
  SiDocker,
  SiLinux,
} from "react-icons/si";
import {
  FaFigma,
  FaGithub
} from "react-icons/fa";
import {
  DiMysql
} from "react-icons/di"

const stats = [
  { value: "5+", label: "Projects Completed", icon: "🚀" },
  { value: "1+", label: "Years of Experience", icon: "💼" },
  { value: "3.80/4.00", label: "GPA", icon: "🎓" },
  { value: "42", label: "Singapore Program", icon: "📖" }
];

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <SiReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "C/C++", icon: <SiCplusplus />, color: "text-blue-500" },
  { name: "Python", icon: <SiPython />, color: "text-blue-400" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-500" },
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-600" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
  { name: "MariaDB", icon: <SiMariadb />, color: "text-blue-500" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
  { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
  { name: "Linux", icon: <SiLinux />, color: "text-yellow-600" },
  { name: "MySQL", icon: <DiMysql />, color: "text-blue-700" },
  { name: "Figma", icon: <FaFigma />, color: "text-purple-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" }
];

const timelineData = [
  { 
    year: "2023-Present", 
    title: "42 Singapore", 
    description: "Intensive peer-to-learning program focusing on C, C++, algorithms, and software engineering fundamentals",
    icon: "🇸🇬",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    year: "2022-2023", 
    title: "Politeknik Negeri Batam", 
    description: "Software Engineering studies with comprehensive web development and programming curriculum",
    icon: "🎓",
    color: "from-purple-500 to-pink-500"
  },
  { 
    year: "2021-2022", 
    title: "Web Development Journey", 
    description: "Built multiple full-stack applications and explored modern web technologies",
    icon: "💻",
    color: "from-green-500 to-teal-500"
  },
  { 
    year: "2020-2021", 
    title: "Coding Foundations", 
    description: "Started learning programming fundamentals and discovered passion for technology",
    icon: "🔰",
    color: "from-orange-500 to-red-500"
  }
];

const quickFacts = [
  "Passionate about clean code & best practices",
  "Love learning new technologies every day",
  "Strong problem-solving & analytical skills",
  "Team player & effective communicator",
  "Always curious about how things work",
  "Believe in continuous learning & growth"
];

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section id="about" className="py-20 px-6 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Tab Navigation */}
        <div className="flex justify-center mb-16" data-aos="fade-down">
          <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/20">
            <div className="flex flex-row gap-2">
              {[
                { id: "about", label: "About Me", emoji: "👨‍💻" },
                { id: "journey", label: "My Journey", emoji: "🛣️" },
                { id: "skills", label: "Skills", emoji: "🛠️" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 rounded-xl font-semibold capitalize transition-all duration-500 flex items-center gap-3 ${
                    activeTab === tab.id
                      ? "bg-linear-to-r from-pink-500 to-purple-600 text-white shadow-lg transform scale-105"
                      : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                  }`}
                >
                  <span className="text-xl">{tab.emoji}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
          
          {/* Animated Background Elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-10" />

          {/* About Tab Content */}
          {activeTab === "about" && (
            <div className="grid lg:grid-cols-2 gap-12" data-aos="fade-up">
              
              {/* Left Column - Personal Story */}
              <div className="space-y-8">
                <div data-aos="fade-right">
                  <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
                    My Story
                  </h2>

                  <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                    <p>
                      Hello! I'm <span className="font-semibold text-pink-500">Yocelyn Theona Setiawan</span>, 
                      a passionate software engineering student from Indonesia currently studying in Singapore. 
                      My journey in tech started with curiosity and has evolved into a deep love for creating 
                      digital solutions that make a difference.
                    </p>
                    
                    <p>
                      I believe in the power of code to transform ideas into reality. Whether it's building 
                      responsive web applications, optimizing algorithms, or learning new technologies, 
                      I'm always excited to take on new challenges and push my boundaries.
                    </p>

                    <p>
                      Currently, I'm immersed in the 42 Singapore program while continuing to expand my 
                      knowledge through personal projects and collaborations. I'm passionate about clean code, 
                      user experience, and continuous learning.
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div data-aos="fade-right" data-aos-delay="200">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center gap-3">
                    <span className="text-3xl">✨</span> 
                    Quick Facts About Me
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {quickFacts.map((fact, index) => (
                      <div 
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-gray-200 hover:border-pink-300 transition-all duration-300 hover:shadow-md"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                      >
                        <div className="w-2 h-2 bg-linear-to-r from-pink-500 to-purple-600 rounded-full"></div>
                        <span className="text-gray-700 text-sm font-medium">{fact}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Highlights */}
              <div className="space-y-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6" data-aos="fade-left">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label}
                      className="bg-linear-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group cursor-pointer"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                        {stat.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {stat.value.includes("3.80") ? (
                          <>
                            3.80<span className="text-pink-500">/4.00</span>
                          </>
                        ) : (
                          <span className="text-transparent bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text">
                            {stat.value}
                          </span>
                        )}
                      </h3>
                      <p className="text-gray-600 font-medium">{stat.label}</p>
                    </div>
                  ))}
                </div>

                {/* Personal Philosophy */}
                <div 
                  className="bg-linear-to-br from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-200 shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <span className="text-2xl">💫</span> My Philosophy
                  </h3>
                  <p className="text-gray-700 italic">
                    "I believe that great software is built at the intersection of technical excellence 
                    and human understanding. Every line of code should serve a purpose and every 
                    interface should feel intuitive."
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Journey/Timeline Tab Content */}
          {activeTab === "journey" && (
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              <h2 className="text-5xl font-bold text-center mb-10 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                My Coding Journey
              </h2>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-linear-to-b from-pink-500 via-purple-500 to-blue-500 transform -translate-x-1/2 z-0"></div>
                
                <div className="space-y-12 relative z-10">
                  {timelineData.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex gap-8 items-start group"
                      data-aos="fade-right"
                      data-aos-delay={index * 150}
                    >
                      {/* Timeline Dot */}
                      <div className="shrink-0 relative">
                        <div className={`w-16 h-16 rounded-2xl bg-linear-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500 z-20 relative`}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 pb-1 group-last:pb-0">
                        <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 group-hover:border-pink-300">
                          <div className="flex items-center gap-4 mb-3">
                            <div className={`text-sm font-bold px-3 py-1 rounded-full bg-linear-to-r ${item.color} text-white`}>
                              {item.year}
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Skills Tab Content */}
          {activeTab === "skills" && (
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
                    {skills.slice(0, 12).map((skill, index) => (
                      <div 
                        key={skill.name} 
                        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                      >
                        {/* Skill Icon */}
                        <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                          {skill.icon}
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
                    {skills.slice(12).map((skill, index) => (
                      <div 
                        key={skill.name}
                        className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center"
                        data-aos="zoom-in"
                        data-aos-delay={index * 50 + 100}
                      >
                        {/* Tool Icon */}
                        <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                          {skill.icon}
                        </div>
                        
                        {/* Tool Name */}
                        <div className="font-medium text-gray-700 text-sm">
                          {skill.name}
                        </div>
                        
                        {/* Tooltip on Hover */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                          {skill.name}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}