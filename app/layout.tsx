import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Animated Fashion Show - YouTube Channel',
  description: 'پروفایل کانال یوتوب فشن شو انیمیشنی - Animated Fashion Show YouTube Profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
