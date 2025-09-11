import Image from 'next/image';
import MaxWidthWrapper from '../global/max-width-wrapper';
const faqs = [
    {
        question: "Integrated Approach",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>One Partner</button>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold ml-4'>Seamless Journey</button>
            </>
        ),
    },
    {
        question: "Global Expertise",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Global Reach</button>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold ml-4'>Local knowledge</button>
            </>
        ),
    },
    {
        question: "Technology-Enabled",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Intelligence amplified by innovation</button>
            </>
        ),
    },
    {
        question: "Speed to Market",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'> Time is your competitive advantage</button>
            </>
        ),

    },
    {
        question: "Outcome-Focused",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'> Success aligned with yours.</button>
            </>
        ),
    },
    {
        question: "Innovation-First",
        answer: (
            <>
                <button className='border-2 border-[#0575E6] text-[#0575E6] text-[16px] px-2 py-1 font-bold'>Tomorrow's solutions, today.</button>
            </>
        ),
    },
];
const Story = () => {
    return (
        <MaxWidthWrapper>
        <div className=" mx-auto">

            <section className="py-16" data-aos="fade-up" id='faq'>
                <div className="mx-auto  flex flex-col md:flex-row justify-start gap-10 md:gap-10 items-stretch">
                    <div className=' w-[100%] md:w-[25%]  h-[420px] overflow-hidden relative '>
                        <Image
                            src='/images/choose-us.jpg'
                            width={300}
                            height={200}
                            className='w-full object-contain object-bottom'
                        />
                    </div>
                    <div className=" w-[100%] md:w-[70%]">
                        <h2 className="text-[20px] font-bold text-secondary text-center sm:text-start">—<span className='mx-3'>OUR STORY</span>—</h2>
                        <h1 className='lg:text-[83px] text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 text-center sm:text-start mt-3 sm:leading-10 lg:leading-25'>BORN FROM A<br /><span className="text-secondary ">SIMPLE OBSERVATION</span></h1>
                        <p className='text-[20px] text-[#000]/54'>The most ambitious businesses face the most complex challenges. Global expansion, technology commercialization, strategic partnerships, and innovation financing are not isolated activities-they're interconnected phases of a single growth journey that demands integrated expertise.</p>
                        <p className='text-[20px] text-[#000]/54'>Today, we're the trusted partner for Research Councils, Innovation Agencies, Universities, Startups, Corporates, Governments, Trade Bodies, and Investors who demand results, not just advice.</p>
                    </div>
                </div>
            </section>
        </div></MaxWidthWrapper>
    )
}

export default Story