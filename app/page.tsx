// // import Hero from "@/components/sections/hero";
// // import NavBar from "@/components/ui/navbar-elem";
// // import TestimonialsSection from "@/components/sections/terstisec"
// // import {Component} from "@/components/sections/faq"
// // import Contact from "@/components/sections/contactus";
// // import { Cta } from "@/components/sections/Fcta";
// // import { PricingBasic } from "@/components/sections/services";
// // import { DeskPort } from "@/components/sections/portfoilo";
// // import { Footercomp } from "@/components/sections/footer";
// // import { WhyWebzy } from "@/components/sections/whywebzy";
// // import { MobilePort } from "@/components/sections/mob-port";

// // export default function Home() {
// //   return (
   

// // <>
// //   <div className="flex flex-col">
// //     <NavBar />
// //     <Hero />
// //   </div>

// //   <div className="bg-black flex flex-col overflow-hidden">
// //     <WhyWebzy />
// //     <div id="works" >
// //         <div className=" hidden md:block ">
// //       <DeskPort />
// //     </div>
// //     <div className="block md:hidden">
// //       <MobilePort  />
// //     </div>

// //     </div>
  
// //     <PricingBasic id="services" />
// //     <TestimonialsSection />
// //     <Contact id="contact" />
// //     <Cta />
// //     <Footercomp />
// //   </div>
// // </>


// //   );
// // }

// import Head from "next/head";
// import Hero from "@/components/sections/hero";
// import NavBar from "@/components/ui/navbar-elem";
// import TestimonialsSection from "@/components/sections/terstisec";
// // import { Component } from "@/components/sections/faq";
// import Contact from "@/components/sections/contactus";
// import { Cta } from "@/components/sections/Fcta";
// import { PricingBasic } from "@/components/sections/services";
// import { DeskPort } from "@/components/sections/portfoilo";
// import { Footercomp } from "@/components/sections/footer";
// import { FaqComp } from "@/components/sections/faq";
// import { WhyWebzy } from "@/components/sections/whywebzy";
// import { MobilePort } from "@/components/sections/mob-port";

// export default function Home() {
//   return (
//     <>

//       {/* ✅ PAGE SECTIONS */}
//       <div className="flex flex-col">
//         <NavBar />
//         <Hero />
//       </div>

//       <div className="bg-black flex flex-col overflow-hidden">
//         <WhyWebzy />
//         <div id="works">
//           <div className="hidden md:block">
//             <DeskPort />
//           </div>
//           <div className="block md:hidden">
//             <MobilePort />
//           </div>
//         </div>
// <div id="services">
//         <PricingBasic  />
// </div>
//         <TestimonialsSection />
//         <FaqComp/>
//         <div id="contact">
//         <Contact  />

//         </div>
//         <Cta />
//         <Footercomp />
//       </div>
//     </>
//   );
// }


import Head from "next/head";
import Hero from "@/components/sections/hero";
import NavBar from "@/components/ui/navbar-elem";
import TestimonialsSection from "@/components/sections/terstisec";
import Contact from "@/components/sections/contactus";
import { Cta } from "@/components/sections/Fcta";
import { PricingBasic } from "@/components/sections/services";
import { DeskPort } from "@/components/sections/portfoilo";
import { Footercomp } from "@/components/sections/footer";
import { FaqComp } from "@/components/sections/faq";
import { WhyWebzy } from "@/components/sections/whywebzy";
import { MobilePort } from "@/components/sections/mob-port";

export default function Home() {
  return (
    <>
      {/* ✅ Add Google Analytics tag in <Head> */}
      <Head>
        <title>Webzy Studios</title>
        <meta name="description" content="Premium web design and development services by Webzy Studios." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MSLLLB0N8T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MSLLLB0N8T');
            `,
          }}
        />
      </Head>

      {/* ✅ PAGE SECTIONS */}
      <div className="flex flex-col">
        <NavBar />
        <Hero />
      </div>

      <div className="bg-black flex flex-col overflow-hidden">
        <WhyWebzy />
        <div id="works">
          <div className="hidden md:block">
            <DeskPort />
          </div>
          <div className="block md:hidden">
            <MobilePort />
          </div>
        </div>

        <div id="services">
          <PricingBasic />
        </div>

        <TestimonialsSection />
        <FaqComp />

        <div id="contact">
          <Contact />
        </div>

        <Cta />
        <Footercomp />
      </div>
    </>
  );
}
