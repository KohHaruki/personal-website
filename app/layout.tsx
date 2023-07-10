import './globals.css'
import { Manrope } from 'next/font/google'

import Navigation from './components/Navigation'
import Footer from './components/Footer'
 
const manrope = Manrope({ subsets: ['latin'] })

export const metadata = {
  title: 'Haruki Koh',
  description: 'Haruki Koh\'s personal website (A Computer Science student at The University of Melbourne)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
