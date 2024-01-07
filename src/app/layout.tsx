'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './ui/navbar'
import './globals.css'
import { Providers } from './providers'

import ArtistPage from './artist-page/page'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
    
        </body>
    </html>
  )
}
