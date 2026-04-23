import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hungary Tennis — Nagy tenisz Magyarországon',
    template: '%s | Hungary Tennis',
  },
  description:
    'Minden a magyarországi nagy teniszről: történelem, technika, szabályok, tornák és felszerelések. Információs forrás — hungarytennis.com',
  keywords: ['tenisz', 'Magyarország', 'Hungary tennis', 'tenisztornák', 'tenisztechnika'],
  metadataBase: new URL('https://hungarytennis.com'),
  openGraph: {
    siteName: 'Hungary Tennis',
    locale: 'hu_HU',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#1a3d2b',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
