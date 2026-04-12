import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WICEN - Plateforme éducative médicale',
  description: 'Ressources éducatives pour les étudiants en médecine au Maroc',
  keywords: ['médecine', 'étudiants', 'maroc', 'cours', 'medical', 'wicen'],
  authors: [{ name: 'WICEN' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'WICEN',
    description: 'Plateforme éducative médicale',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}
