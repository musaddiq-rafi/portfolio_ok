import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import InfoGrid from '@/components/InfoGrid'
import React from 'react'
import { Dock } from '@/components/Dock'

const page = () => {
  return (
    <main className="dark bg-black font-extrabold" >
    <div className="dark">
      <Dock />
      <Hero />
      <InfoGrid />
      <RecentProjects />
      <Footer />
    </div>
    </main>
  )
}

export default page