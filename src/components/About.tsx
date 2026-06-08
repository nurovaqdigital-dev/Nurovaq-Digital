import AnimatedSection from './AnimatedSection'

export default function About() {
  const values = [
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'We push boundaries and embrace cutting-edge technologies',
    },
    {
      icon: '🎯',
      title: 'Quality',
      description: 'Excellence is not negotiable in everything we create',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Your success is our success, we grow together',
    },
    {
      icon: '💎',
      title: 'Excellence',
      description: 'Premium solutions crafted with precision and care',
    },
  ]

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Nurovaq Digital</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl text-gray-600">
              Transforming ideas into digital excellence
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation="slide-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-700 mb-4">
                Nurovaq Digital is a forward-thinking software development company founded by Sahaan Kesavan.
                We specialize in creating innovative, scalable applications that solve real-world problems.
              </p>
              <p className="text-gray-700 mb-4">
                As a solo founder-engineer, I wear all the hats—from architecture and development to design and strategy.
                This unique perspective allows me to deliver cohesive, thoughtfully-crafted digital solutions.
              </p>
              <p className="text-gray-700">
                With a focus on user experience, cutting-edge technology, and sustainable growth,
                we're committed to being your trusted technology partner.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">
                To empower businesses through innovative software solutions that are:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span className="text-gray-700"><strong>Intuitive:</strong> User-centric design at every step</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span className="text-gray-700"><strong>Scalable:</strong> Built to grow with your business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span className="text-gray-700"><strong>Secure:</strong> Enterprise-grade security standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">→</span>
                  <span className="text-gray-700"><strong>Sustainable:</strong> Built to last and evolve</span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <div>
          <AnimatedSection animation="fade-up">
            <h3 className="text-2xl font-bold mb-8 text-center">Our Core Values</h3>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <AnimatedSection
                key={idx}
                animation="scale"
                delay={idx * 100}
              >
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">{value.icon}</div>
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
