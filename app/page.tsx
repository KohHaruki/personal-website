import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className={`relative`}>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
