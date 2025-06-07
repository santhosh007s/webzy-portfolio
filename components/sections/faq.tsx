
import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/Faq-elem";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { Plus } from "lucide-react";

const items = [
  {
    id: "1",
    title: "Who is behind Webzy?",
    content:
      "A dedicated creative team focused on building impactful digital experiences for modern businesses.",
  },
  {
    id: "2",
    title: "Do you offer refunds?",
    content:
      "No, we don’t offer refunds as every project is custom-built and time-intensive.",
  },
  {
    id: "3",
    title: "What if I’m not satisfied with the result?",
    content:
      "We offer revisions during the process to ensure the final outcome matches your expectations.",
  },
  {
    id: "4",
    title: "Can I update my website myself after launch?",
    content:
      "Yes, we provide easy-to-manage websites and guide you on how to make updates yourself. For additional updates or major changes, paid support plans are available.",
  },
  {
    id: "5",
    title: "What makes Webzy different from other web design services?",
    content:
      "We prioritize understanding your unique brand and goals to deliver tailored solutions, not just templates.",
  }
]
;
function Component() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4">
      <div className="space-y-4 max-w-[700px] w-full">
        <h2 className="text-center text-white font-bold md:text-5xl lg:text-5xl text-xl">
          FAQ
        </h2>
        <Accordion type="single" collapsible className="w-full" defaultValue="3">
          {items.map((item) => (
            <AccordionItem value={item.id} key={item.id} className="py-2">
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between py-2 text-center text-[15px] font-semibold leading-6 transition-all [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0 [&[data-state=open]>svg]:rotate-180 text-white">
                  {item.title}
                  <Plus
                    size={26}
                    strokeWidth={2}
                    className="shrink-0 opacity-60 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="pb-2 text-center text-muted-foreground">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}


export { Component };
