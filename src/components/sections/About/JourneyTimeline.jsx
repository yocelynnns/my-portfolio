import React from 'react';
import { timelineData } from '../../../data/timeline';

export default function JourneyTimeline() {
  return (
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
  );
}