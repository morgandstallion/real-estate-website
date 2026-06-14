import Navbar from "../../components/navbar.jsx";
import NotificationBanner from "../../components/notificationBanner.jsx";
import HeroSection from "./components/heroSection.jsx";

const Homepage = () => {
  return (
    <main>
      <NotificationBanner />
      <Navbar />
      <HeroSection />
    </main>
  );
};

export default Homepage;
