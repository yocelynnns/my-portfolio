import React from 'react';

const tabs = [
  { id: "about", label: "About Me", emoji: "👨‍💻" },
  { id: "journey", label: "My Journey", emoji: "🛣️" },
  { id: "skills", label: "Skills", emoji: "🛠️" }
];

export default function AboutTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex justify-center mb-16" data-aos="fade-down">
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-white/20">
        <div className="flex flex-col md:flex-row gap-2">
          {tabs.map((tab) => (
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
  );
}