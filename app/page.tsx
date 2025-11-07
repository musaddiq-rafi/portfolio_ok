import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { RecentProjects } from '@/components/RecentProjects'
import InfoGrid from '@/components/InfoGrid'
import React from 'react'
import { Dock } from '@/components/Dock'
import  ContactMe  from '@/components/ContactMe'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { TimelineDemo } from '@/components/TimelineEducation'
const page = () => {
  return (
    <main className="dark bg-black font-extrabold font-sans" >
    <div className="dark">
      <Analytics/>
      <SpeedInsights/>

      {/* <p className='text-4xl text-red-600'> THE WEBSITE IS UNER CONSTRUCTION PLEASE VISIT LATER</p> */}
      <Dock />
      <Hero />
      <InfoGrid />
      <TimelineDemo/>
      <RecentProjects />
      <ContactMe />
      <Footer />
    </div>
    </main>
  )
}

export default page