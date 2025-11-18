import React, { useRef } from "react";
import IU from "/src/assets/IU.jpg";

export default function HeroAvatar() {
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
    <div 
      className="flex justify-center md:justify-end"
      data-aos="fade-left"
      data-aos-delay="400"
    >
      <div 
        ref={avatarRef}
        className="relative w-72 h-95 md:w-100 md:h-140 rounded-2xl overflow-hidden border-4 border-white shadow-2xl transition-transform duration-300 ease-out cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={IU}
          alt="Portrait of Yocelyn Theona Setiawan"
          className="w-full h-full object-cover"
        />
        
        {/* Floating animation background */}
        <div className="absolute inset-0 bg-linear-to-r from-pink-400 to-purple-500 rounded-2xl blur-xl opacity-30 animate-pulse -z-10"></div>
      </div>
    </div>
  );
}