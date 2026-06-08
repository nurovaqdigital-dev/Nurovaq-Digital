'use client'

import AnimatedSection from './AnimatedSection'

export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Discovery',
      description: 'We understand your goals, target audience, and project requirements in detail.',
      icon: '🔍',
    },
    {
      number: 2,
      title: 'Strategy',
      description: 'We create a comprehensive plan with tech stack selection and timeline.',
      icon: '📋',
    },
    {
      number: 3,
      title: 'Development',
      description: 'Agile development with regular updates and iterative improvements.',
      icon: '⚙️',
    },
    {
      number: 4,
      title: 'Testing',
      description: 'Thorough QA testing, optimization, and security reviews.',
      icon: '✅',
    },
    {
      number: 5,
      title: 'Launch',
      description: 'Deployment to production with monitoring and support setup.',
      icon: '🚀',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Process</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl text-gray-600">How we bring your ideas to life</p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, idx) => (
            <AnimatedSection key={idx} animation="scale" delay={idx * 100}>
              <div className="relative">
                {/* Connecting Line */}
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[140%] h-1 bg-gradient-to-r from-primary to-transparent process-line"
                    style={{ animationDelay: `${idx * 0.2}s` }} 
                  />
                )}

                {/* Step Card */}
                <div 
                  className="bg-white rounded-xl p-6 text-center border-2 border-blue-200 hover:shadow-xl transition-shadow h-full process-step-bounce"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
