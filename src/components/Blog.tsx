export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging technologies and trends shaping the web development landscape in 2026.',
      date: 'June 8, 2026',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Building Scalable Applications',
      excerpt: 'Best practices and strategies for architecting applications that grow with your business needs.',
      date: 'June 1, 2026',
      category: 'Development',
    },
    {
      id: 3,
      title: 'User Experience Design Principles',
      excerpt: 'Creating intuitive and delightful user experiences through thoughtful design patterns.',
      date: 'May 25, 2026',
      category: 'Design',
    },
  ]

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Latest Updates & Insights</span>
          </h2>
          <p className="text-xl text-gray-600">
            Stay informed with our latest news and industry insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-br from-primary to-blue-600 h-48"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-primary">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-primary font-semibold hover:underline">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
