'use client'

import { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface AnimatedSectionProps {
  children: ReactNode
  animation?: 'fade-up' | 'slide-left' | 'slide-right' | 'scale'
  className?: string
  delay?: number
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  className = '',
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView()

  const animationClass = {
    'fade-up': 'animate-on-scroll',
    'slide-left': 'animate-on-scroll-left',
    'slide-right': 'animate-on-scroll-right',
    'scale': 'animate-on-scroll-scale',
  }[animation]

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isInView ? 'in-view' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
