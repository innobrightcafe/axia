import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Baston Project Management Dashboard',
  description: 'Invest with the smartest potfolio managment company and grow your potfolio. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 
