// app/layout.js
import './globals.css' // import Tailwind or global CSS here
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bharti AI Tech | AI Consultancy',
  description: 'Empowering Businesses with Tailored AI Solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Global header or navigation can go here if you want it persistent */}
        {children}
        {/* Global footer can also go here */}
      </body>
    </html>
  )
}
