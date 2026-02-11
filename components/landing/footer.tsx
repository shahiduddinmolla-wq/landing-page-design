import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About Us */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-xs font-bold text-primary-foreground">N</span>
              </div>
              <span className="text-lg font-bold font-display text-background">
                Nexus
              </span>
            </div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-background/60">
              About Us
            </h3>
            <p className="text-sm leading-relaxed text-background/70">
              We are a full-service digital agency specializing in brand strategy,
              web development, and creative design. Our mission is to help
              businesses thrive in the digital age through innovative solutions
              and measurable results.
            </p>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-background/60">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-background/70">
              <p>123 Innovation Drive</p>
              <p>San Francisco, CA 94107</p>
              <a
                href="mailto:hello@nexus.agency"
                className="transition-colors hover:text-primary"
              >
                hello@nexus.agency
              </a>
              <a
                href="tel:+14155551234"
                className="transition-colors hover:text-primary"
              >
                +1 (415) 555-1234
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-background/60">
              Social Media
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-2 text-sm text-background/70">
              Follow us on social media to stay updated with our latest projects,
              insights, and industry trends.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/50">
            {"© 2026 Nexus Agency. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
}
