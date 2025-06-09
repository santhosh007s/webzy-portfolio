// import { Carousel } from "@/components/ui/mob-port-elem";

// const slides = [
//   { src: "/aura.png", link: "https://auradigitalservices.in/", alt: "Aura Logo" },
//   { src: "/eco.png", link: "https://www.ecoplastinteriors.com/", alt: "Eco Plast Logo" },
//   {
//     src: "/temp4.png",
//     link: "/",
//     alt: "Cooking",
//   },
// ];

// export function MobilePort() {
//   return (
//     <div>
//       <div>
//         <h1>
//           Our Recent works
//         </h1>
//       </div>

//     <div className="relative overflow-hidden w-full h-[420px] py-20">
//       <Carousel slides={slides} slideWidth={300} slideHeight={200} slideGap={16} />
//     </div>
//         </div>

//   );
// }

import { Carousel } from "@/components/ui/mob-port-elem";

const slides = [
  { src: "/aura.png", link: "https://auradigitalservices.in/", alt: "Aura Logo" },
  { src: "/eco.png", link: "https://www.ecoplastinteriors.com/", alt: "Eco Plast Logo" },
  { src: "/temp4.png", link: "/", alt: "Cooking" },
];

export function MobilePort() {
  return (
    <div className="w-full py-16 mt-[-12%]">
      <div className="text-center px-4 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Our Recent Works
        </h2>
        <p className="text-sm md:text-base max-w-xl text-[#4a8bef] mx-auto">
Take a look at some of our recent projects showcasing creativity and quality.</p>
      </div>

      <div className="relative overflow-hidden w-full mt- h-[420px] pt-12">
        <Carousel slides={slides} slideWidth={300} slideHeight={200} slideGap={16} />
      </div>
    </div>
  );
}
