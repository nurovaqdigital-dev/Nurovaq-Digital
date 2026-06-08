export default function Hero() {
  return (
    <section
      id="home"
      className="section-padding pt-32 md:pt-40 bg-gradient-to-br from-slate-50 to-slate-100"
    >
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              Innovation Meets Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Crafting premium software solutions that transform your business
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Welcome to Nurovaq Digital, where we develop cutting-edge applications
            designed to empower businesses and delight users.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apps"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore Our Apps
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
