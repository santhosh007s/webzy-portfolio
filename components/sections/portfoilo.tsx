

"use client"

import React from "react"
import HoverExpand from "../ui/port-elem"
import Image from "next/image";

const images = [
  "/aura.png",
  "/eco.png",
  "/temp1.png",
  "/temp2.png",
  "/temp4.png",
]

const links = [
  "https://auradigitalservices.in/",
  "https://www.ecoplastinteriors.com/",
 
]

export function MouseTrailDemo() {
  return (
    <section className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full flex-col items-center justify-center rounded-[24px] border border-black/5 shadow-sm md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px]">
        <article className="relative z-50 mt-20 flex flex-col items-center justify-center">
          <h1 className="max-w-2xl text-center text-5xl text-white font-semibold tracking-tight">
            Our Recent works
          </h1>
        </article>
        <HoverExpand
          images={images}
          links={links}
          initialSelectedIndex={0}
          thumbnailHeight={200}
          maxThumbnails={40}
        />
      </div>
    </section>
  )
}
