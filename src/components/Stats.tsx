'use client'

import { useState, useEffect, useRef } from 'react'
import AnimatedSection from './AnimatedSection'

export default function Stats() {
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    satisfaction: 0,
  })

  const statsRef = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
          // Animate counters
          const interval = setInterval(() => {
            setStats((prev) => ({
              projects: prev.projects < 50 ? prev.projects + 2 : 50,
              clients: prev.clients < 30 ? prev.clients + 1 : 30,
              satisfaction: prev.satisfaction < 99 ? prev.satisfaction + 3 : 99,
            }))
          }, 30)

          setTimeout(() => clearInterval(interval), 1000)
        }
      },
      { threshold: 0.3 }
    )

    if (statsRef.current) observer.observe(statsRef.current)
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current)
    }
  }, [inView])

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-blue-600">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8" ref={statsRef}>
          <AnimatedSection animation="fade-up" delay={0}>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2 stats-pulse">{stats.projects}+</div>
              <p className="text-xl opacity-90">Projects Delivered</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2 stats-pulse">{stats.clients}+</div>
              <p className="text-xl opacity-90">Happy Clients</p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center text-white">
              <div className="text-5xl md:text-6xl font-bold mb-2 stats-pulse">{stats.satisfaction}%</div>
              <p className="text-xl opacity-90">Satisfaction Rate</p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
