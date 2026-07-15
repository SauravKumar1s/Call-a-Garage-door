import { useRef, useState, useCallback, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider({ before, after, beforeLabel = "Before", afterLabel = "After", className = "" }) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const [width, setWidth] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const up = () => (dragging.current = false);
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className={`group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-panel-lg ${className}`}
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        updateFromClientX(e.touches[0].clientX);
      }}
    >
      {/* AFTER (full width base layer) */}
      <img
        src={after}
        alt={afterLabel}
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-paper backdrop-blur-sm">
        {afterLabel}
      </span>

      {/* BEFORE (clipped layer) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <img
          src={before}
          alt={beforeLabel}
          draggable={false}
          style={{ width: width || "100%" }}
          className="h-full max-w-none object-cover"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 bg-paper/90"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red text-paper shadow-lg ring-4 ring-paper/60 transition-transform duration-200 group-hover:scale-110">
          <MoveHorizontal size={18} strokeWidth={2.5} />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
