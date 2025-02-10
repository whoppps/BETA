
export const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-white via-purple-50 to-blue-50 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTBlN2ZmIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="px-4 py-2 bg-white/80 text-purple-700 rounded-full text-sm font-medium inline-block shadow-md backdrop-blur-sm border-2 border-purple-500/30">
            Contact
          </span>
          <h2 className="text-5xl font-bold mt-6 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            Let's Connect
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-12 transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center">
                <img
                  src="IMG_0400.jpeg"
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-xl"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-gray-800">Discord</h3>
                <p className="text-2xl font-semibold text-gray-600">whoppps</p>
              </div>

              <button
                onClick={() => window.open("https://discord.com/users/891514137857892362")}
                className="bg-gradient-to-r from-[#6E59A5] to-[#9b87f5] text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center mx-auto space-x-3 text-lg shadow-lg"
              >
                <span>Connect on Discord</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
