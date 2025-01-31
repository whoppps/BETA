export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-primary/30 rounded-full text-sm font-medium">About Me</span>
          <h2 className="text-4xl font-bold mt-4">Who I Am</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-gray-600">
                A passionate creator with a keen eye for detail and a drive for innovation.
                I specialize in crafting digital experiences that leave lasting impressions.
              </p>
            </div>
            
            <div className="bg-card backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Design', 'Development', 'UI/UX', 'Strategy'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-primary/20 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Working on projects"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};