import AnimationContainer from "@/components/global/animation-container";
import Animationyx from "@/components/global/animationyas";
import { CustomButton } from "@/components/global/custom-button";
import Header from "@/components/global/Header";
import MainCarousel from "../components/landing-page/Main-carousel";
import BusinessVision from "../components/landing-page/BusinessVision";
import Challenges from "../components/landing-page/Challenges";
import Experties from "@/components/landing-page/Experties";
import HoverCard from "@/components/landing-page/StakeHolder";
import Growth from "@/components/landing-page/Growth";
import Choose from "@/components/landing-page/Choose";
import Process from "@/components/landing-page/Process";
import { CaseStudy } from "@/components/landing-page/CaseStudy";
import Insights from "@/components/landing-page/Insights";
import Book from "@/components/landing-page/Book";
import Faq from "@/components/landing-page/Faq";

export default function Home() {
  return (
    <main>
      {/* <div className="flex flex-col py-20 justify-center  items-center gap-2">
        <Animationyx delay={0.1} direction="left">
          <CustomButton href="/">Book a Call</CustomButton>
        </Animationyx>
        <Animationyx delay={0.3} direction="right">
          <CustomButton href="/" variant="secondary">
            Explore More
          </CustomButton>
        </Animationyx>

        <p className="text-primary">This is dummy</p>
        <p className="text-secondary">This is dummy</p>
      </div> */}
   
      <MainCarousel />
      <BusinessVision />
      <Challenges />
      <Experties />
      <HoverCard />
      <Growth  bg='bg-[#000C17]' text='text-white' />
      <Choose/>
      <Process/>
      <CaseStudy/>
      <Insights/>
      <Book bg='bg-[#000C17]' text='text-white'/>
      <Faq/>
 
    </main>
  );
}
