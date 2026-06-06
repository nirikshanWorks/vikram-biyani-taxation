import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  speed = 40,
}: {
  children: ReactNode;
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
      <div
        className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
