import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bluepoint Solutions',
  description: 'AI solutions for businesses and consumers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full'>
      <body className={cn('relative h-full font-sans antialiased bg-background', inter.className)}>      
        <main className='flex-col flex min-h-screen relative'>
          <Navbar />
        <div className=' flex-grow flex-1'>
        {children}
        </div>
        <Footer />
        </main>
        
      </body>
    </html>
  )
}
