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
   

<>
  <div className="flex flex-col">
    <NavBar />
    <Hero />
  </div>

  {/* Main Sections with Black Background */}
  <div className="bg-black flex flex-col overflow-hidden">
    <WhyWebzy />
    <div id="works" >
        <div className=" hidden md:block ">
      <DeskPort />
    </div>
    <div className="block md:hidden">
      <MobilePort  />
    </div>

    </div>
  
    <PricingBasic id="services" />
    <TestimonialsSection />
    <Contact id="contact" />
    <Cta />
    <Footercomp />
  </div>
</>


  );
}
