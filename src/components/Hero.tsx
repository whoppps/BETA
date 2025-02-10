
import { useEffect, useRef } from 'react';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('animate-fade-up');
          element.style.opacity = '1';
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50 to-transparent" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <span className="inline-block px-3 py-1 border border-purple-500 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6 animate-fade-in backdrop-blur-sm">
          Hello!!!
        </span>
        <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          Creating Ok
          <span className="block mt-2">Projects</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fade-in delay-200">
          I make iOS sideloading easily accessible for all people
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-3 bg-gradient-to-r from-[#1EAEDB] to-[#0EA5E9] text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};
