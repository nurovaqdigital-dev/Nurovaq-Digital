'use client'

import { useState, useEffect, useRef } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  // Track mouse position relative to Hero container
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const badges = [
    { text: '🏆 Top Dev Company', desc: 'Clutch Verified' },
    { text: '🔒 ISO 27001 Certified', desc: 'Secure Codebase' },
    { text: '☁️ AWS Partner', desc: 'Cloud Certified' },
    { text: '▲ Next.js Expert', desc: 'Vercel Partner' },
  ]

  return (
    <section
      id="home"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative section-padding pt-32 md:pt-48 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 overflow-hidden transition-colors duration-300 min-h-screen flex flex-col justify-center"
    >
      {/* Mouse Follow Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(26, 115, 232, 0.15), transparent 80%)`,
        }}
      />

      {/* Floating background decorative circles (Parallax) */}
      <div
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-primary/10 dark:bg-primary/5 blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div
        className="absolute bottom-20 -right-20 w-96 h-96 rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-3xl pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
              <span className="gradient-text">
                Innovation Meets Excellence
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <p className="text-xl md:text-3xl text-gray-600 dark:text-slate-300 mb-8 font-medium">
              Crafting premium software solutions that transform your business
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Welcome to Nurovaq Digital, where we develop cutting-edge applications
              designed to empower businesses and delight users with state-of-the-art tech.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#apps"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-primary/30 hover:bg-blue-700 hover:scale-105 transition-all duration-300"
              >
                Explore Our Apps
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-primary text-primary dark:text-blue-400 dark:border-blue-400 rounded-xl font-bold hover:bg-primary hover:text-white dark:hover:bg-blue-400 dark:hover:text-slate-900 hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>

          {/* Social Proof Badges Grid */}
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="border-t border-slate-200 dark:border-slate-800 pt-10 mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
                Recognized for Quality & Security
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm rounded-xl border border-slate-200/60 dark:border-slate-800/60 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-md dark:hover:shadow-black/30 hover:-translate-y-1 transition-all duration-300 text-center group"
                  >
                    <div className="font-bold text-sm text-slate-800 dark:text-slate-200 mb-0.5 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                      {badge.text}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      {badge.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
