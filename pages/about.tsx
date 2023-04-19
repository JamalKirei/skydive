import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Packages from '@/components/Packages'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
        
      <Footer />
    </>
  )
}
