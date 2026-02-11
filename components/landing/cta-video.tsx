import { Play } from "lucide-react";

export default function CtaVideo() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 items-center">
        {/* Video placeholder */}
        <div className="relative overflow-hidden rounded-2xl bg-foreground/5 aspect-video flex items-center justify-center border border-border">
          <div className="absolute inset-0 bg-foreground/80 flex items-center justify-center">
            <button
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-110"
            >
              <Play className="h-8 w-8 ml-1" />
            </button>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-display md:text-4xl text-balance">
            What Are You Waiting For? Start It Today!
          </h2>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0">
            Join hundreds of businesses that have already transformed their
            digital presence. Our team is ready to bring your vision to life with
            precision and creativity.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started Now
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border bg-card px-8 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
