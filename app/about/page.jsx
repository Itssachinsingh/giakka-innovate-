import Commitment from '@/components/About/Commitment'
import Impact from '@/components/About/Impact'
import Principle from '@/components/About/Principle'
import Story from '@/components/About/Story'
import Apply from '@/components/Contact/Apply'
import Differences from '@/components/About/Differences'
import Offices from '@/components/Contact/Offices'
import Hero from '@/components/ui/global/Hero'
import React from 'react'
import Discover from '@/components/About/Discover'

const page = () => {
  return (
    <div>
        <Hero img='/images/giakka.png' text='ABOUT US'/>
        <Story/>
        <Impact/>
        <Commitment/>
        <Principle/>
        {/* <Apply text="Ready to discover what's possible when strategic vision meets proven execution?" btnText='Start Your Growth Journey'/> */}
        <Discover/>
      <Differences/>
      <Offices display='block'/>
   </div>
  )
}

export default page