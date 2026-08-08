import { useState } from "react";
import curtain from "@/assets/curtain-left.png";
import bird from "@/assets/bluebird.png";

/**
 * The entrance: two bluebirds pull the velvet curtains apart to reveal the
 * save-the-date behind them.
 */
export function Curtains({ onOpened }: { onOpened: () => void }) {
  const [open, setOpen] = useState(false);
  const [gone, setGone] = useState(false);

  function pull() {
    if (open) return;
    setOpen(true);
    onOpened();
    window.setTimeout(() => setGone(true), 2600);
  }

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-700 ${
        open ? "pointer-events-none delay-[1900ms] opacity-0" : "opacity-100"
      }`}
    >
      {/* Stage glow behind the curtains */}
      <div className="absolute inset-0 bg-burgundy/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_oklab,var(--cream)_55%,transparent),transparent_62%)]" />

      {/* Left curtain */}
      <img
        src={curtain}
        alt=""
        aria-hidden="true"
        width={768}
        height={1536}
        className={`absolute top-0 left-0 h-full w-[62vw] max-w-[720px] origin-top-left object-cover object-right transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "-translate-x-[105%]" : "translate-x-0"
        }`}
      />
      {/* Right curtain (mirrored) */}
      <img
        src={curtain}
        alt=""
        aria-hidden="true"
        width={768}
        height={1536}
        className={`absolute top-0 right-0 h-full w-[62vw] max-w-[720px] origin-top-right scale-x-[-1] object-cover object-right transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "-translate-x-[105%]" : "translate-x-0"
        }`}
      />

      {/* The two bluebirds doing the pulling */}
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        width={1024}
        height={768}
        className={`absolute top-[26%] left-[26vw] w-[16vw] min-w-[110px] max-w-[210px] scale-x-[-1] drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)] transition-all duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "-translate-x-[70vw] -translate-y-[18vh] opacity-0" : "animate-flutter"
        }`}
      />
      <img
        src={bird}
        alt="A bluebird pulling the curtain open"
        width={1024}
        height={768}
        className={`absolute top-[26%] right-[26vw] w-[16vw] min-w-[110px] max-w-[210px] drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)] transition-all duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          open ? "translate-x-[70vw] -translate-y-[18vh] opacity-0" : "animate-flutter"
        }`}
      />

      {/* Invitation to enter */}
      <div
        className={`absolute inset-x-0 bottom-[16vh] flex flex-col items-center gap-6 px-6 text-center transition-opacity duration-500 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="label-caps text-cream/80">You are cordially summoned</p>
        <button
          onClick={pull}
          className="group cursor-pointer border border-cream/40 bg-cream/10 px-10 py-4 backdrop-blur-sm transition-colors duration-300 hover:bg-cream/20"
        >
          <span className="font-script block text-5xl leading-none text-cream sm:text-6xl">
            Draw the curtains
          </span>
        </button>
      </div>
    </div>
  );
}
