import Image from "next/image";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    src: "/images/portfolio-1.jpg",
    alt: "Creative workspace project",
    label: "Brand Strategy",
  },
  {
    src: "/images/portfolio-2.jpg",
    alt: "Brand identity design project",
    label: "Identity Design",
  },
  {
    src: "/images/portfolio-3.jpg",
    alt: "Responsive web design project",
    label: "Web Development",
  },
  {
    src: "/images/portfolio-4.jpg",
    alt: "Team collaboration project",
    label: "Consulting",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Our Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground font-display md:text-4xl text-balance">
            Let Them Know Why You{"'"}re the Best
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.label}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-square">
                <Image
                  src={project.src || "/placeholder.svg"}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/60">
                <span className="translate-y-4 text-lg font-bold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 font-display">
                  {project.label}
                </span>
                <ExternalLink className="mt-3 h-5 w-5 translate-y-4 text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
