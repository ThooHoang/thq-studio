import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);
  const dot  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ring.current)
        ring.current.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;
      if (dot.current)
        dot.current.style.transform  = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={ring} className="fixed top-0 left-0 z-9999 w-10 h-10 rounded-full border border-white/25 pointer-events-none transition-transform duration-[120ms] ease-out" />
      <div ref={dot}  className="fixed top-0 left-0 z-9999 w-2 h-2 rounded-full bg-white pointer-events-none transition-transform duration-[60ms] ease-out" />
    </>
  );
}