import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: "--font-cinzel"
});

export const metadata: Metadata = {
  title: 'Celestial Exiles | PVE X5 Conan Exiles Server',
  description: 'Enter the Exiled Lands. A premium PVE experience with 30+ mods, enhanced combat, and endless building possibilities.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} bg-background scroll-smooth`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

