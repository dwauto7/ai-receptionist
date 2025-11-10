import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Receptionist - Never Miss Customer Calls',
  description: '24/7 AI voice agent for service businesses. Automated call answering, appointment booking, and SMS reminders.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
