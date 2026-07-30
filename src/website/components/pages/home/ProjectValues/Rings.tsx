"use client";

import { forwardRef } from "react";
import clsx from "clsx";

const rings = [
  "w-[580px] h-[580px]",
  "w-[520px] h-[520px]",
  "w-[460px] h-[460px]",
  "w-[400px] h-[400px]",
  "w-[340px] h-[340px]",
];
const Rings = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="relative flex items-center justify-center">
        {rings.map((size, index) => (
          <div
            key={index}
            className={clsx(
              "absolute rounded-full border border-[#D8D2B4]/35",
              size
            )}
          />
        ))}
      </div>
    </div>
  );
});

Rings.displayName = "Rings";

export default Rings;