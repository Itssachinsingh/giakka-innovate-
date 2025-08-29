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
        <Book/>
        <Details/>
        <Offices/>
        <Apply/>
    </div>
  )
}

export default page