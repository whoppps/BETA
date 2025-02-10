
import { useState } from 'react';
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "iOS Delta Executer Direct Install",
    description: "A modern iOS sideloading solution.",
    image: "images.png",
    category: "Development"
  }
];

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-blue-50 via-purple-50 to-white relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlN2ZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="px-4 py-2 bg-white/80 text-purple-700 rounded-full text-sm font-medium inline-block shadow-md backdrop-blur-sm border-2 border-purple-500/30">
            Portfolio
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300",
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  )}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <span className="text-sm font-medium bg-purple-500/40 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                    <p className="text-lg mt-2 opacity-90">{project.description}</p>

                    <button
                      onClick={() => window.open("https://whoppps.github.io/delta-direct/", "_blank")}
                      className="mt-6 inline-block bg-gradient-to-r from-[#F2FCE2] to-[#7E69AB] text-white px-6 py-3 text-lg font-medium rounded-xl hover:opacity-90 transition-colors shadow-lg"
                    >
                      Go to Delta Direct
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
