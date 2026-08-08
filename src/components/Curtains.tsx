import { useState } from "react";
import curtainLeft from "@/assets/curtain-panel-left.png";
import curtainRight from "@/assets/curtain-panel-right.png";
import bird from "@/assets/bluebird.png";

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
        className={`absolute top-0 left-0 h-[102%] w-[56vw] origin-top-left object-cover object-right drop-shadow-[6px_10px_0_color-mix(in_oklab,var(--olive)_35%,transparent)] transition-transform ${paperEase} ${
          open ? "-translate-x-[62%] -rotate-6" : "animate-paper-sway"
        }`}
      />
      {/* Right cut-out panel */}
      <img
        src={curtainRight}
        alt=""
        aria-hidden="true"
        className={`absolute top-0 right-0 h-[102%] w-[56vw] origin-top-right object-cover object-left drop-shadow-[-6px_10px_0_color-mix(in_oklab,var(--olive)_35%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[62%] rotate-6" : "animate-paper-sway-alt"
        }`}
      />

      {/* The two bluebirds doing the pulling */}
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        className={`absolute top-[24%] left-[22vw] w-[18vw] min-w-[132px] max-w-[260px] drop-shadow-[4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "-scale-x-100 -translate-x-[60vw] -translate-y-[16vh]" : "animate-fly-around-left"
        }`}
      />
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        className={`absolute top-[24%] right-[22vw] w-[18vw] min-w-[132px] max-w-[260px] drop-shadow-[-4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[60vw] -translate-y-[16vh]" : "animate-fly-around-right"
        }`}
      />

      {/* Invitation to enter — a taped paper label */}
      <div
        className={`absolute inset-x-0 bottom-[14vh] flex flex-col items-center gap-5 px-6 text-center transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="label-caps text-olive/80">You are cordially summoned</p>
        <button
          onClick={pull}
          className="group -rotate-2 cursor-pointer border-2 border-olive/40 bg-cream px-9 py-3 shadow-[5px_6px_0_color-mix(in_oklab,var(--olive)_40%,transparent)] transition-transform duration-200 hover:rotate-0 hover:translate-y-[2px]"
        >
          <span className="font-script block text-5xl leading-none text-burgundy sm:text-6xl">
            Draw the curtains
          </span>
        </button>
      </div>
    </div>
  );
}
