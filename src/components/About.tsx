
export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            About
          </span>
          <h2 className="text-4xl font-bold mt-4 mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            iOS Sideloading Methods &amp; Tricks
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A dedicated section sharing in-depth guides, tips, and tricks for sideloading apps on iOS devices.
          </p>

          {/* GitHub Button */}
          <div className="mt-8">
            <button
              onClick={() => window.open("https://github.com/whoppps", "_blank")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
