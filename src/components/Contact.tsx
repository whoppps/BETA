export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-primary/30 rounded-full text-sm font-medium">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-4">Contact Me</h2>
        </div>

        <div className="max-w-xl mx-auto text-center">
          <p className="text-2xl font-semibold">Discord: whoppps</p>

          {/* Picture Button */}
          <div className="mt-8">
            <button
              onClick={() => window.open("https://discord.com/users/891514137857892362")}
              className="focus:outline-none"
            >
              <img
                src="IMG_0400.jpeg"      // <-- Replace with your image path
                alt="Picture Button"
                className="w-16 h-16 hover:scale-105 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
