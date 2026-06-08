import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AppsShowcase from '@/components/AppsShowcase'
import About from '@/components/About'
import Blog from '@/components/Blog'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AppsShowcase />
      <About />
      <Blog />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
