export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="px-3 py-1 bg-primary/30 text-primary rounded-full text-sm font-medium inline-block mb-4">
            Contact
          </span>
          <h2 className="text-4xl font-bold mt-4 text-foreground">Let's Connect</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-background rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center">
                <img
                  src="IMG_0400.jpeg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-primary shadow-md"
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Discord</h3>
                <p className="text-xl font-semibold text-muted-foreground">whoppps</p>
              </div>

              <button
                onClick={() => window.open("https://discord.com/users/891514137857892362")}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all duration-300 flex items-center justify-center mx-auto space-x-2"
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