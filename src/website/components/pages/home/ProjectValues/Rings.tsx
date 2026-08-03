"use client";

import { forwardRef } from "react";
import clsx from "clsx";

const rings = [
  { size: "w-[580px] h-[580px]", opacity: 0.1 },
  { size: "w-[520px] h-[520px]", opacity: 0.2 },
  { size: "w-[460px] h-[460px]", opacity: 0.3 },
  { size: "w-[400px] h-[400px]", opacity: 0.4 },
  { size: "w-[340px] h-[340px]", opacity: 0.6 },
];
const Rings = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div className="relative flex items-center justify-center">
         {rings.map((ring, index) => (
          <div
            key={index}
            className={clsx(
              "absolute rounded-full border border-[#D8D2B4]",
              ring.size
            )}
            style={{ opacity: ring.opacity }}
          />
        ))}
      </div>
    </div>
  );
});

Rings.displayName = "Rings";

export default Rings;