

"use client";

import { Pricing } from "@/components/ui/services-elem";

const demoPlans = [
  {
    name: "QUICK LAUNCH",
    features: [
      "Sleek, brand-focused design",
      "Lightning-fast, mobile-optimized",
      "Trust-building clean visuals",
      "Designed to convert visitors",
      "Fully responsive everywhere",
      "Quick launch, no delays",
      "Easy, hassle-free updates",
      "Includes 3 expert tweaks"
    ],
    shortFeatures: [
      "Sleek, brand-first design",
      "Ultra-fast & mobile-ready",
      "Clean, trust-boosting visuals",
      "Quick launch, easy updates",
      "Responsive across devices",
      "3 expert tweaks included"
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Get started",
    href: "https://cal.com/santhosh-perumal-qwqkgl/15min",
    isPopular: false,
  },
  {
    name: "GROWTH (Most Loved)",
    features: [
      "Up to 5 stunning, polished pages",
      "SEO-powered, lightning-fast speed",
      "Seamless scroll with sleek animations",
      "Deep Google Analytics insights for growth",
      "Engineered to build trust & accelerate growth",
      "Up to 5 expert-crafted revisions",
      "Modern, intuitive user experience designed to amplify your brand impact"
    ],
    shortFeatures: [
      "Up to 5 modern pages",
      "SEO, speed, animations",
      "Track growth with analytics",
      "Built for trust & impact",
      "Crafted for smooth UX",
      "5 expert revisions included"
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "https://cal.com/santhosh-perumal-qwqkgl/15min",
    isPopular: true,
  },
  {
    name: "SCALE PRO",
    features: [
      "Complete website with dynamic CMS/blog",
      "Strategic, high-performance design finely tuned for SEO & speed",
      "Monthly fresh content & VIP priority support",
      "Built to fuel long-term growth",
      "Scalable for ambitious teams",
      "Crafted to wow at every interaction"
    ],
    shortFeatures: [
      "Full CMS website",
      "Speed + SEO optimized",
      "Monthly content support",
      "Made to grow & scale",
      "Priority VIP assistance",
      "Designed to impress big"
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "https://cal.com/santhosh-perumal-qwqkgl/15min",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div className="md:h-[800px] rounded-lg  text-white flex justify-center mt-[-50%] md:mt-[-15%] ">
      <Pricing
        plans={demoPlans}
        title="Our Services"
        description="Plans crafted to support your brand from launch to long-term success, with everything you need to grow confidently."
      />
    </div>
  );
}

export { PricingBasic };
