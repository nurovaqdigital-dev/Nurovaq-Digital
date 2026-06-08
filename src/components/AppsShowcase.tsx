export default function AppsShowcase() {
  const apps = [
    {
      id: 1,
      title: 'App Coming Soon',
      description: 'A revolutionary application currently in development. Stay tuned for exciting updates.',
      status: 'Under Development',
      features: ['Innovative Features', 'User-Friendly Design', 'Scalable Architecture'],
    },
    {
      id: 2,
      title: 'App Coming Soon',
      description: 'Another amazing application being crafted with precision and expertise.',
      status: 'Under Development',
      features: ['Advanced Technology', 'Seamless Integration', 'Premium Support'],
    },
    {
      id: 3,
      title: 'App Coming Soon',
      description: 'Your next favorite application is on the way. Built with passion and dedication.',
      status: 'Under Development',
      features: ['Future-Ready', 'Secure & Reliable', 'Continuous Innovation'],
    },
  ]

  return (
    <section id="apps" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Applications</span>
          </h2>
          <p className="text-xl text-gray-600">
            Exciting applications currently under development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-primary px-4 py-1 rounded-full text-sm font-semibold">
                  {app.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
              <p className="text-gray-600 mb-6">{app.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary font-bold mt-1">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
