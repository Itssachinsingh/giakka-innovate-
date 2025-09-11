import Image from "next/image";
import MaxWidthWrapper from "../global/max-width-wrapper";

const stakeHolders = [
    { title: 'INNOVATION AGENCIES', img: '/images/stakeholder1.png' },
    { title: 'RESEARCH COUNCILS', img: '/images/stakeholder2.jpg' },
    { title: 'UNIVERSITIES', img: '/images/stakeholder3.jpg' },
    { title: 'STARTUPS', img: '/images/stakeholder4.jpg' },
    { title: 'INVESTORS', img: '/images/stakeholder5.jpg' },
    { title: 'CORPORATES', img: '/images/stakeholder6.jpg' },
    { title: 'GOVERNMENTS', img: '/images/stakeholder8.jpg' },
    { title: 'TRADE BODIES', img: '/images/stakeholder7.png' },

]
const HoverCard = () => {


    return (
        <MaxWidthWrapper>
        <div className="mx-auto">
            <h2 className="text-[20px] font-bold text-secondary text-center sm:text-start">—<span className='mx-3'>OUR STAKEHOLDERS</span>—</h2>
            <h1 className='lg:text-[64px] text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center sm:text-start mt-5 sm:mt-3 leading-8 md:leading-20'>PARTNERING WITH LEADERS WHO <br /> SHAPE THE FUTURE OF INNOVATION </h1>
            <div className=" flex justify-center lg:justify-between items-center  flex-wrap gap-2 sm:gap-6 md:gap-10 lg:gap-5  my-20">
                {stakeHolders.map((item, index) => (
                    <div className="relative w-[300px] h-[400px] overflow-hidden group mb-12" key={index}>
                        {/* Background Image */}
                        <Image
                            fill
                            src={item.img}
                            alt="Card"
                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 "
                        />
                        {/* Dark overlay */}
                        <div className="absolute inset-0  group-hover:bg-black/40 transition-colors duration-500"></div>
                        {/* Bottom Text Box */}
                        <div className="absolute rounded-lg left-3 bottom-3  w-[90%]  h-[66px] backdrop-blur-3xl text-white p-3 transition-all duration-500 group-hover:w-full group-hover:right-0 group-hover:left-0 group-hover:bottom-0 group-hover:h-[118px] group-hover:rounded-none flex flex-col  items-center justify-center">
                            <span className="transition-all duration-500 text-[21px] text-center mt-5 font-bold">
                                {item.title}
                            </span>
                            <p className=" cursor-pointer group-hover:opacity-100 opacity-0 text-md mt-1 text-primary transition-all duration-500">Learn More</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-[#DBEDFF] flex mb-10  gap-10 lg:gap-20  items-stretch">
                <div className="w-5 py-4 bg-[#0575E6]"></div>
                <div className="py-7 ">
                    <p className="text-[22px]">
                        From innovation labs to policy halls, from startup garages to corporate boardrooms, we're the strategic partner that transforms potential into performance.
                    </p>
                </div>
            </div>
        </div>
</MaxWidthWrapper>
    );
};

export default HoverCard;
