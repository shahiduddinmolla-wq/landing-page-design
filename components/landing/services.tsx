import { FlaskConical, SlidersHorizontal, Users, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: FlaskConical,
    title: "Research",
    description:
      "Deep market analysis and user research to inform every design decision.",
    highlighted: false,
  },
  {
    icon: SlidersHorizontal,
    title: "Fully Customizable",
    description:
      "Tailored solutions built from the ground up to match your unique brand vision.",
    highlighted: true,
  },
  {
    icon: Users,
    title: "Coordination",
    description:
      "Seamless project management keeping all stakeholders aligned and on track.",
    highlighted: false,
  },
  {
    icon: ShieldCheck,
    title: "Test",
    description:
      "Rigorous quality assurance ensuring pixel-perfect, bug-free delivery.",
    highlighted: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-display md:text-4xl text-balance">
            Services We Provide
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group flex flex-col items-center gap-5 rounded-2xl p-8 text-center transition-all ${
                  service.highlighted
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card border border-border hover:shadow-lg hover:border-primary/30"
                }`}
              >
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-full transition-colors ${
                    service.highlighted
                      ? "bg-primary-foreground/20"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}
                >
                  <Icon
                    className={`h-8 w-8 ${
                      service.highlighted
                        ? "text-primary-foreground"
                        : "text-primary"
                    }`}
                  />
                </div>
                <h3
                  className={`text-lg font-bold font-display ${
                    service.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    service.highlighted
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
