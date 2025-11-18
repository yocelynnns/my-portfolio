import React, { useState } from 'react';
import { stats, quickFacts } from './About.constants';

export default function AboutStory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid lg:grid-cols-2 gap-12" data-aos="fade-up">
      {/* Left Column - Personal Story */}
      <div className="space-y-8">
        <div data-aos="fade-right">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-6">
            My Story
          </h2>

          {/* Mobile Version */}
          <div className="lg:hidden text-gray-700 text-lg leading-relaxed space-y-4">
            {!expanded ? (
              <>
                <p>
                  Hello! I'm <span className="font-semibold text-pink-500">Yocelyn</span>, 
                  a software engineering student from Indonesia studying in Singapore.
                </p>
                <button
                  onClick={() => setExpanded(true)}
                  className="text-pink-600 font-semibold underline"
                >
                  Read More
                </button>
              </>
            ) : (
              <>
                <p>
                  Hello! I'm <span className="font-semibold text-pink-500">Yocelyn Theona Setiawan</span>, 
                  a passionate software engineering student from Indonesia currently studying in Singapore. 
                  My journey in tech started with curiosity and grew into a love for building digital solutions.
                </p>
                <p>
                  I enjoy turning ideas into intuitive user experiences through clean, thoughtful code. 
                  Exploring new technologies and solving problems keeps me motivated.
                </p>
                <p>
                  I'm currently part of the 42 Singapore program while continuing to grow through projects 
                  and collaborations.
                </p>

                <button
                  onClick={() => setExpanded(false)}
                  className="text-pink-600 font-semibold underline"
                >
                  Show Less
                </button>
              </>
            )}
          </div>

          {/* Desktop Version */}
          <div className="hidden lg:block space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="font-semibold text-pink-500">Yocelyn Theona Setiawan</span>, 
              a software engineering student from Indonesia currently studying in Singapore.
              I first got into tech out of curiosity, and over time it grew into a genuine interest in
              building things that are useful and enjoyable to interact with.
            </p>
            <p>
              I enjoy turning ideas into practical digital solutions—whether that's developing
              responsive web applications, improving code structure, or experimenting with new
              tools and technologies. I try to approach each project as a chance to learn and
              sharpen my problem-solving skills.
            </p>
            <p>
              At the moment, I'm part of the 42 Singapore program while working on personal
              projects and collaborations. I care about writing clean, maintainable code
              and creating experiences that feel simple and intuitive for users.
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
                    3.80<br className="block md:hidden"/><span className="text-pink-500">/4.00</span>
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
            "I like coding like I like my coffee: clean, strong, and easy to enjoy. I believe
            in writing software that works properly—interfaces that don't make users scratch their
            heads, and solutions that are smart, simple, and maybe a little playful."
          </p>
        </div>
      </div>
    </div>
  );
}
