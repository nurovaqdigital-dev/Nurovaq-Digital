import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import AppsShowcase from '@/components/AppsShowcase'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import Team from '@/components/Team'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <AppsShowcase />
      <About />
      <Skills />
      <Process />
      <Testimonials />
      <Pricing />
      <Blog />
      <FAQ />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
