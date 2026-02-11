const faqColumns = [
  {
    heading: "How We Work",
    items: [
      {
        q: "What is your design process?",
        a: "We follow a structured approach: discovery, strategy, design, development, and launch. Each phase includes client feedback loops to ensure alignment.",
      },
      {
        q: "How long does a typical project take?",
        a: "Most projects range from 4 to 12 weeks depending on scope. We provide a detailed timeline during our initial consultation.",
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes. We provide post-launch maintenance packages including performance monitoring, content updates, and feature enhancements.",
      },
    ],
  },
  {
    heading: "Getting Started",
    items: [
      {
        q: "What do I need to get started?",
        a: "Simply reach out through our contact form. We will schedule a free consultation to discuss your goals, timeline, and budget.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Absolutely. We seamlessly integrate with existing brand guidelines or help evolve your identity into something even stronger.",
      },
      {
        q: "What industries do you specialize in?",
        a: "We have deep experience across technology, finance, healthcare, e-commerce, and creative industries, but welcome projects from any sector.",
      },
    ],
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground font-display md:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {faqColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-8">
              <h3 className="text-xl font-bold text-foreground font-display">
                {col.heading}
              </h3>
              <div className="flex flex-col gap-6">
                {col.items.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl border border-border bg-card p-6"
                  >
                    <h4 className="mb-2 text-sm font-bold text-foreground">
                      {item.q}
                    </h4>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
