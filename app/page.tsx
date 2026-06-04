import { About } from "@/components/features/about";
import { Activities } from "@/components/features/activities/activities";
import { AppSection } from "@/components/features/app-section";
import { Coaches } from "@/components/features/coaches";
import { CTABanner } from "@/components/cta-banner";
import { FAQ } from "@/components/features/faq";
import { Hero } from "@/components/features/hero";
import { Footer } from "@/components/custom-ui/footer";
import { Location } from "@/components/features/location";
import { Navbar } from "@/components/custom-ui/navbar";
import { PhotoGrid } from "@/components/features/photo-grid";
import { Schedule } from "@/components/features/schedule.tsx";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppButton } from "@/components/custom-ui/whatsapp-button";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Activities />
      <Schedule />
      <Coaches />
      <AppSection />
      <PhotoGrid />
      <Testimonials />
      {/*   <Contact />*/}
      <Location />
      <FAQ />
      <CTABanner />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
