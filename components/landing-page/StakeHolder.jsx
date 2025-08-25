import Image from "next/image";

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
        <div className="px-10 flex justify-evenly items-center flex-wrap gap-5  my-30">
            {stakeHolders.map((item, index) => (
                <div className="relative w-[300px] h-[400px] overflow-hidden group mb-10" key={index}>
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
    );
};

export default HoverCard;
