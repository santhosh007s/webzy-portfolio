// // import React from "react";
// // import { FeaturesSectionWithHoverEffects } from "@/components/ui/whywebzy-elem";

// // function WhyWebzy() {
// //   return (
// //     <div className="min-h-screen w-full mt-[10%]">
// //       {/* <div className="absolute top-0 left-0 w-full"> */}
// //       <div> 
// //         <h1 > Why Webzy</h1>
// //         </div>
// //         <FeaturesSectionWithHoverEffects />
// //       {/* </div> */}
// //     </div>
// //   );
// // }

// // export { WhyWebzy };

// import React from "react";
// import { FeaturesSectionWithHoverEffects } from "@/components/ui/whywebzy-elem";

// function WhyWebzy() {
//   return (
//     <div className="min-h-screen w-full mt-[10%] px-4 text-white">
//       <div className="text-center mb-12">
//         <h1 className="text-3xl md:text-5xl font-bold">Why Webzy</h1>
//         <p className="text-base md:text-lg mt-4 text-gray-300 max-w-2xl mx-auto">
//           Discover what makes us the ideal partner for your digital journey.
//         </p>
//       </div>
//       <FeaturesSectionWithHoverEffects />
//     </div>
//   );
// }

// export { WhyWebzy };

import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/whywebzy-elem";

function WhyWebzy() {
  return (
    <div className="min-h-screen w-full mt-[5%] md:mt-30 px-4 text-white">
      <div className="text-center mb-12 mt-[-20px] md:mt-0">
        <h1 className="text-3xl md:text-5xl font-bold">Why Webzy</h1>
        <p className="text-base md:text-lg mt-4 text-[#4a8bef] max-w-2xl mx-auto">
          Discover what makes us the ideal partner for your digital journey.
        </p>
      </div>
      <div className="mt-[-70px] md:mt-8">
        <FeaturesSectionWithHoverEffects />
      </div>
    </div>
  );
}

export { WhyWebzy };
