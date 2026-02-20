"use client";

import Image from "next/image";

export default function LogoWatermark() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Krautermeister watermark"
          width={600}
          height={600}
          className="opacity-[0.05] -z-10"
          priority
          unoptimized
        />
      </div>
    </div>
  );
}
