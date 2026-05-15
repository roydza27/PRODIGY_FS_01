import Banner from "@/features/home/components/Banner";
import CTASection from "@/features/home/components/CTASection";
import ContentSection from "@/features/home/components/ContentSection";
import FeaturesSection from "@/features/home/components/FeaturesSection";
import HeroSection from "@/features/home/components/HeroSection";
import StatsSection from "@/features/home/components/StatsSection";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      <Banner />

      <main className="flex flex-col">
        <HeroSection />

        <section className="pt-28 md:pt-36">
          <FeaturesSection />
        </section>

        <section className="pt-32 md:pt-40">
          <StatsSection />
        </section>

        <section className="pt-32 md:pt-40">
          <ContentSection />
        </section>

        <section className="pt-32 pb-24 md:pt-40 md:pb-32">
          <CTASection />
        </section>
      </main>
    </div>
  );
};

export default HomePage;