import Hero from "@/components/sections/hero";
import NavBar from "@/components/ui/navbar-elem";
import TestimonialsSection from "@/components/sections/terstisec"
import {Component} from "@/components/sections/faq"
import Contact from "@/components/sections/contactus";
import { Cta } from "@/components/sections/Fcta";
import { PricingBasic } from "@/components/sections/services";
import { MouseTrailDemo } from "@/components/sections/portfoilo";
import { Footercomp } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
    <div>
      <div>
        <NavBar/>
      </div>
      <Hero/>
    </div>
    <div className="bg-black">
       <div>
            <MouseTrailDemo/>
          </div>
           <div>
            <PricingBasic/>
          </div>
      <div>
      <TestimonialsSection/>
          </div>
          <div>
            <Component/>
          </div>
          <div>
            <Contact/>
          </div>
         
         
           <div>
            <Cta/>
          </div>
         
          <div>
            <Footercomp/>
          </div>

    </div>
    
     
    </>
  );
}
