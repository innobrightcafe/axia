import { Inter } from 'next/font/google'
import './ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Baston Project Management',  
    template: '%s | Dashboard', 
  },
  description: 'Invest with the smartest portfolio management company and grow your portfolio', // Description for the dashboard
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
} 
