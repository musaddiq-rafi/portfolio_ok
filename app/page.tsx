import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import { main } from 'framer-motion/client'
import React from 'react'

const page = () => {
  return (
    <main className="dark bg-black" >
    <div className="dark">

      <Hero />
      <RecentProjects />
      <Footer />
    </div>
    </main>
  )
}

export default page