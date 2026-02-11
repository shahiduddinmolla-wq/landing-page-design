"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    headline: "We Build Digital Experiences That Inspire",
    sub: "Award-winning creative agency delivering innovative solutions for forward-thinking brands.",
  },
  {
    headline: "Strategy Meets Beautiful Design",
    sub: "Data-driven creativity that converts visitors into loyal customers.",
  },
  {
    headline: "Your Vision, Our Expertise",
    sub: "End-to-end digital services from concept to launch and beyond.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center bg-secondary pt-20"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 items-center w-full">
        {/* Mockup */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-destructive/60" />
                <span className="h-3 w-3 rounded-full bg-chart-4/60" />
                <span className="h-3 w-3 rounded-full bg-chart-2/60" />
              </div>
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hero-mockup.jpg"
                  alt="Digital product mockup showing our creative work"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Slider arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground font-display md:text-5xl lg:text-6xl text-balance">
            {slides[current].headline}
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground mx-auto lg:mx-0">
            {slides[current].sub}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#portfolio"
              className="rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Our Work
            </a>
            <a
              href="#services"
              className="rounded-lg border border-border bg-card px-8 py-3.5 text-center text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Our Services
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center justify-center gap-2 lg:justify-start">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  i === current
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
