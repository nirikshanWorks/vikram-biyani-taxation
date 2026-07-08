import { useEffect, useState } from "react";

export function WordRotate({
  words,
  className = "",
  interval = 2200,
}: {
  words: string[];
  className?: string;
  interval?: number;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className="relative inline-grid align-bottom overflow-hidden">
      {words.map((w, idx) => (
        <span
          key={w}
          className={`col-start-1 row-start-1 transition-all duration-500 ease-out ${className}`}
          style={{
            opacity: idx === i ? 1 : 0,
            transform: `translateY(${idx === i ? "0" : idx < i ? "-100%" : "100%"})`,
          }}
          aria-hidden={idx !== i}
        >
          {w}
        </span>
      ))}
      {/* invisible sizer = longest word */}
      <span className={`col-start-1 row-start-1 invisible whitespace-nowrap ${className}`}>
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
    </span>
  );
}
