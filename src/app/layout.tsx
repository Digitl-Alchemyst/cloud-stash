/* eslint-disable react/function-component-definition */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloud Stash | Secure File Storage & Sharing',
  description: 'A web application for securely storing &amp; sharing files.',
  keywords: [],
  openGraph: {
    title:
      'Cloud Stash | Secure File Storage & Sharing',
    description: 'A web application for securely storing &amp; sharing files.',
    images: {
      url: `/logo.png`,
    },
  },
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
