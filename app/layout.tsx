import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EarthSource.ai - Earth data for AI',
  description: 'Earth data for AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
