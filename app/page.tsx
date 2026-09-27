import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { PharmacyStories } from "@/components/pharmacy/PharmacyStories";
import { About } from "@/components/about/About";
import { MedicineCategories } from "@/components/products/MedicineCategories";
import { DarkCare } from "@/components/care/DarkCare";
import { HealthcareJourney } from "@/components/journey/HealthcareJourney";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Resources } from "@/components/resources/Resources";
import { Faq } from "@/components/faq/Faq";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function HomePage() {
  return (
    <main className="overflow-x-clip">
      <Navbar />
      <Hero />
      <Services />
      <PharmacyStories />
      <About />
      <MedicineCategories />
      <DarkCare />
      <HealthcareJourney />
      <Testimonials />
      <Resources />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
