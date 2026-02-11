import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import TaglineStrip from "@/components/landing/tagline-strip";
import Services from "@/components/landing/services";
import Portfolio from "@/components/landing/portfolio";
import Testimonials from "@/components/landing/testimonials";
import CtaVideo from "@/components/landing/cta-video";
import Faq from "@/components/landing/faq";
import FinalCta from "@/components/landing/final-cta";
import Footer from "@/components/landing/footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TaglineStrip />
        <Services />
        <Portfolio />
        <Testimonials />
        <CtaVideo />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
