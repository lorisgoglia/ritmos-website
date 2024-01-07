'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './ui/navbar'
import './globals.css'
import { Providers } from './providers'
import InputForm from '../components/inputForm';
import { Flex } from '@chakra-ui/react';



const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Ritmos</title>
      </head>
      <body className={inter.className}>
      <header id="header" role="banner" aria-label="Site header">
      <Navbar/>
        <Providers>{children}</Providers>
       </header>
        </body>
    </html>
  )
}
