import Image from 'next/image'
import Hero from './components/Hero'
import Navigation from './components/Navigation'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
    </main>
  )
}
