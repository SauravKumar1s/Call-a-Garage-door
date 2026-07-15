import Hero from "../components/Hero";
import BrandStrip from "../components/BrandStrip";
import ServicesGrid from "../components/ServicesGrid";
import BeforeAfterShowcase from "../components/BeforeAfterShowcase";
import ProcessSection from "../components/ProcessSection";
import Testimonials from "../components/Testimonials";
import BlogPreview from "../components/BlogPreview";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ProcessSection />

      {/* <BrandStrip /> */}
      
      <ServicesGrid /> 
      <BeforeAfterShowcase />
      {/* <ProcessSection /> */}
      <Testimonials />
      {/* <BlogPreview /> */}
      <CtaBanner />
    </>
  );
}
