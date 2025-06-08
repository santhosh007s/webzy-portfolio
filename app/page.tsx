import Hero from "@/components/sections/hero";
import NavBar from "@/components/ui/navbar-elem";
import TestimonialsSection from "@/components/sections/terstisec"
import {Component} from "@/components/sections/faq"
import Contact from "@/components/sections/contactus";
import { Cta } from "@/components/sections/Fcta";
import { PricingBasic } from "@/components/sections/services";
import { DeskPort } from "@/components/sections/portfoilo";
import { Footercomp } from "@/components/sections/footer";
import { WhyWebzy } from "@/components/sections/whywebzy";
import { MobilePort } from "@/components/sections/mob-port";

export default function Home() {
  return (
    // <>
    // <div>
    //   <div>
    //     <NavBar/>
    //   </div>
    //   <Hero/>
    // </div>
    // <div className="bg-black">
    //    <div>
    //         <MouseTrailDemo/>
    //       </div>
    //        <div>
    //         <PricingBasic/>
    //       </div>
    //   <div>
    //   <TestimonialsSection/>
    //       </div>
    //       <div>
    //         <Component/>
    //       </div>
    //       <div>
    //         <Contact/>
    //       </div>
         
         
    //        <div>
    //         <Cta/>
    //       </div>
         
    //       <div>
    //         <Footercomp/>
    //       </div>

    // </div>
    
     
    // </>

<>
  <div className="flex flex-col">
    {/* Header & Hero Section */}
    <NavBar />
    <Hero />
  </div>

  {/* Main Sections with Black Background */}
  <div className="bg-black flex flex-col">
    <WhyWebzy />
    {/* Hide DeskPort on mobile: hidden by default, show from md */}
    <div className="hidden md:block">
      <DeskPort />
    </div>
    {/* Hide MobilePort on desktop: show on mobile, hide from md upwards */}
    <div className="block md:hidden">
      <MobilePort />
    </div>
    <PricingBasic />
    <TestimonialsSection />
    <Component />
    <Contact />
    <Cta />
    <Footercomp />
  </div>
</>

  );
}
