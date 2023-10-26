import type { Metadata } from 'next'
import { Bangers, Indie_Flower, Inter, Lato, Permanent_Marker, Poiret_One, Righteous, Staatliches, Tilt_Neon } from 'next/font/google'
import './globals.css'
import "react-activity/dist/library.css";


const righteous = Righteous({ weight: '400', subsets: ['latin'], variable: '--font-righteous' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
export const metadata: Metadata = {
  title: 'DeVacas',
  description: 'DeVacas | Tu aliado para cada viaje',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans ${righteous.variable}`}>{children}</body>
    </html>
  )
}
