
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-50 via-blue-50 to-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlN2ZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 sm:px-6">
        <span className="inline-block px-4 py-2 border-2 border-purple-500/30 bg-white/80 text-purple-700 rounded-full text-sm font-medium mb-8 animate-fade-in backdrop-blur-sm shadow-xl">
          Hello!!!
        </span>
        <h1 ref={titleRef} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text leading-tight">
          Creating Ok
          <span className="block mt-2">Projects</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 animate-fade-in delay-200 max-w-2xl mx-auto leading-relaxed">
          I make iOS sideloading easily accessible for all people
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#1EAEDB] to-[#0EA5E9] text-white rounded-xl transition-all hover:scale-105 hover:shadow-lg text-base sm:text-lg font-medium shadow-md"
        >
          Learn More
        </button>
      </div>
    </section>
  );
};
