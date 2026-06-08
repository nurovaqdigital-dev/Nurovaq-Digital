'use client'

import AnimatedSection from './AnimatedSection'

export default function Pricing() {
  const plans = [
    {
      name: 'Startup',
      price: '$5K',
      description: 'Perfect for MVPs and small projects',
      features: ['Up to 5 pages', 'Responsive design', '3 months support', 'Basic SEO', 'Deployment included'],
      cta: 'Get Started',
      icon: '🚀',
    },
    {
      name: 'Growth',
      price: '$15K',
      description: 'Ideal for scaling applications',
      features: ['Full-stack application', 'Database design', 'Admin dashboard', '6 months support', 'Performance optimization'],
      cta: 'Choose Plan',
      icon: '📈',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex, mission-critical apps',
      features: ['Custom development', '24/7 support', 'DevOps setup', 'Security audit', 'Scalability planning'],
      cta: 'Contact Us',
      icon: '🏢',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Transparent Pricing</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl text-gray-600">Choose the perfect plan for your project</p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <AnimatedSection key={idx} animation="scale" delay={idx * 150}>
              <div
                className={`rounded-2xl p-8 relative transition-transform hover:scale-105 overflow-hidden ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-primary to-blue-600 text-white border-4 border-primary'
                    : 'bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200'
                }`}
              >
                {/* Shimmer effect */}
                <div className={`absolute top-0 left-0 w-full h-full pointer-events-none ${plan.highlighted ? 'pricing-card-shimmer' : ''}`} />
                
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`mb-6 ${plan.highlighted ? 'opacity-90' : 'text-gray-600'}`}>{plan.description}</p>

                  <div className="text-4xl font-bold mb-6">{plan.price}</div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-primary font-bold">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-bold transition-colors ${
                      plan.highlighted
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-blue-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
