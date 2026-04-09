import type { Metadata } from 'next'
import '@mantine/core/styles.css'
import './globals.css'
import { AppProviders } from '@/components/app/AppProviders'

export const metadata: Metadata = {
  title: 'Radar de Empleo Tech',
  description: 'Dashboard de plataformas y ofertas IT en espanol'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}
