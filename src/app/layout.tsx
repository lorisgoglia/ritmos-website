'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './ui/navbar'
import './globals.css'
import { Providers } from './providers'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
      <Router>


        <Navbar/>
        <Providers>{children}</Providers>

        <Routes>
          <Route path="/artists/:artistId" element={<ArtistPage/>} />
          {/* Other routes */}
        </Routes>
        </Router>
        </body>
    </html>
  )
}
