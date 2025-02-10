
export const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-white via-purple-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlN2ZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="px-4 py-2 bg-white/80 text-purple-700 rounded-full text-sm font-medium inline-block shadow-md backdrop-blur-sm border-2 border-purple-500/30">
            About
          </span>
          <h2 className="text-5xl font-bold mt-6 mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            iOS Sideloading Methods &amp; Tricks
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            A dedicated section sharing in-depth guides, tips, and tricks for sideloading apps on iOS devices.
          </p>

          <div className="mt-12">
            <button
              onClick={() => window.open("https://github.com/whoppps", "_blank")}
              className="px-8 py-4 bg-gradient-to-r from-[#FEC6A1] to-[#FFDEE2] text-gray-800 rounded-xl transition-all hover:scale-105 hover:shadow-lg font-medium text-lg shadow-md"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
