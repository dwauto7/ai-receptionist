import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Receptionist - Never Miss Customer Calls',
  description: '24/7 AI voice agent for service businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
