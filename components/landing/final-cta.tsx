import { Play } from "lucide-react";

export default function FinalCta() {
  return (
    <section id="contact" className="bg-secondary py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Ready to Begin?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-display md:text-4xl text-balance">
            Let{"'"}s Build Something Remarkable Together
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0">
            Whether you need a complete brand overhaul or a targeted digital
            campaign, our team brings the expertise and passion to deliver
            exceptional results.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="mailto:hello@nexus.agency"
              className="rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="relative overflow-hidden rounded-2xl aspect-video flex items-center justify-center border border-border">
          <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
