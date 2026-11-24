import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { FavoritesProvider } from '@/lib/favorites'

export const metadata: Metadata = {
  title: { default: 'Sabor Global | Tu pasaporte culinario', template: '%s | Sabor Global' },
  description: 'Explora recetas del mundo, guarda tus favoritas y descubre nuevas ideas para cocinar.',
  applicationName: 'Sabor Global',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className="min-h-screen font-sans antialiased"><FavoritesProvider><Header/><PageTransition>{children}</PageTransition><Footer/></FavoritesProvider></body></html>
}
