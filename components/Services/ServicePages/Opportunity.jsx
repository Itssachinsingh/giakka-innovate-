// import MaxWidthWrapper from '@/components/ui/global/max-width-wrapper'
// import React from 'react'

// const Opportunity = ({ data }) => {
//   return (
//     <>
//       <MaxWidthWrapper>
//         <div className="text-center">
//           <h2 className="text-[20px] font-bold text-secondary">
//             —<span className="mx-3">{data.heading.sub}</span>—
//           </h2>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] mt-10 md:mt-3 font-bold mb-4 leading-normal lg:leading-25">
//             {data.heading.title}
//           </h1>
//         </div>
//       </MaxWidthWrapper>

//       <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#9BC8F5] px-6 py-16">
//         <div className="max-w-6xl w-full flex flex-col justify-center items-center sm:justify-start ">

//           {/* Top Stats */}
//           <div className="mr-0 md:mr-15 lg:mr-27 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//             {data.topStats.map((stat, i) => (
//               <div key={i} className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[350px] bg-white p-8 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
//                 <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] font-bold text-[#0575E6]">{stat.number}</p>
//                 <p className="mt-3 text-gray-700 text-[12px] sm:text-[20px]">{stat.desc}</p>
//               </div>
//             ))}
//           </div>

//           {/* Bottom Section */}
//           <div className="md:ml-12 lg:ml-30 grid grid-cols-1 md:grid-cols-3 gap-6">
//             {data.bottomStats.map((stat, i) => (
//               <div key={i} className="max-w-[320px] h-[200px] md:h-[600px] lg:h-[350px] xl:h-[350px] bg-white p-8 flex flex-col items-start gap-3 hover:-translate-y-5 transition-all ease-in-out duration-200" style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}>
//                 {stat.icon && <img src={stat.icon} alt="icon" className="text-[20px] sm:w-[40px] md:w-[60px] lg:w-[84px]" />}
//                 <p className="text-[12px] sm:text-[20px]">
//                   <span className="font-semibold">{stat.highlight}</span>{" "}
//                   {stat.desc}
//                 </p>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </>
//   );
// };


// export default Opportunity

import MaxWidthWrapper from '@/components/global/max-width-wrapper'
import React from 'react'

// helper function to format number with prefix/suffix
const formatNumber = (num) => {
  if (!num) return null;

  // Currency prefix ($, £)
  if (num.startsWith("$") || num.startsWith("£")) {
    return (
      <>
        <span className="text-[0.5em] align-top mr-1">{num[0]}</span>
        {num.slice(1)}
      </>
    );
  }

  // Percentage suffix
  if (num.endsWith("%")) {
    return (
      <>
        {num.slice(0, -1)}
        <span className="text-[0.5em] align-top ml-1">%</span>
      </>
    );
  }

  // Default
  return num;
};

const Opportunity = ({ data }) => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="text-[20px] font-bold text-secondary">
            —<span className="mx-3">{data.heading.sub}</span>—
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] mt-10 md:mt-3 font-bold mb-4 leading-normal lg:leading-25">
            {data.heading.title}
          </h1>
        </div>
      </MaxWidthWrapper>

      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#9BC8F5] px-6 py-16">
        <div className="max-w-6xl w-full flex flex-col justify-center items-center sm:justify-start ">

          {/* Top Stats */}
          <div className="mr-0 md:mr-15 lg:mr-27 grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {data.topStats.map((stat, i) => (
              <div
                key={i}
                className="h-[200px] md:h-[600px] lg:h-[350px] xl:h-[350px] bg-white p-8 hover:-translate-y-5 transition-all ease-in-out duration-200"
                style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}
              >
                {stat.number && (
                  <>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] font-bold text-[#0575E6]">
                      {formatNumber(stat.number)}
                    </p>
                    <p className="mt-3 text-gray-700 text-[12px] sm:text-[20px]">
                      {stat.desc}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="md:ml-12 lg:ml-30 grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.bottomStats.map((stat, i) => (
              <div
                key={i}
                className="h-[200px] md:h-[600px] lg:h-[350px] xl:h-[350px] bg-white p-8 flex flex-col items-start gap-3 hover:-translate-y-5 transition-all ease-in-out duration-200"
                style={{ boxShadow: "0px 4px 15px 0px #0575E680" }}
              >
                {stat.icon ? (
                  <>
                    <img
                      src={stat.icon}
                      alt="icon"
                      className="text-[20px] sm:w-[40px] md:w-[60px] lg:w-[84px]"
                    />
                    <p className="text-[12px] sm:text-[20px]">
                      <span className="font-semibold">{stat.highlight}</span>{" "}
                      {stat.desc}
                    </p>
                  </>
                ) : stat.number ? (
                  <>
                    <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[84px] font-bold text-[#0575E6]">
                      {formatNumber(stat.number)}
                    </p>
                    <p className="mt-3 text-gray-700 text-[12px] sm:text-[20px]">
                      {stat.desc}
                    </p>
                  </>
                ) : (
                  <p className="text-[12px] sm:text-[20px]">
                    <span className="font-semibold">{stat.highlight}</span>{" "}
                    {stat.desc}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Opportunity;
