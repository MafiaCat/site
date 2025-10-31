import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Label Confiance - Le premier label qui place l\'humain au cœur de la profession d\'avocat',
  description: 'Valorisez vos engagements, inspirez vos clients. Le Label Confiance accompagne les cabinets d\'avocats dans une démarche éthique et humaine.',
  keywords: 'label confiance, avocats, éthique, bien-être, cabinet avocat, RSE juridique',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
