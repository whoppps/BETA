export const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-primary/30 rounded-full text-sm font-medium">
            About
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-8">iOS Sideloading Methods &amp; Tricks</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A dedicated section sharing in-depth guides, tips, and tricks for sideloading apps on iOS devices.
          </p>

          {/* GitHub Button */}
          <div className="mt-8">
            <button
              onClick={() => window.open("https://github.com/whoppps", "_blank")}
              className="inline-block px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
