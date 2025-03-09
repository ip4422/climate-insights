import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sylvera - Carbon Credit Projects',
  description: 'Browse carbon credit projects data',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <nav className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="font-bold text-xl text-green-800">Sylvera</div>
              <div className="text-sm text-gray-600">Carbon Credit Ratings</div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
