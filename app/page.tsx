import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import InfoGrid from '@/components/InfoGrid'
import React from 'react'

const page = () => {
  return (
    <main className="dark bg-black font-extrabold" >
    <div className="dark">

      <Hero />
      <InfoGrid />
      <RecentProjects />
      <Footer />
    </div>
    </main>
  )
}

export default page