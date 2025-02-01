export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#F1F0FB]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-[#9b87f5] text-white rounded-full text-sm font-medium inline-block mb-4">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-4 text-[#403E43]">Let's Connect</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <img
                  src="IMG_0400.jpeg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-[#9b87f5] shadow-md"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#403E43]">Discord</h3>
                <p className="text-xl font-semibold text-[#8E9196]">whoppps</p>
              </div>

              <button
                onClick={() => window.open("https://discord.com/users/891514137857892362")}
                className="bg-[#9b87f5] text-white px-8 py-3 rounded-full font-medium hover:bg-[#8B5CF6] transition-colors duration-300 flex items-center justify-center mx-auto space-x-2"
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