"use client";

import { getEventStats } from "@/lib/data/events";

export function HeroStatsMarquee() {
  const stats = getEventStats();

  const items = [
    { value: stats.totalEvents, label: "Events hosted" },
    { value: stats.avgAttendance, label: "Attendees per event" },
    { value: stats.cadence, label: "Cadence" },
    { value: `Since ${stats.since}`, label: "Serving Toronto tech" },
  ];

  // Double the items for seamless loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Curved path container */}
      <div className="relative">
        {/* SVG curved path for visual reference - hidden but defines the curve */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,60 Q300,20 600,40 T1200,30"
            fill="none"
            stroke="rgba(27, 75, 90, 0.08)"
            strokeWidth="2"
          />
        </svg>

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-r from-[#B5DFE0] via-[#B5DFE0]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-40 bg-gradient-to-l from-[#F5C9B0] via-[#F5C9B0]/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex animate-marquee">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 lg:px-12"
              style={{
                transform: `translateY(${Math.sin((index / marqueeItems.length) * Math.PI * 2) * 8}px)`,
              }}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl lg:text-3xl font-bold text-teal-dark">
                  {item.value}
                </span>
                <span className="text-sm text-teal-dark/60 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
