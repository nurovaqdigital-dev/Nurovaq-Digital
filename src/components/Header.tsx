'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useDarkMode } from '@/hooks/useDarkMode'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useDarkMode()

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#apps', label: 'Apps' },
    { href: '#about', label: 'About' },
    { href: '#blog', label: 'Blog' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md z-50 transition-colors duration-300">
      <nav className="container-custom flex justify-between items-center py-4">
        <Link href="#home" className="text-2xl font-bold gradient-text">
          Nurovaq Digital
        </Link>

        {/* Desktop Navigation & Dark Mode Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <span className="text-xl text-yellow-400 hover:scale-110 transition-transform block">☀️</span>
            ) : (
              <span className="text-xl text-slate-700 hover:scale-110 transition-transform block">🌙</span>
            )}
          </button>
        </div>

        {/* Mobile Header Right */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-300"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <span className="text-xl text-yellow-400 block">☀️</span>
            ) : (
              <span className="text-xl text-slate-700 block">🌙</span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className={`h-0.5 w-6 bg-gray-900 dark:bg-slate-100 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-6 bg-gray-900 dark:bg-slate-100 transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-gray-900 dark:bg-slate-100 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t dark:border-slate-800 shadow-lg md:hidden transition-colors duration-300">
            <div className="container-custom flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 dark:text-slate-300 hover:text-primary dark:hover:text-white font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
