'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup Inc',
      text: 'Sahaan delivered an exceptional application that exceeded our expectations. Highly professional and detail-oriented.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Digital Solutions Co',
      text: 'Outstanding work! The team communicated every step and delivered on time. Would definitely recommend.',
      rating: 5,
    },
    {
      name: 'Emma Davis',
      company: 'Business Pro LLC',
      text: 'Best investment we made for our digital transformation. The app is intuitive and scalable.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">What Clients Say</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="scale">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-12 border-2 border-blue-100 card-flip"
              style={{ perspective: '1000px' }}>
              <div className="flex items-center justify-center gap-1 mb-6">
                {Array(current.rating)
                  .fill(0)
                  .map((_, i) => (
                    <span key={i} className="text-2xl">
                      ⭐
                    </span>
                  ))}
              </div>

              <p className="text-xl text-gray-700 mb-6 text-center italic">"{current.text}"</p>

              <div className="text-center mb-6">
                <h4 className="font-bold text-lg">{current.name}</h4>
                <p className="text-gray-600">{current.company}</p>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={prevTestimonial}
                  className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  ← Previous
                </button>
                <button
                  onClick={nextTestimonial}
                  className="px-6 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
