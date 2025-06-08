
"use client";
import React, { useRef } from "react";

interface SlideData {
  src: string;
  link: string;
  alt?: string;
}

interface CarouselProps {
  slides: SlideData[];
  slideWidth?: number;
  slideHeight?: number;
  slideGap?: number;
}

export function Carousel({
  slides,
  slideWidth = 280,
  slideHeight = 400,
  slideGap = 16,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const scrollStart = useRef<number>(0);

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    if (containerRef.current) {
      scrollStart.current = containerRef.current.scrollLeft;
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null || !containerRef.current) return;
    const deltaX = startX.current - e.clientX;
    containerRef.current.scrollLeft = scrollStart.current + deltaX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const totalSlideWidth = slideWidth + slideGap;
    const index = Math.round(scrollLeft / totalSlideWidth);
    containerRef.current.scrollTo({
      left: index * totalSlideWidth,
      behavior: "smooth",
    });
    startX.current = null;
    containerRef.current.releasePointerCapture(e.pointerId);
  };

  const handleClick = (link: string) => {
    if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory touch-pan-x"
      style={{
        scrollBehavior: "smooth",
        gap: `${slideGap}px`,
        paddingLeft: `${slideGap}px`,
        paddingRight: `${slideGap}px`,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => (startX.current = null)}
    >
      {slides.map(({ src, link, alt }, i) => (
        <div
          key={i}
          className="snap-center flex-shrink-0 cursor-pointer select-none rounded-lg shadow-md overflow-hidden"
          style={{
            width: `${slideWidth}px`,
            height: `${slideHeight}px`,
            userSelect: "none",
            backgroundColor: "#1D1F2F",
          }}
          onClick={() => handleClick(link)}
        >
          <img
            src={src}
            alt={alt || `Slide ${i + 1}`}
            draggable={false}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
