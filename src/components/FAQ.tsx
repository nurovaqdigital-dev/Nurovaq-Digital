'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What technologies do you specialize in?',
      answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and cloud platforms. We choose the best stack for each project.',
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope, but most applications take 2-4 months from start to deployment. We provide detailed timelines during consultation.',
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! We offer maintenance, updates, and support packages after launch to ensure your application runs smoothly.',
    },
    {
      question: 'What is your development process?',
      answer: 'We follow an agile methodology with regular communication, sprint cycles, and iterative improvements based on feedback.',
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! We integrate well with existing teams and can work as individual contributors or lead development efforts.',
    },
  ]

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <AnimatedSection key={idx} animation="slide-up" delay={idx * 50}>
              <div 
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                style={{ animation: `${idx % 2 === 0 ? 'slideInLeft' : 'slideInRight'} 0.6s ease-out forwards` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                  <span className={`text-2xl text-primary transition-transform ${openIndex === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {openIndex === idx && (
                  <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-slate-50 border-t-2 border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
