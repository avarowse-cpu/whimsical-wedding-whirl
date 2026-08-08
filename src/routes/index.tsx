import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Curtains } from "@/components/Curtains";
import floralFrame from "@/assets/floral-frame.jpg";
import borderFlowers from "@/assets/border-flowers.jpg";
import bird from "@/assets/bluebird.png";

const COUPLE = "Wren & Julian";
const DATE = "Saturday, the twelfth of September";
const YEAR = "Two thousand twenty-seven";
const PLACE = "Hudson Valley, New York";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Save the Date — ${COUPLE}` },
      {
        name: "description",
        content: `${COUPLE} are getting married on September 12, 2027 in the Hudson Valley, New York. Save the date — invitation and details to follow.`,
      },
      { property: "og:title", content: `Save the Date — ${COUPLE}` },
      {
        property: "og:description",
        content: `A wedding in the Hudson Valley, September 2027. Save the date.`,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: `The Wedding of ${COUPLE}`,
          startDate: "2027-09-12",
          eventStatus: "https://schema.org/EventScheduled",
          location: { "@type": "Place", name: PLACE },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      <Curtains onOpened={() => setEntered(true)} />

      <main
        className={`min-h-screen bg-background transition-opacity duration-1000 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* ——— The save the date ——— */}
        <section className="relative flex min-h-screen items-center justify-center px-5 py-20">
          <div
            className="relative w-full max-w-2xl bg-cover bg-center px-8 py-20 text-center deckle sm:px-16 sm:py-28"
            style={{ backgroundImage: `url(${floralFrame})` }}
          >
            <p className="label-caps text-olive">Save the date</p>

            <h1 className="font-script mt-8 text-[clamp(3.4rem,13vw,7rem)] leading-[0.85] text-burgundy">
              {COUPLE}
            </h1>

            <div className="mx-auto mt-10 flex max-w-xs items-center gap-4">
              <span className="h-px flex-1 bg-rose/50" />
              <img
                src={bird}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={1024}
                height={768}
                className="w-14"
              />
              <span className="h-px flex-1 bg-rose/50" />
            </div>

            <p className="font-display mt-10 text-2xl italic text-burgundy/90 sm:text-3xl">
              {DATE}
            </p>
            <p className="font-display mt-1 text-lg text-muted-foreground">{YEAR}</p>
            <p className="label-caps mt-8 text-burgundy/70">{PLACE}</p>
          </div>
        </section>

        <img
          src={borderFlowers}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1536}
          height={512}
          className="h-20 w-full object-cover sm:h-28"
        />

        {/* ——— A note ——— */}
        <section className="bg-sky/40 px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-script text-6xl leading-none text-burgundy sm:text-7xl">
              A little note
            </h2>
            <p className="font-display mt-8 text-xl leading-relaxed text-burgundy/85 sm:text-2xl">
              We are so glad you're here. Consider this the first flutter of wings — a
              whisper of a September to come, of long tables under trees, of too much cake
              and far too much dancing.
            </p>
            <p className="font-display mt-6 text-xl italic leading-relaxed text-burgundy/70 sm:text-2xl">
              Keep the day free. The rest will follow.
            </p>
          </div>
        </section>

        {/* ——— What we know so far ——— */}
        <section className="px-6 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl">
            <p className="label-caps text-center text-olive">What we know so far</p>
            <div className="mt-14 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
              {[
                {
                  label: "When",
                  head: "12 . IX . 2027",
                  note: "A Saturday, in the golden part of the afternoon.",
                },
                {
                  label: "Where",
                  head: "Hudson Valley",
                  note: "Two hours north of the city, among the orchards.",
                },
                {
                  label: "Then",
                  head: "Invitation to follow",
                  note: "Travel, lodging and menu will land here in due course.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-card px-8 py-14 text-center">
                  <p className="label-caps text-rose">{item.label}</p>
                  <h3 className="font-display mt-6 text-3xl text-burgundy">{item.head}</h3>
                  <p className="font-body mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative overflow-hidden bg-burgundy px-6 py-20 text-center">
          <img
            src={bird}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={768}
            className="pointer-events-none absolute -top-6 left-[8%] w-28 opacity-30"
          />
          <img
            src={bird}
            alt=""
            aria-hidden="true"
            loading="lazy"
            width={1024}
            height={768}
            className="pointer-events-none absolute -bottom-6 right-[8%] w-28 scale-x-[-1] opacity-30"
          />
          <p className="font-script text-5xl leading-none text-cream sm:text-6xl">
            {COUPLE}
          </p>
          <p className="label-caps mt-6 text-cream/70">September 2027 · Hudson Valley</p>
        </footer>
      </main>
    </>
  );
}
