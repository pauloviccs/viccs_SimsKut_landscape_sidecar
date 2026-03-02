import FluidBackground from "@/components/landing/FluidBackground";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import ShowcaseSection from "@/components/landing/ShowcaseSection";
import NewsSection from "@/components/landing/NewsSection";
import Footer from "@/components/landing/Footer";
import CookieBanner from "@/components/landing/CookieBanner";

const Index = () => {
  return (
    <div className="relative min-h-screen noise-overlay">
      <FluidBackground />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <ShowcaseSection />
        <NewsSection />
        <Footer />
      </div>
      <CookieBanner />
    </div>
  );
};

export default Index;
