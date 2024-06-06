import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import '../styles/globals.css'
 
export const metadata: Metadata = {
  title: 'Evento - create events with ❤',
  description: 'We bring events into life',
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