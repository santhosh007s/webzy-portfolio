"use client";
import Link from "next/link";
import { TypewriterEffectSmooth } from "@/components/ui/Fcta-elem";
export function Cta() {
  const words = [
    {
      text: "Your Brand",
        className:"text-white"
    },
    {
      text: "Deserves",
        className:"text-white"
    },
    {
      text: "More",
        className:"text-white"
    },
    {
      text: "Than just a",
      className:"text-white"
    },
    {
      text: "Template.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-4">
        <Link href="https://cal.com/santhosh-perumal-qwqkgl/15min" passHref>
          <button className="sm:px-6 sm:py-3 py-2 px-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition">
            Let's build yours
          </button>
        </Link>
        <Link href="/" passHref>
          <button className="sm:px-6 sm:py-3 py-2 px-2 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition">
            Our works
          </button>
        </Link>
      </div>
    </div>
  );
}
