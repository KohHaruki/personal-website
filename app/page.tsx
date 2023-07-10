import Navigation from './components/Navigation'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Manrope } from 'next/font/google'
 
const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${manrope.className} relative`}>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
