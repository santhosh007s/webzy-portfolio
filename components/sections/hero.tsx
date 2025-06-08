
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


// import SimpleServices from "@/components/elements/simpser";
// import Arrow from "@/components/svgs/arrow"

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
      
//       {/* UNBREAKABLE CENTER CONTAINER - Triple-layer center alignment */}
//       <div className="relative z-10 w-full max-w-6xl">
//         <div className="flex flex-col items-center justify-center text-center w-full">
//           <div className="flex flex-col items-center justify-center w-full space-y-0">
            
//             {/* Badge Container - Always centered */}
//             <div className="flex items-center justify-center w-full transform translate-y-[-65px] sm:translate-y-[-80px]">
//               <div className="inline-block rounded-full bg-[#1a1a1a] px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm text-white border border-neutral-700">
//                 <span className="inline-block rounded-full bg-[#131316] px-[4px] py-[2px] mr-1 text-xs sm:px-2 sm:py-0 sm:mr-3 sm:text-sm">
//                   🔥
//                 </span>
//                 Webzy studios welcomes you
//               </div>
//             </div>
            
       
//             {/* Heading Container - Always centered */}
//             <div className="flex items-center justify-center w-full transform translate-y-[-32px] sm:translate-y-[-32px]">
//               <h1 className="text-2xl md:text-6xl font-bold leading-tight max-w-4xl text-center mx-auto">
//                 Crafting Digital Masterpieces
//                 <br />
//                 that Speak Your Brand's Story
//               </h1>
//             </div>
            
//             {/* Description Container - Always centered */}
//             <div className="flex items-center justify-center w-full">
//               <div className="text-center flex flex-col items-center justify-center">
//                 <p className="text-gray-400 text-sm leading-relaxed max-w-[90vw] px-4 sm:hidden text-center mx-auto">
//                   We craft stunning websites that don't just look good they build
//                   trust, drive results, and turn visitors into loyal clients.
//                 </p>
//                 {/* For tablet and up */}
//                 <p className="text-gray-400 text-sm sm:text-lg hidden sm:block max-w-[50vw] text-center mx-auto">
//                   We craft stunning websites that don't just look good — they build
//                   trust, drive results, and turn visitors into loyal clients. Whether
//                   you're a startup or a brand ready to scale, we've got your digital
//                   back.
//                 </p>
//               </div>
//             </div>
//                  <div className="hidden sm:block mb:20px" >
//                 <Arrow/>
//             </div>
            
//             {/* Buttons Container - Always centered */}
//             <div className="flex items-center justify-center w-full mt-8">
//               <div className="flex items-center justify-center gap-4 flex-wrap">
//                 <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
//                   Let's Build Your Site
//                 </button>
//                 <button className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
//                   Our works
//                 </button>
//               </div>
//             </div>
            
//             {/* Simple Services Section - Always centered */}
//             <div className="flex items-center justify-center w-full mt-10">
//               <div className="w-full max-w-6xl flex items-center justify-center">
//                 <SimpleServices />
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import SimpleServices from "@/components/elements/simpser";
// import Arrow from "@/components/svgs/arrow"

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
      
//       {/* UNBREAKABLE CENTER CONTAINER - Triple-layer center alignment */}
//       <div className="relative z-10 w-full max-w-6xl">
//         <div className="flex flex-col items-center justify-center text-center w-full">
//           <div className="flex flex-col items-center justify-center w-full space-y-0">
            
//             {/* Badge Container - Always centered */}
//             <div className="flex items-center justify-center w-full transform translate-y-[-65px] sm:translate-y-[-80px]">
//               <div className="inline-block rounded-full bg-[#1a1a1a] px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm text-white border border-neutral-700">
//                 <span className="inline-block rounded-full bg-[#131316] px-[4px] py-[2px] mr-1 text-xs sm:px-2 sm:py-0 sm:mr-3 sm:text-sm">
//                   🔥
//                 </span>
//                 Webzy studios welcomes you
//               </div>
//             </div>
            
//             {/* Heading Container - Always centered */}
//             <div className="flex items-center justify-center w-full transform translate-y-[-32px] sm:translate-y-[-32px]">
//               <h1 className="text-2xl md:text-6xl font-bold leading-tight max-w-4xl text-center mx-auto">
//                 Crafting Digital Masterpieces
//                 <br />
//                 that Speak Your Brand's Story
//               </h1>
//             </div>
            
//             {/* Description Container - Always centered */}
//             <div className="flex items-center justify-center w-full relative">
//               <div className="text-center flex flex-col items-center justify-center">
//                 <p className="text-gray-400 text-sm leading-relaxed max-w-[90vw] px-4 sm:hidden text-center mx-auto">
//                   We craft stunning websites that don't just look good they build
//                   trust, drive results, and turn visitors into loyal clients.
//                 </p>
//                 {/* For tablet and up */}
//                 <p className="text-gray-400 text-sm sm:text-lg hidden sm:block max-w-[50vw] text-center mx-auto">
//                   We craft stunning websites that don't just look good — they build
//                   trust, drive results, and turn visitors into loyal clients. Whether
//                   you're a startup or a brand ready to scale, we've got your digital
//                   back.
//                 </p>
//               </div>
              
//               {/* Arrow positioned to the left of description text */}
//               <div className="hidden sm:block absolute left-85 top-[115px] transform -translate-y-1/2 -translate-x-20">
//                 <Arrow/>
//               </div>
//             </div>
            
//             {/* Buttons Container - Always centered */}
//             <div className="flex items-center justify-center w-full mt-8">
//               <div className="flex items-center justify-center gap-4 flex-wrap">
//                 <button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
//                   Let's Build Yours
//                 </button>
//                 <button className="px-6 py-3 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
//                   Our works
//                 </button>
//               </div>
//             </div>
            
//             {/* Simple Services Section - Always centered */}
//         <div className="flex items-center justify-center w-full">
//               <div className="w-full max-w-6xl flex items-center justify-center">
//                 <SimpleServices />
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import SimpleServices from "@/components/ui/heroani-elem";
import Arrow from "@/components/svgs/arrow"

export default function Hero() {
  return (
<section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
  {/* Grid Pattern Background */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    }}
  />
  
  {/* Black Gradient Overlay */}
  <div className="absolute inset-0 z-5 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-black/100" />
  
  {/* UNBREAKABLE CENTER CONTAINER - Triple-layer center alignment */}
  <div className="relative z-10 w-full max-w-6xl min-h-screen">
    
    {/* Badge Container - INDEPENDENT POSITIONING */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full translate-y-[-65px] sm:translate-y-[-80px] z-30">
      <div className="relative transform translate-y-[175px] sm:translate-y-[260px]">
        <div className="inline-block rounded-full bg-[#1a1a1a] px-2 py-[2px] text-xs sm:px-4 sm:py-1 sm:text-sm text-white border border-neutral-700">
          <span className="inline-block rounded-full bg-[#131316] px-[4px] py-[2px] mr-1 text-xs sm:px-2 sm:py-0 sm:mr-3 sm:text-sm">
            🔥
          </span>
          Webzy studios welcomes you
        </div>
      </div>
    </div>
    
    {/* Desktop/Laptop heading */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 sm:block hidden flex items-center justify-center w-full translate-y-[-110px] z-20">
  <div className="relative transform sm:translate-y-[-120px]">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight w-full text-center mx-auto px-0">
      We Don't Just Build Websites,<br />
      <span className="block text-blue-200">
        We Build Your Digital Legacy
      </span>
    </h1>
  </div>
</div>

{/* Mobile heading */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex sm:hidden items-center justify-center w-full translate-y-[-32px] z-20">
  <div className="relative transform translate-y-[-210px]">
    <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold leading-tight w-full text-center mx-auto px-0">
      We Don't Just Build Websites,
      <span className="block text-blue-200">
       We Build Your Digital Legacy
      </span>
    </h1>
  </div>
</div>


    {/* Description Container - INDEPENDENT POSITIONING */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full z-20">
      <div className="relative transform translate-y-[0px]">
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-gray-400 text-sm leading-relaxed px-0 sm:hidden text-center mx-auto translate-y-[50px]">
            We craft stunning websites that don't just look good they build
            trust, drive results, and turn visitors into loyal clients.
          </p>
          <p className="text-gray-400 text-sm sm:text-xl hidden sm:block max-w-[50vw] text-center mx-auto translate-y-[25px]">
            We craft stunning websites that don't just look good — they build
            trust, drive results, and turn visitors into loyal clients. Whether
            you're a startup or a brand ready to scale, we've got your digital
            back.
          </p>
        </div>
        
        {/* Arrow - INDEPENDENT POSITIONING */}
        <div className="hidden sm:block absolute left-68 top-[198px] transform -translate-y-1/2 -translate-x-20">
          <div className="relative transform translate-y-[0px] translate-x-[0px]">
            <Arrow/>
          </div>
        </div>
      </div>
    </div>
    
    {/* Buttons Container - INDEPENDENT POSITIONING */}
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-full mt-8 z-20">
      <div className="relative transform translate-y-[100px] sm:translate-y-[130px]">
        <div className="flex items-center justify-center gap-4 flex-wrap">
           <Link href="https://cal.com/santhosh-perumal-qwqkgl/15min" passHref>
          <button className="sm:px-6 sm:py-3 py-2 px-2 rounded-md bg-blue-600 hover:bg-blue-900 text-white font-medium transition">
            Let's build yours
          </button>
        </Link>
          <button className="sm:px-6 sm:py-3 py-2 px-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
            Our works
          </button>
        </div>
      </div>
    </div>
    
    {/* Trust Badge */}
    <div className="relative transform sm:translate-y-[800px] translate-y-[580px] flex items-center justify-center">
      <h3 className="text-sm sm:text-lg"> 
        webzy is Trusted by <span className="text-blue-300">10+ brands </span>worldwide
      </h3>
    </div>
    
    {/* Simple Services Section - INDEPENDENT POSITIONING */}
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-full z-20">
      <div className="relative transform sm:translate-y-[-80px] translate-y-[-110px]">
        <div className="w-full max-w-6xl flex items-center justify-center">
          <SimpleServices />
        </div>
      </div>
    </div>
    
  </div>
</section>  
 );
}