
// "use client";

// import { buttonVariants } from "@/components/ui/button1";
// import { useMediaQuery } from "@/components/lib/query";
// import { cn } from "@/components/lib/utils";
// import { motion } from "framer-motion";
// import { Check, Star } from "lucide-react";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import confetti from "canvas-confetti";

// interface PricingPlan {
//   name: string;
//   // price: string;
//   // yearlyPrice: string;
//   period: string;
//   features: string[];
//   description: string;
//   buttonText: string;
//   href: string;
//   isPopular: boolean;
// }

// interface PricingProps {
//   plans: PricingPlan[];
//   title?: string;
//   description?: string;
// }

// export function Pricing({
//   plans,
//   title = "Simple, Transparent Pricing",
//   description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
// }: PricingProps) {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   const switchRef = useRef<HTMLButtonElement>(null);

//   const handleToggle = (checked: boolean) => {
//     setIsMonthly(!checked);
//     if (checked && switchRef.current) {
//       const rect = switchRef.current.getBoundingClientRect();
//       const x = rect.left + rect.width / 2;
//       const y = rect.top + rect.height / 2;

//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: {
//           x: x / window.innerWidth,
//           y: y / window.innerHeight,
//         },
//         colors: [
//           "hsl(var(--primary))",
//           "hsl(var(--accent))",
//           "hsl(var(--secondary))",
//           "hsl(var(--muted))",
//         ],
//         ticks: 200,
//         gravity: 1.2,
//         decay: 0.94,
//         startVelocity: 30,
//         shapes: ["circle"],
//       });
//     }
//   };

//   return (
//     <div className="container py-20"> {/* ✅ No background here */}
//       <div className="text-center space-y-4 mb-12 ">
//         <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
//           {title}
//         </h2>
//         <p className="text-gray-400 text-sm whitespace-pre-line">{description}</p>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
//         {plans.map((plan, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 50, opacity: 1 }}
//             whileInView={
//               isDesktop
//                 ? {
//                     y: plan.isPopular ? -20 : 0,
//                     opacity: 1,
//                     x: index === 2 ? -30 : index === 0 ? 30 : 0,
//                     scale: index === 0 || index === 2 ? 0.94 : 1.0,
//                   }
//                 : {}
//             }
//             viewport={{ once: true }}
//             transition={{
//               duration: 1.6,
//               type: "spring",
//               stiffness: 100,
//               damping: 30,
//               delay: 0.4,
//               opacity: { duration: 0.5 },
//             }}
//             className={cn(
//               "rounded-2xl border border-border p-6 text-center lg:flex lg:flex-col lg:justify-center relative bg-[#1A1A1A]",
//               plan.isPopular ? "border-white border-2" : "border-border",
//               "flex flex-col",
//               !plan.isPopular && "mt-5",
//               isDesktop && (index === 0 || index === 2)
//                 ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
//                 : isDesktop
//                 ? "z-10"
//                 : "",
//               isDesktop && index === 0 && "origin-right",
//               isDesktop && index === 2 && "origin-left"
//             )}
//           >
//             {plan.isPopular && (
//               <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
//                 <Star className="text-primary-foreground h-4 w-4 fill-current" />
//                 <span className="text-primary-foreground ml-1 font-sans font-semibold">
//                   Popular
//                 </span>
//               </div>
//             )}
//             <div className="flex-1 flex flex-col">
//               <p className="text-2xl font-semibold text-white">
//                 {plan.name}
//               </p>

//               <ul className="mt-6 gap-2 flex flex-col text-gray-300">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
//                     <span className="text-left">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               <hr className="w-full my-4 border-gray-700" />

//               <Link
//                 href={plan.href}
//                 className="w-full rounded-md px-4 py-2 text-[#09090B] border-1 bg-white text-center text-lg font-semibold transition duration-300 hover:bg-black hover:text-white"
//               >
//                 {plan.buttonText}
//               </Link>
//               <p className="mt-6 text-xs text-gray-400">{plan.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { buttonVariants } from "@/components/ui/button1";
// import { useMediaQuery } from "@/components/lib/query";
// import { cn } from "@/components/lib/utils";
// import { motion } from "framer-motion";
// import { Check, Star } from "lucide-react";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import confetti from "canvas-confetti";

// interface PricingPlan {
//   name: string;
//   period: string;
//   features: string[];
//   description: string;
//   buttonText: string;
//   href: string;
//   isPopular: boolean;
// }

// interface PricingProps {
//   plans: PricingPlan[];
//   title?: string;
//   description?: string;
// }

// export function Pricing({
//   plans,
//   title = "Simple, Transparent Pricing",
//   description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
// }: PricingProps) {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   const switchRef = useRef<HTMLButtonElement>(null);

//   const handleToggle = (checked: boolean) => {
//     setIsMonthly(!checked);
//     if (checked && switchRef.current) {
//       const rect = switchRef.current.getBoundingClientRect();
//       const x = rect.left + rect.width / 2;
//       const y = rect.top + rect.height / 2;

//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: {
//           x: x / window.innerWidth,
//           y: y / window.innerHeight,
//         },
//         colors: [
//           "hsl(var(--primary))",
//           "hsl(var(--accent))",
//           "hsl(var(--secondary))",
//           "hsl(var(--muted))",
//         ],
//         ticks: 200,
//         gravity: 1.2,
//         decay: 0.94,
//         startVelocity: 30,
//         shapes: ["circle"],
//       });
//     }
//   };

//   return (
//     <div className="container py-20">
//       <div className="text-center space-y-4 mb-12">
//         <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
//           {title}
//         </h2>
//         <p className="text-gray-400 text-sm whitespace-pre-line">
//           {description}
//         </p>
//       </div>

//       <div className="flex flex-col md:grid md:grid-cols-3 gap-4 items-center md:items-stretch">
//         {plans.map((plan, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 50, opacity: 1 }}
//             whileInView={
//               isDesktop
//                 ? {
//                     y: plan.isPopular ? -20 : 0,
//                     opacity: 1,
//                     x: index === 2 ? -30 : index === 0 ? 30 : 0,
//                     scale: index === 0 || index === 2 ? 0.94 : 1.0,
//                   }
//                 : {}
//             }
//             viewport={{ once: true }}
//             transition={{
//               duration: 1.6,
//               type: "spring",
//               stiffness: 100,
//               damping: 30,
//               delay: 0.4,
//               opacity: { duration: 0.5 },
//             }}
//             className={cn(
//               "rounded-2xl border border-border p-5 text-center bg-[#1A1A1A] flex flex-col justify-between",
//               plan.isPopular ? "border-white border-2" : "border-border",
//               "w-full max-w-[300px] md:max-w-none", // responsive width
//               "mx-auto md:mx-0", // center on mobile
//               isDesktop && (index === 0 || index === 2)
//                 ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
//                 : isDesktop
//                 ? "z-10"
//                 : "",
//               isDesktop && index === 0 && "origin-right",
//               isDesktop && index === 2 && "origin-left"
//             )}
//           >
//             {plan.isPopular && (
//               <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
//                 <Star className="text-primary-foreground h-4 w-4 fill-current" />
//                 <span className="text-primary-foreground ml-1 font-sans font-semibold">
//                   Popular
//                 </span>
//               </div>
//             )}
//             <div className="flex-1 flex flex-col">
//               <p className="text-2xl font-semibold text-white">{plan.name}</p>
//               <ul className="mt-6 gap-2 flex flex-col text-gray-300">
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-start gap-2">
//                     <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
//                     <span className="text-left">{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//               <hr className="w-full my-4 border-gray-700" />
//               <Link
//                 href={plan.href}
//                 className="w-full rounded-md px-4 py-2 text-[#09090B] bg-white text-center text-lg font-semibold transition duration-300 hover:bg-black hover:text-white"
//               >
//                 {plan.buttonText}
//               </Link>
//               <p className="mt-6 text-xs text-gray-400">{plan.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// "use client";

// import { buttonVariants } from "@/components/ui/button1";
// import { useMediaQuery } from "@/components/lib/query";
// import { cn } from "@/components/lib/utils";
// import { motion } from "framer-motion";
// import { Check, Star } from "lucide-react";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import confetti from "canvas-confetti";

// interface PricingPlan {
//   name: string;
//   period?: string;
//   features: string[];
//   shortFeatures?: string[];
//   description: string;
//   buttonText: string;
//   href: string;
//   isPopular: boolean;
// }

// interface PricingProps {
//   plans: PricingPlan[];
//   title?: string;
//   description?: string;
// }

// export function Pricing({
//   plans,
//   title = "Simple, Transparent Pricing",
//   description =
//     "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
// }: PricingProps) {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   const switchRef = useRef<HTMLButtonElement>(null);

//   const handleToggle = (checked: boolean) => {
//     setIsMonthly(!checked);
//     if (checked && switchRef.current) {
//       const rect = switchRef.current.getBoundingClientRect();
//       const x = rect.left + rect.width / 2;
//       const y = rect.top + rect.height / 2;

//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: {
//           x: x / window.innerWidth,
//           y: y / window.innerHeight,
//         },
//         colors: [
//           "hsl(var(--primary))",
//           "hsl(var(--accent))",
//           "hsl(var(--secondary))",
//           "hsl(var(--muted))",
//         ],
//         ticks: 200,
//         gravity: 1.2,
//         decay: 0.94,
//         startVelocity: 30,
//         shapes: ["circle"],
//       });
//     }
//   };

//   return (
//     <div className="container py-20">
//       <div className="text-center space-y-4 mb-12">
//         <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
//           {title}
//         </h2>
//         <p className="text-gray-400 text-sm whitespace-pre-line">
//           {description}
//         </p>
//       </div>

//       <div className="flex flex-col md:grid md:grid-cols-3 gap-4 items-center md:items-stretch">
//         {plans.map((plan, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 50, opacity: 1 }}
//             whileInView={
//               isDesktop
//                 ? {
//                     y: plan.isPopular ? -20 : 0,
//                     opacity: 1,
//                     x: index === 2 ? -30 : index === 0 ? 30 : 0,
//                     scale: index === 0 || index === 2 ? 0.94 : 1.0,
//                   }
//                 : {}
//             }
//             viewport={{ once: true }}
//             transition={{
//               duration: 1.6,
//               type: "spring",
//               stiffness: 100,
//               damping: 30,
//               delay: 0.4,
//               opacity: { duration: 0.5 },
//             }}
//             className={cn(
//               "rounded-2xl border border-border p-5 text-center bg-[#1A1A1A] flex flex-col justify-between",
//               plan.isPopular ? "border-white border-2" : "border-border",
//               "w-full max-w-[300px] md:max-w-none",
//               "mx-auto md:mx-0",
//               isDesktop && (index === 0 || index === 2)
//                 ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
//                 : isDesktop
//                 ? "z-10"
//                 : "",
//               isDesktop && index === 0 && "origin-right",
//               isDesktop && index === 2 && "origin-left"
//             )}
//           >
//             {plan.isPopular && (
//               <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
//                 <Star className="text-primary-foreground h-4 w-4 fill-current" />
//                 <span className="text-primary-foreground ml-1 font-sans font-semibold">
//                   Popular
//                 </span>
//               </div>
//             )}
//             <div className="flex-1 flex flex-col">
//               <p className="md:text-2xl text-md font-semibold text-white">{plan.name}</p>
//               <ul className="mt-6 gap-2 flex flex-col text-gray-300">
//                 {/* Desktop features */}
//                 <div className="hidden md:block">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-2 ">
//                       <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
//                       <span className="text-left">{feature}</span>
//                     </li>
//                   ))}
//                 </div>

//                 {/* Mobile features */}
//                 <div className="block md:hidden">
//                   {(plan.shortFeatures || plan.features).map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-2">
//                       <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
//                       <span className="text-left text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </div>
//               </ul>
//               <hr className="w-full my-4 border-gray-700" />
//               <Link
//                 href={plan.href}
//                 className="w-full rounded-md px-4 py-2 text-[#09090B] bg-white text-center text-lg font-semibold transition duration-300 hover:bg-black hover:text-white"
//               >
//                 {plan.buttonText}
//               </Link>
//               <p className="mt-6 text-xs text-gray-400">{plan.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { cn } from "@/components/lib/utils";
// import { motion } from "framer-motion";
// import { Check, Star } from "lucide-react";
// import Link from "next/link";
// import { useState, useRef } from "react";
// import confetti from "canvas-confetti";

// interface PricingPlan {
//   name: string;
//   shortFeatures: string[];
//   description: string;
//   buttonText: string;
//   href: string;
//   isPopular: boolean;
// }

// interface PricingProps {
//   plans: PricingPlan[];
//   title?: string;
//   description?: string;
// }

// export function Pricing({
//   plans,
//   title = "Simple, Transparent Pricing",
//   description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
// }: 
// PricingProps) {
//   const [isMonthly, setIsMonthly] = useState(true);
//   const isDesktop = window.matchMedia("(min-width: 768px)").matches; // same as useMediaQuery hook before
//   const switchRef = useRef<HTMLButtonElement>(null);

//   const handleToggle = (checked: boolean) => {
//     setIsMonthly(!checked);
//     if (checked && switchRef.current) {
//       const rect = switchRef.current.getBoundingClientRect();
//       const x = rect.left + rect.width / 2;
//       const y = rect.top + rect.height / 2;

//       confetti({
//         particleCount: 50,
//         spread: 60,
//         origin: {
//           x: x / window.innerWidth,
//           y: y / window.innerHeight,
//         },
//         colors: [
//           "hsl(var(--primary))",
//           "hsl(var(--accent))",
//           "hsl(var(--secondary))",
//           "hsl(var(--muted))",
//         ],
//         ticks: 200,
//         gravity: 1.2,
//         decay: 0.94,
//         startVelocity: 30,
//         shapes: ["circle"],
//       });
//     }
//   };

//   return (
//    <div className="container py-20">
//   <div className="text-center space-y-4 mb-12">
//     <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">
//       {title}
//     </h2>
//     <p className="text-gray-400 md:text-lg text-sm whitespace-pre-line">
//       {description}
//     </p>
//   </div>

//   <div className="flex flex-col gap-4 items-center  md:mt-0 md:grid md:grid-cols-3 md:items-stretch">
//     {plans.map((plan, index) => (
//       <motion.div
//         key={index}
//         initial={{ y: 50, opacity: 1 }}
//         whileInView={
//           isDesktop
//             ? {
//                 y: plan.isPopular ? -20 : 0,
//                 opacity: 1,
//                 x: index === 2 ? -30 : index === 0 ? 30 : 0,
//                 scale: index === 0 || index === 2 ? 0.94 : 1.0,
//               }
//             : {}
//         }
//         viewport={{ once: true }}
//         transition={{
//           duration: 1.6,
//           type: "spring",
//           stiffness: 100,
//           damping: 30,
//           delay: 0.4,
//           opacity: { duration: 0.5 },
//         }}
//         className={cn(
//           "relative rounded-2xl border border-border p-5 text-center bg-[#1A1A1A] flex flex-col justify-between",
//           plan.isPopular ? "border-white border-2" : "border-border",
//           "w-full max-w-[320px] md:max-w-none",
//           "mx-auto md:mx-0",
//           isDesktop && (index === 0 || index === 2)
//             ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
//             : isDesktop
//             ? "z-10"
//             : "",
//           isDesktop && index === 0 && "origin-right",
//           isDesktop && index === 2 && "origin-left"
//         )}
//       >
//         {plan.isPopular && (
//           <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
//             <Star className="text-primary-foreground h-4 w-4 fill-current" />
//             <span className="text-primary-foreground ml-1 font-sans text-sm md:text-lg">
//               Popular
//             </span>
//           </div>
//         )}

//         <div className="flex-1 flex flex-col">
//           <p className="text-2xl font-semibold text-white">{plan.name}</p>
//           <ul className="mt-6 gap-4 flex flex-col text-gray-300 items-start text-left">
//             {plan.shortFeatures.map((feature, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <Check className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//           <hr className="w-full my-4 border-gray-700" />
//           <Link
//             href={plan.href}
//             className="w-full rounded-md px-4 py-2 text-[#09090B] bg-white text-center text-lg font-semibold transition duration-300 hover:bg-black hover:text-white"
//           >
//             {plan.buttonText}
//           </Link>
//           <p className="mt-6 text-xs text-gray-400">{plan.description}</p>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </div>

//   );
// }

"use client";

import { cn } from "@/components/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";

interface PricingPlan {
  name: string;
  shortFeatures: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

// Reusable hook to detect media query match safely in React (client-side only)
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20 md:mt-15">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white mt-[-5%] md:mt-20" >
          {title}
        </h2>
      <p className="text-[#4a8bef] md:text-lg text-sm whitespace-pre-line max-w-sm md:max-w-5xl mx-auto">
  {description}
</p>

      </div>

      <div className="flex flex-col gap-4 items-center md:mt-10 relative -translate-y-15  md:translate-y-6 md:grid md:grid-cols-3 md:items-stretch">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              "relative rounded-2xl border border-border p-5 text-center bg-[#1A1A1A] flex flex-col justify-between",
              plan.isPopular ? "border-white border-2" : "border-border",
              "w-full max-w-[340px] md:max-w-none",
              "mx-auto md:mx-0",
              isDesktop && (index === 0 || index === 2)
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : isDesktop
                ? "z-10"
                : "",
              isDesktop && index === 0 && "origin-right",
              isDesktop && index === 2 && "origin-left"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-primary py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-primary-foreground h-4 w-4 fill-current" />
                <span className="text-primary-foreground ml-1 font-sans text-sm md:text-lg">
                  Popular
                </span>
              </div>
            )}

            <div className="flex-1 flex flex-col">
              <p className="text-2xl font-semibold text-white">{plan.name}</p>
              <ul className="mt-6 gap-4 flex flex-col text-gray-300 items-start text-left">
                {plan.shortFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <hr className="w-full my-4 border-gray-700" />
              <Link
                href={plan.href}
                className="w-full rounded-md px-4 py-2 text-[#09090B] bg-white text-center text-lg font-semibold transition duration-300 hover:bg-black hover:text-white"
              >
                {plan.buttonText}
              </Link>
              <p className="mt-6 text-xs text-gray-400">{plan.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
