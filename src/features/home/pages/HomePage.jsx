import AnnouncementBar from "../components/AnnouncementBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsSection from "../components/StatsSection";
import LearningSection from "../components/LearningSection";
import LatestUpdates from "../components/LatestUpdates";
import VideosSection from "../components/VideosSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <AnnouncementBar />
      <Header />

      <main>
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <StatsSection />
        <LearningSection />
        <LatestUpdates />
        <VideosSection />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;