import AnimatedSection from './AnimatedSection'

export default function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sahaan Kesavan',
      role: 'Founder & Full-Stack Engineer',
      bio: 'Passionate developer and entrepreneur crafting innovative software solutions from concept to deployment.',
      expertise: ['Full-Stack Development', 'System Architecture', 'UI/UX Design'],
    },
  ]

  return (
    <section id="team" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Meet The Founder</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl text-gray-600">
              Visionary engineer building the future of digital solutions
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {teamMembers.map((member, idx) => (
            <AnimatedSection
              key={member.id}
              animation="scale"
              delay={idx * 150}
            >
              <div className="group relative">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main card */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 float-card glow-card shine-effect">
                  {/* Header gradient */}
                  <div className="bg-gradient-to-br from-primary via-blue-600 to-blue-700 h-32 relative">
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-2 right-2 text-4xl">⭐</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-4">
                      <span className="inline-block bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                        Founder & CEO
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-1 gradient-text">{member.name}</h3>
                    <p className="text-primary font-semibold text-lg mb-4">{member.role}</p>
                    <p className="text-gray-600 mb-6 leading-relaxed">{member.bio}</p>

                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Core Expertise:</p>
                      <div className="flex flex-wrap gap-3">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="text-sm bg-gradient-to-r from-blue-50 to-indigo-50 text-primary px-4 py-2 rounded-lg font-semibold border border-primary/20 hover:border-primary/50 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
