import Opportunity from '@/components/Services/MarketEntry/Opportunity'
import Intro from '@/components/ui/global/Intro'
import Path from '@/components/ui/global/Path'
import ServicesHero from '@/components/ui/global/SerivecesHero'
import Solution from '@/components/Services/MarketEntry/Solution'
import Growth from '@/components/Services/MainPage/Growth'

import React from 'react'
import ChooseUS from '@/components/Services/MarketEntry/ChooseUs'
import Success from '@/components/Services/MarketEntry/Success'
import NextStep from '@/components/Services/MarketEntry/NextStep'
import Book from '@/components/Services/MainPage/Book'

 const page = () => {
  return (
    <div>
        <ServicesHero  img='/images/market.png' heading='MARKET ENTRY & GROWTH / SCALING' para='Transform Global Expansion from Complex Challenge to Competitive Advantage'/>
        <Path page='Market Entry'/>
        <Intro para1='Navigate international markets with confidence. From initial market ' para2='assessment to sustainable scaling, we provide the integrated expertise to establish, grow, and dominate in your target markets worldwide.'/>
        <Opportunity/>
        <Solution/>
        <ChooseUS/>
        <Success/>
        <Growth/>
        <NextStep/>
        <Book/>
    </div>
  )
}

export default page