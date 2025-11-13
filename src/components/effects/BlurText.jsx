// components/effects/BlurText.jsx
import { useEffect, useRef } from 'react';

export default function BlurText({
  text,
  delay = 0,
  className = '',
  ...props
}) {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const words = container.querySelectorAll('.word');
    
    words.forEach((word, index) => {
      setTimeout(() => {
        word.style.opacity = '1';
        word.style.filter = 'blur(0px)';
        word.style.transform = 'translateY(0)';
      }, delay + index * 100);
    });
  }, [text, delay]);

  return (
    <div
      ref={containerRef}
      className={`blur-text ${className}`}
      {...props}
    >
      {text.split(' ').map((word, index) => (
        <span
          key={index}
          className="word inline-block opacity-0 blur-[10px] translate-y-4 transition-all duration-700 ease-out mr-1" // Added mr-1 for space
          style={{
            transitionDelay: `${delay + index * 100}ms`
          }}
        >
          {word}
          {/* Add space after each word except the last one */}
          {index < text.split(' ').length - 1 ? ' ' : ''}
        </span>
      ))}
    </div>
  );
}