"use client";

import { Pricing } from "@/components/ui/pricing-elem";

const demoPlans = [
  {
    name: "QUICK LAUNCH",
    price: "Quick Launch",
    // yearlyPrice: "40",
    // period: "per month",
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
    description: "Perfect for individuals and small projects",
    buttonText: "Get started ",
    href: "https://cal.com/santhosh-perumal-qwqkgl/15min",
    isPopular: false,
  },
  {
    name: "GROWTH (Most Loved)",
    // price: "99",
    // yearlyPrice: "79",
    // period: "per month",
    features: [
   "Up to 5 stunning, polished pages",
  "SEO-powered, lightning-fast speed",
  "Seamless scroll with sleek animations",
  "Deep Google Analytics insights for growth",
  "Engineered to build trust & accelerate growth",
  "Up to 5 expert-crafted revisions",
  "Modern, intuitive user experience designed to amplify your brand impact"
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started",
    href: "https://cal.com/santhosh-perumal-qwqkgl/15min",
    isPopular: true,
  },
  {
    name: "SCALE PRO",
    // price: "299",
    // yearlyPrice: "239",
    // period: "per month",
    features: [
        "Complete website with dynamic CMS/blog",
  "Strategic, high-performance design finely tuned for SEO & speed",
  "Monthly fresh content & VIP priority support",
  "Built to fuel long-term growth",
  "Scalable for ambitious teams",
  "Crafted to wow at every interaction"
    ],
    description: "For large organizations with specific needs",
    buttonText: "Contact Sales",
    href: "https://cal.com/santhosh-perumal-qwqkgl/15min",
    isPopular: false,
  },
];

function PricingBasic() {
  return (
    <div className="h-[800px]  rounded-lg text-white flex justify-center">
      <Pricing 
        plans={demoPlans}
        title="Our Services"
        description="Plans crafted to support your brand from launch to long-term success, with everything you need to grow confidently."
      />
    </div>
  );
}

export { PricingBasic };

