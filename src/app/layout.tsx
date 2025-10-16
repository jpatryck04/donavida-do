import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Donavida.do - Donación de Sangre en República Dominicana',
  description: 'Conectamos donantes voluntarios con bancos de sangre en República Dominicana.',
  icons: {
    icon: '/favicon.ico', // referencia desde public
  },
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}