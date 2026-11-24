import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Sabor Global | Tu pasaporte culinario', template: '%s | Sabor Global' },
  description: 'Explora recetas del mundo, guarda tus favoritas y descubre nuevas ideas para cocinar.',
  applicationName: 'Sabor Global',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body className="min-h-screen font-sans antialiased">{children}</body></html>
}
