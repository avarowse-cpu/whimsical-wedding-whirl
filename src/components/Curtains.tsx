import { useState } from "react";
import curtainLeft from "@/assets/curtain-panel-left.png";
import curtainRight from "@/assets/curtain-panel-right.png";
import bird from "@/assets/bluebird.png";
import pinkRibbon from "@/assets/Brain-Themed Design Style (1).png";

/**
 * The entrance: paper cut-out curtains animated stop-motion style
 * as two bluebirds tug the ribbon banner open.
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

  const paperEase = "duration-[2600ms] ease-[cubic-bezier(0.33,0,0.2,1)]";

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-500 ${
        open ? "pointer-events-none delay-[2300ms] opacity-0" : "opacity-100"
      }`}
    >
      {/* Scrapbook page background */}
      <div className="absolute inset-0 bg-cream" />
      <div className="absolute inset-0 opacity-[0.5] [background-image:radial-gradient(color-mix(in_oklab,var(--olive)_22%,transparent)_1px,transparent_1px)] [background-size:6px_6px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,color-mix(in_oklab,var(--rose)_45%,transparent),transparent_65%)]" />

      {/* Torn-paper stage card */}
      <div className="absolute inset-[3vmin] border-[6px] border-dashed border-olive/25" />

      {/* Left curtain panel - Covers left edge completely */}
      <img
        src={curtainLeft}
        alt=""
        aria-hidden="true"
        className={`absolute top-0 left-0 h-full w-[58vw] min-w-[50vw] origin-top-left object-cover object-left-top drop-shadow-[6px_10px_0_color-mix(in_oklab,var(--olive)_35%,transparent)] transition-transform ${paperEase} ${
          open ? "-translate-x-[65%] -rotate-6" : "animate-paper-sway"
        }`}
      />

      {/* Right curtain panel - Covers right edge completely */}
      <img
        src={curtainRight}
        alt=""
        aria-hidden="true"
        className={`absolute top-0 right-0 h-full w-[58vw] min-w-[50vw] origin-top-right object-cover object-right-top drop-shadow-[-6px_10px_0_color-mix(in_oklab,var(--olive)_35%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[65%] rotate-6" : "animate-paper-sway-alt"
        }`}
      />

      {/* Left Bluebird */}
      <img
        src={bird}
        alt="A bluebird pulling the left curtain open"
        className={`absolute top-[22%] left-[12vw] z-20 w-[18vw] min-w-[130px] max-w-[220px] -scale-x-100 drop-shadow-[4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "-translate-x-[60vw] -translate-y-[16vh]" : "animate-flutter"
        }`}
      />

      {/* Right Bluebird */}
      <img
        src={bird}
        alt="A bluebird pulling the right curtain open"
        className={`absolute top-[22%] right-[12vw] z-20 w-[18vw] min-w-[130px] max-w-[220px] drop-shadow-[-4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[60vw] -translate-y-[16vh]" : "animate-flutter"
        }`}
      />

      {/* Pink Ribbon Banner Button */}
      <button
        onClick={pull}
        aria-label="Draw the curtains"
        className={`absolute inset-x-0 top-[28%] z-30 mx-auto flex w-[85vw] max-w-2xl cursor-pointer items-center justify-center transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] ${
          open ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <div className="animate-ribbon-hover relative w-full">
          <img
            src={pinkRibbon}
            alt="Pink Ribbon Banner"
            className="w-full object-contain filter drop-shadow-[0_8px_12px_rgba(0,0,0,0.15)]"
          />
          <span className="font-script absolute top-[35%] left-0 right-0 flex items-center justify-center text-[clamp(1.4rem,4vw,2.8rem)] leading-none text-cream drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">
            Draw the curtains
          </span>
        </div>
      </button>
    </div>
  );
}
