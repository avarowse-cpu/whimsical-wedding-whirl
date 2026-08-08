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
        className={`absolute top-[24%] left-[24vw] w-[15vw] min-w-[104px] max-w-[190px] -scale-x-100 drop-shadow-[4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "-translate-x-[60vw] -translate-y-[16vh]" : "animate-flutter"
        }`}
      />
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        className={`absolute top-[24%] right-[24vw] w-[15vw] min-w-[104px] max-w-[190px] drop-shadow-[-4px_8px_0_color-mix(in_oklab,var(--olive)_30%,transparent)] transition-transform ${paperEase} ${
          open ? "translate-x-[60vw] -translate-y-[16vh]" : "animate-flutter"
        }`}
      />

      {/* Invitation to enter — engraved cartouche label */}
      <div
        className={`absolute inset-x-0 bottom-[14vh] flex flex-col items-center px-6 text-center transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <button
          onClick={pull}
          className="group relative cursor-pointer px-2 py-2 transition-transform duration-300 hover:scale-[1.03]"
        >
          <svg
            viewBox="0 0 620 190"
            aria-hidden="true"
            className="w-[76vw] max-w-[560px] text-burgundy/85"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {/* inner panel */}
            <path d="M175 62 h270 a14 14 0 0 1 14 14 v38 a14 14 0 0 1 -14 14 H175 a14 14 0 0 1 -14 -14 V76 a14 14 0 0 1 14 -14 z" />
            {/* outer scalloped cartouche */}
            <path d="M161 78 c-14 -18 -34 -30 -58 -26 c-22 4 -34 20 -30 36 c3 13 16 20 27 16 c10 -4 13 -16 6 -22 c-6 -5 -15 -3 -17 4" />
            <path d="M161 112 c-14 18 -34 30 -58 26 c-22 -4 -34 -20 -30 -36" />
            <path d="M103 52 c-24 -6 -46 6 -52 26 c-7 22 8 44 32 48" />
            <path d="M459 78 c14 -18 34 -30 58 -26 c22 4 34 20 30 36 c-3 13 -16 20 -27 16 c-10 -4 -13 -16 -6 -22 c6 -5 15 -3 17 4" />
            <path d="M459 112 c14 18 34 30 58 26 c22 -4 34 -20 30 -36" />
            <path d="M517 52 c24 -6 46 6 52 26 c7 22 -8 44 -32 48" />
            {/* top crest */}
            <path d="M290 62 c4 -14 -6 -22 -16 -20 c-9 2 -12 12 -6 17" />
            <path d="M330 62 c-4 -14 6 -22 16 -20 c9 2 12 12 6 17" />
            <path d="M296 60 c8 -12 20 -12 28 0" />
            <path d="M310 48 c-3 -8 2 -14 8 -13" />
            {/* bottom crest */}
            <path d="M290 128 c4 14 -6 22 -16 20 c-9 -2 -12 -12 -6 -17" />
            <path d="M330 128 c-4 14 6 22 16 20 c9 -2 12 -12 6 -17" />
            <path d="M296 130 c8 12 20 12 28 0" />
            <path d="M310 142 c-3 8 2 14 8 13" />
          </svg>
          <span className="font-display absolute left-[26%] right-[26%] top-[32.5%] flex h-[35%] items-center justify-center whitespace-nowrap text-[clamp(0.7rem,2.1vw,1.15rem)] uppercase tracking-[0.24em] text-burgundy">
            Draw the Curtains
          </span>

        </button>
      </div>

    </div>
  );
}
