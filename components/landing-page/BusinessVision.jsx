import { Button } from "@/components/ui/button";
import Image from "next/image";

const BusinessVision = () => {
  return (
    <section className="py-10 sm:py-14 lg:py-20 px-4 sm:px-6 lg:px-20 mx-auto">
      {/* Top Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] mb-6 sm:mb-10 font-bold tracking-tight text-business-dark">
        EMPOWER YOUR
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 items-stretch">
        {/* Left Column - Image with Overlay */}
        <div className="relative w-[100%] lg:w-[70%] h-64 sm:h-80 lg:h-auto flex">
          <Image
            src="/images/business-vision.png"
            alt="Professional business meeting with consultants reviewing strategic plans"
            fill
            className="object-cover"
          />

          {/* Overlay Card */}
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-auto right-6 sm:right-6 bg-black/60 backdrop-blur-sm text-white p-4 sm:p-6 rounded-lg max-w-[80%] sm:max-w-xs">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400">5+</div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Years more of business consulting experiences
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col justify-center w-full space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[90px] font-bold tracking-tight">
            <span className="text-secondary">BUSINESS</span>{" "}
            <span className="text-business-dark">VISION</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-[22px] text-business-gray leading-relaxed max-w-2xl lg:pr-10 mx-auto lg:mx-0">
            At Giakaa Innovate, we accelerate strategic transformation by
            bridging innovation, global capability, and market foresight.
            Guided by our founding principles and seasoned advisory board, we
            empower clients–from growth-stage ventures to global enterprises–
            to enter new markets, commercialize frontier technologies, forge
            impactful partnerships, and influence policy.
          </p>

          <Button
            size="lg"
            className="bg-secondary w-fit hover:bg-secondary/90 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base tracking-wide rounded-none"
          >
            EXPLORE MORE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessVision;
