
// import SimpleServices from "@/components/elements/simpser";

// export default function Hero() {
//   return (
//     <section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
//       <div
//         className="absolute inset-0 z-0 pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//           backgroundSize: "32px 32px",
//         }}
//       />

//       <div className="relative z-10 text-center max-w-1xl sm:max-w-5xl">
//         <div
//           className="md:mt-[8%] mt-[-5%] inline-block rounded-full bg-[#1a1a1a] px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm text-white border border-neutral-700">
//           <span
//             className="inline-block rounded-full bg-[#131316] 
//       px-[4px] py-[2px] mr-1 text-xs sm:px-2 sm:py-0 sm:mr-3 sm:text-sm"
//           >
//             🔥
//           </span>
//           Webzy studios welcomes you
//         </div>
//         <div className="mb-6px">
//            <h1 className="text-2xl md:text-6xl font-bold leading-tight mb-8 max-w-4xl text-center">
//           Crafting Digital Masterpieces
//           <br />
//           that Speak Your Brand's Story
//         </h1>
//         </div>

//         <div className="mb-8">

//           <p className="text-gray-400 text-sm leading-relaxed max-w-[90vw] mx-auto px-4 sm:hidden text-center">
//             We craft stunning websites that don’t just look good  they build
//             trust, drive results, and turn visitors into loyal clients.
//           </p>

//           {/* For tablet and up */}
//           <p className="text-gray-400 text-sm sm:text-lg hidden sm:block">
//             We craft stunning websites that don’t just look good — they build
//             trust, drive results, and turn visitors into loyal clients. Whether
//             you’re a startup or a brand ready to scale, we’ve got your digital
//             back.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="mb-10 flex justify-center gap-4 flex-wrap">
//           <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
//             Let’s Build Your Site
//           </button>
//           <button className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
//             Our works
//           </button>
//         </div>

//         {/* Services Tags */}
//         {/* <div className="mb-16 flex flex-wrap justify-center gap-2">
//           {[
//             "UI Design",
//             "UX Design",
//             "Webflow Development",
//             "Social Media Design",
//             "Visual Interaction",
//             "Product Design",
//             "Custom Development",
//           ].map((tag) => (
//             <span
//               key={tag}
//               className="text-sm bg-[#1a1a1a] border border-neutral-700 px-4 py-2 rounded-full text-white"
//             >
//               {tag}
//             </span>
//           ))}
//         </div> */}

//         {/* Simple Services Section */}
//         <div className="sm:w-full sm:max-w-5xl w-full max-w-5xl">
//           <SimpleServices />
//         </div>
//       </div>
//     </section>
//   );
// }


import SimpleServices from "@/components/elements/simpser";
import Arrow from "@/components/svgs/arrow"

export default function Hero() {
  return (
    <section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* UNBREAKABLE CENTER CONTAINER - Triple-layer center alignment */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <div className="flex flex-col items-center justify-center w-full space-y-0">
            
            {/* Badge Container - Always centered */}
            <div className="flex items-center justify-center w-full transform translate-y-[-65px] sm:translate-y-[-80px]">
              <div className="inline-block rounded-full bg-[#1a1a1a] px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm text-white border border-neutral-700">
                <span className="inline-block rounded-full bg-[#131316] px-[4px] py-[2px] mr-1 text-xs sm:px-2 sm:py-0 sm:mr-3 sm:text-sm">
                  🔥
                </span>
                Webzy studios welcomes you
              </div>
            </div>
            
       
            {/* Heading Container - Always centered */}
            <div className="flex items-center justify-center w-full transform translate-y-[-32px] sm:translate-y-[-32px]">
              <h1 className="text-2xl md:text-6xl font-bold leading-tight max-w-4xl text-center mx-auto">
                Crafting Digital Masterpieces
                <br />
                that Speak Your Brand's Story
              </h1>
            </div>
            
            {/* Description Container - Always centered */}
            <div className="flex items-center justify-center w-full">
              <div className="text-center flex flex-col items-center justify-center">
                <p className="text-gray-400 text-sm leading-relaxed max-w-[90vw] px-4 sm:hidden text-center mx-auto">
                  We craft stunning websites that don't just look good they build
                  trust, drive results, and turn visitors into loyal clients.
                </p>
                {/* For tablet and up */}
                <p className="text-gray-400 text-sm sm:text-lg hidden sm:block max-w-[50vw] text-center mx-auto">
                  We craft stunning websites that don't just look good — they build
                  trust, drive results, and turn visitors into loyal clients. Whether
                  you're a startup or a brand ready to scale, we've got your digital
                  back.
                </p>
              </div>
            </div>
                 <div className="hidden sm:block mb:20px" >
                <Arrow/>
            </div>
            
            {/* Buttons Container - Always centered */}
            <div className="flex items-center justify-center w-full mt-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
                  Let's Build Your Site
                </button>
                <button className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
                  Our works
                </button>
              </div>
            </div>
            
            {/* Simple Services Section - Always centered */}
            <div className="flex items-center justify-center w-full mt-10">
              <div className="w-full max-w-6xl flex items-center justify-center">
                <SimpleServices />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}