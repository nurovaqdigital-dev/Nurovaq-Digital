import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Nurovaq Digital - Premium Software Solutions',
  description: 'Innovative software development company creating cutting-edge applications and digital solutions.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300 min-h-screen">
        {children}
      </body>
    </html>
  )
}
