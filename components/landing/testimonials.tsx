"use client";

import { useState } from "react";
import { User } from "lucide-react";

const people = [
  { name: "Alex Turner", role: "CEO" },
  { name: "Maria Chen", role: "Designer" },
  { name: "James Carter", role: "Secretary" },
  { name: "Sophie Laurent", role: "Manager" },
];

const quotes = [
  "Their strategic approach completely transformed our brand presence in the market.",
  "The design quality exceeded every expectation. Truly world-class craftsmanship.",
  "From kickoff to delivery, the coordination was flawless. Best agency experience I have had in over a decade of working with teams.",
  "Rigorous testing meant zero issues at launch. Our conversion rates doubled within a month.",
];

export default function Testimonials() {
  const [active, setActive] = useState(2);

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-display md:text-4xl text-balance">
            What Our Clients Say
          </h2>
        </div>

        {/* Avatars row */}
        <div className="mb-12 flex items-end justify-center gap-6 md:gap-10">
          {people.map((person, i) => (
            <button
              key={person.name}
              onClick={() => setActive(i)}
              className="flex flex-col items-center gap-3 transition-all"
              aria-label={`View testimonial from ${person.name}`}
            >
              <div
                className={`flex items-center justify-center rounded-full transition-all duration-300 ${
                  i === active
                    ? "h-24 w-24 bg-primary shadow-lg shadow-primary/30 md:h-28 md:w-28"
                    : "h-16 w-16 bg-muted md:h-20 md:w-20"
                }`}
              >
                <User
                  className={`transition-all ${
                    i === active
                      ? "h-10 w-10 text-primary-foreground md:h-12 md:w-12"
                      : "h-6 w-6 text-muted-foreground md:h-8 md:w-8"
                  }`}
                />
              </div>
              <div className="text-center">
                <p
                  className={`text-sm font-bold font-display transition-colors ${
                    i === active ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {person.name}
                </p>
                <p
                  className={`text-xs transition-colors ${
                    i === active ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {person.role}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Quote */}
        <div className="mx-auto max-w-2xl text-center">
          <blockquote className="text-xl leading-relaxed text-foreground font-display md:text-2xl">
            {`"${quotes[active]}"`}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
