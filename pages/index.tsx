import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import FirstSection from '@/components/firstSection'
import SecondSection from '@/components/SecondSection'
import Packages from '@/components/Packages'
import Testimonnials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <FirstSection />
      <Packages />
      <SecondSection />
      <Testimonnials />
      <Newsletter />
      <Footer />
    </>
  )
}
