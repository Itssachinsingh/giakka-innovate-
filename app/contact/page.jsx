import Apply from '@/components/Contact/Apply'
import Details from '@/components/Contact/Details'
import Hero from '@/components/Contact/Hero'
import Offices from '@/components/Contact/Offices'
import Book from '@/components/landing-page/Book'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero/>
        <Book bg='bg-[#9BC8F5]' text='text-black'/>
        <Details/>
        <Offices display='hidden'/>
        <Apply text='If you’re ready to architect impact at scale, we’re ready for you.' btnText='APPLY NOW'/>
    </div>
  )
}

export default page