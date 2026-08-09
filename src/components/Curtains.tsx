import { useState } from "react";
import curtainLeft from "@/assets/curtain-panel-left.png";
import curtainRight from "@/assets/curtain-panel-right.png";
import bird from "@/assets/bluebird.png";
import ribbonBanner from "@/assets/ribbon-banner-transparent.png.asset.json";

/**
 * The entrance: paper cut-out curtains, animated stop-motion style (stepped
 * easing, slight paper wobble) as two bluebirds tug them open.
 */
export function Curtains({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  function pull() {
    if (open) return;
    setOpen(true);
    onOpened();
    window.setTimeout(() => setGone(true), 3200);
  }

  if (gone) return null;

  // stop-motion: stepped easing so the paper "snaps" frame to frame
  const paperEase = "duration-[2600ms] ease-[cubic-bezier(0.33,0,0.2,1)]";

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-500 ${
        open ? "pointer-events-none delay-[2300ms] opacity-0" : "opacity-100"
      }`}
    >
      {/* Scrapbook page behind the cut-outs */}
      <div className="absolute inset-0 bg-cream" />
      <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(color-mix(in_oklab,var(--olive)_22%,transparent)_1px,transparent_1px)] [background-size:6px_6px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,color-mix(in_oklab,var(--rose)_45%,transparent),transparent_65%)]" />

      {/* Torn-paper stage card */}
      <div className="absolute inset-[3vmin] border-[6px] border-dashed border-olive/25" />

      {/* Left cut-out panel */}
      <img
        src={curtainLeft}
        alt=""
        aria-hidden="true"
        className={`absolute top-0 left-0 h-full max-h-screen w-[52vw] origin-top-left object-contain object-top drop-shadow-[6px_10px_0_color-mix(in_oklab,var(--olive)_35%,transparent)] transition-transform ${paperEase} ${
          open ? "-translate-x-[62%] -rotate-6" : "animate-paper-sway"
        }`}
      />
      {/* Right cut-out panel */}
      <img
        src={curtainRight}
        alt=""
        aria-hidden="true"
        className={`absolute top-0 right-0 h-full max-h-screen w-[52vw] origin-top-right object-contain object-top drop-shadow-[-6px_10px_0_color-mix(in_oklab,var(--olive)_35%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[62%] rotate-6" : "animate-paper-sway-alt"
        }`}
      />

      {/* The two bluebirds doing the pulling */}
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        className={`absolute top-[6%] left-[18vw] w-[10vw] min-w-[70px] max-w-[120px] -scale-x-100 drop-shadow-[4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "-translate-x-[60vw] -translate-y-[16vh]" : "animate-flutter"
        }`}
      />
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        className={`absolute top-[6%] right-[18vw] w-[10vw] min-w-[70px] max-w-[120px] drop-shadow-[-4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[60vw] -translate-y-[16vh]" : "animate-flutter"
        }`}
      />

      {/* Ribbon banner — click to enter */}
      <button
        onClick={pull}
        aria-label="Draw the curtains"
        className={`absolute inset-x-0 top-[55%] -translate-y-1/2 mx-auto flex w-[70vw] max-w-md cursor-pointer items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="animate-ribbon-hover relative w-full">
          <img
            src={ribbonBanner.url}
            alt=""
            aria-hidden="true"
            className="w-full drop-shadow-[0_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)]"
          />
          <span className="font-script absolute top-[28%] left-0 right-0 flex items-center justify-center text-[clamp(1.2rem,3.5vw,2rem)] leading-none text-cream drop-shadow-[0_2px_2px_color-mix(in_oklab,var(--burgundy)_60%,transparent)]">
            Draw the curtains
          </span>
        </div>
      </button>
    </div>
  );
}
