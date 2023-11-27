/* eslint-disable react/function-component-definition */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Header from '@/c/Global/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloud Stash | Secure File Storage & Sharing',
  description: 'A web application for securely storing &amp; sharing files.',
  keywords: [],
  publisher: 'Digital Alchemyst Studios | Alchemy Labs',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`bg-dazure-900 text-cslight-500 ${inter.className}`}>

          <Header />
          {children}

          
          </body>
      </html>
    </ClerkProvider>
  )
}
