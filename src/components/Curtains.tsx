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

      {/* Ribbon banner — click to enter */}
      <button
        onClick={pull}
        aria-label="Draw the curtains"
        className={`absolute inset-x-0 bottom-[3vh] mx-auto flex w-[85vw] max-w-2xl cursor-pointer items-center justify-center transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
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
          {/* Curved text following the ribbon's arc */}
          <svg
            viewBox="0 0 800 100"
            preserveAspectRatio="xMidYMid meet"
            className="absolute top-[40%] left-0 h-[26%] w-full overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <path
                id="ribbonCurve"
                d="M 110 35 Q 400 72 690 35"
                fill="none"
              />
            </defs>
            <text
              className="font-script fill-cream"
              textAnchor="middle"
              dominantBaseline="middle"
              style={{
                fontSize: "48px",
                filter:
                  "drop-shadow(0px 2px 2px color-mix(in oklab, var(--burgundy) 60%, transparent))",
              }}
            >
              <textPath href="#ribbonCurve" startOffset="50%">
                Draw the curtains
              </textPath>
            </text>
          </svg>
        </div>
      </button>
    </div>
  );
}
