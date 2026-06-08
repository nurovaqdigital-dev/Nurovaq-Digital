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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-xl text-gray-600">
            Talented professionals committed to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-primary to-blue-600 h-32"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-blue-100 text-primary px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
