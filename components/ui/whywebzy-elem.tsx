import { cn } from "@/components/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Results-Driven Websites",
      description: "We build sites that convert visitors into leads and sales.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Tailored for Your Brand",
      description: "Every design is custom-made to reflect your unique brand.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Fast & Mobile-First",
      description: "Blazing speed and seamless experience on every device.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "SEO-Ready from Day One",
      description: "Optimized to rank and attract your ideal audience.",
      icon: <IconCloud />,
    },
    {
      title: "Conversion-Focused Design",
      description: "Crafted to drive action and increase engagement.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Secure & Scalable Tech",
      description: "Modern stack built for performance, safety, and growth.",
      icon: <IconHelp />,
    },
    {
      title: "Creative Collaboration",
      description: "We work closely with you — like a creative partner.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Strategic Support",
      description: "More than design — we help shape your digital presence.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-900 dark:from-neutral-800 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-900 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 md:mb-4 relative md:z-10 md:left-10 z-10 flex justify-center md:justify-start text-[#4a8bef] dark:text-neutral-400">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-4 md:px-10 text-center md:text-left">
        <div className="hidden md:block absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-blue-200 dark:text-neutral-100">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-300 dark:text-neutral-300 max-w-xs mx-auto md:mx-0 px-4 md:px-10 text-center md:text-left">
        {description}
      </p>
    </div>
  );
};
