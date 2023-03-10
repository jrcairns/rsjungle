import { AnalyticsWrapper } from '@/components/analytics'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className='h-full antialiased'>{children}</body>
      <AnalyticsWrapper />
    </html>
  )
}
