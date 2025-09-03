import Hero from '@/components/ui/global/Hero'
import React from 'react'
import Intro from '../../components/ui/global/Intro'
import Service_Cards from '@/components/Services/MainPage/Service-Cards'
import Approach from '@/components/Services/MainPage/Approach'
import Growth from '@/components/Services/MainPage/Growth'
import Book from '@/components/Services/MainPage/Book'

const page = () => {
  return (
    <div>
        <Hero img='/images/services.jpg' text='SERVICES'/>
        <Intro para1="Complete Solutions  for Complex Growth Whether you're" para2='expanding into new markets, commercializing breakthrough research, or building strategic partnerships - we provide the integrated expertise and proven frameworks to accelerate your success at every stage.'/>
        <Service_Cards/>
        <Approach/>
        <Growth/>
        <Book/>
   </div>
  )
}

export default page