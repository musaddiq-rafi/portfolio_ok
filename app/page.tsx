import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { RecentProjects } from '@/components/RecentProjects'
import InfoGrid from '@/components/InfoGrid'
import React from 'react'
import { Dock } from '@/components/Dock'
import { ContactMe } from '@/components/ContactMe'
import { Analytics } from "@vercel/analytics/react"

const page = () => {
  return (
    <main className="dark bg-black font-extrabold" >
    <div className="dark">
      <Analytics/>

      {/* <p className='text-4xl text-red-600'> THE WEBSITE IS UNER CONSTRUCTION PLEASE VISIT LATER</p> */}
      <Dock />
      <Hero />
      <InfoGrid />
      <RecentProjects />
      <ContactMe />
      <Footer />
    </div>
    </main>
  )
}

export default page