import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedMeals from "@/components/FeaturedMeals";
import Chefs from "@/components/Chefs";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedMeals />
      <Chefs />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
