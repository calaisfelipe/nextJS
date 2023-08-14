import './globals.css'
import { Inter } from 'next/font/google'
import AuthContext from '@/context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix',
  description: 'This is a clone App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <AuthContext>
        {children}
        </AuthContext>
        </body>
    </html>
  )
}
