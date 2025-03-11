import type { Metadata } from 'next'
import './globals.css'
import Header from "@/components/header";
import React from "react";

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
    <head>
      {/* Add favicon link tags */}
      <link rel="icon" href="/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
    </head>
    <body>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        {children}
        <footer className="border-t border-gray-800 p-4 text-center text-gray-500">
          <p className="text-sm">© {new Date().getFullYear()} EarthSource.ai. All rights reserved.</p>
        </footer>
      </div>
      </body>
    </html>
  )
}
