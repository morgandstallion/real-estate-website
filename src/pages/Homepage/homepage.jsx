import Navbar from "../../components/navbar.jsx";
import NotificationBanner from "../../components/notificationBanner.jsx";
import HeroSection from "./components/heroSection.jsx";
import TestimonialSection from "./components/testimonialSection.jsx";
import FeaturesSection from "./components/featuresSection.jsx";

const Homepage = () => {
  return (
    <main>
      <NotificationBanner />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
    </main>
  );
};

export default Homepage;
