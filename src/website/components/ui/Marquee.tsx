import { ReactNode } from "react";

interface MarqueeProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  direction?: "left" | "right";
  duration?: number;
  offset?: boolean;
  className?: string;
}

const Marquee = <T,>({
  items,
  renderItem,
  direction = "left",
  duration = 42,
  offset = false,
  className = "",
}: MarqueeProps<T>) => {
  const track = [...items, ...items];

  return (
    <div className={`group overflow-hidden ${className}`}>
      <div
        style={{ animationDuration: `${duration}s` }}
        className={`flex w-max gap-5 md:gap-6 group-hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } ${offset ? "pl-[170px] md:pl-[200px]" : ""}`}
      >
        {track.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  );
};

export default Marquee;
