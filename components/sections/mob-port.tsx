import { Carousel } from "@/components/ui/mob-port-elem";

const slides = [
  { src: "/aura.png", link: "https://auradigitalservices.in/", alt: "Aura Logo" },
  { src: "/eco.png", link: "https://www.ecoplastinteriors.com/", alt: "Eco Plast Logo" },
  {
    src: "/temp4.png",
    link: "https://example.com/neon-nights",
    alt: "Neon Nights",
  },
];

export function MobilePort() {
  return (
    <div className="relative overflow-hidden w-full h-[420px] py-20">
      <Carousel slides={slides} slideWidth={300} slideHeight={200} slideGap={16} />
    </div>
  );
}
