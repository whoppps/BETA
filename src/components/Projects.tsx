import { useState } from 'react';
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "Digital Platform",
    description: "A modern web application built with cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    category: "Development"
  },
  {
    id: 2,
    title: "Brand Identity",
    description: "Complete brand identity design for a tech startup.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Design"
  }
];

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-primary/30 rounded-full text-sm font-medium">Portfolio</span>
          <h2 className="text-4xl font-bold mt-4">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-xl overflow-hidden"
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
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300",
                  hoveredId === project.id ? "opacity-100" : "opacity-0"
                )}>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="text-sm font-medium bg-primary/30 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                    <p className="text-sm mt-2 opacity-90">{project.description}</p>
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