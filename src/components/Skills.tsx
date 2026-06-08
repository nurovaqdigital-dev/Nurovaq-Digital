'use client'

import AnimatedSection from './AnimatedSection'

export default function Skills() {
  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js/Backend', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Database Design', level: 90 },
    { name: 'Cloud Deployment', level: 87 },
  ]

  const techStack = [
    { icon: '⚛️', name: 'React' },
    { icon: '▲', name: 'Next.js' },
    { icon: '🎨', name: 'Tailwind' },
    { icon: '📘', name: 'TypeScript' },
    { icon: '🟢', name: 'Node.js' },
    { icon: '🐘', name: 'PostgreSQL' },
    { icon: '☁️', name: 'AWS/Vercel' },
    { icon: '🔧', name: 'DevOps' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Expertise</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills Bars */}
          <div>
            <AnimatedSection animation="slide-left">
              <h3 className="text-2xl font-bold mb-8">Core Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-900">{skill.name}</span>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-blue-600 h-full rounded-full skill-bar-wave"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${idx * 0.15}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Tech Stack */}
          <div>
            <AnimatedSection animation="slide-right">
              <h3 className="text-2xl font-bold mb-8">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-4 text-center border-2 border-blue-100 hover:shadow-lg transition-shadow tech-stack-bounce"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <p className="font-semibold text-gray-900">{tech.name}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
