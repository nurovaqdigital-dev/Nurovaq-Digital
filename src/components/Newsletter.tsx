'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail('')
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-blue-600 newsletter-pulse">
      <div className="container-custom max-w-2xl">
        <div className="text-center text-white">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl mb-8 opacity-90">Get the latest insights on web development and digital innovation</p>
          </AnimatedSection>

          <AnimatedSection animation="slide-up" delay={200}>
            <form onSubmit={handleSubmit} className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            {submitted && (
              <p className="text-green-200 mt-4 font-semibold">✓ Thanks for subscribing!</p>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
