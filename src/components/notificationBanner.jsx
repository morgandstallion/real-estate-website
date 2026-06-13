import { Link } from "react-router";
import cancelIcon from "../assets/icons/notifi-cancel.svg";
import bannerImage from "../assets/images/notification-banner.svg";
import { useState } from "react";

const STORAGE_KEY = "notification_banner_dismissed";

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(
    () => !sessionStorage.getItem(STORAGE_KEY),
  );

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      hidden={!isVisible}
      style={{
        backgroundColor: "#1a1a1a",
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-[12px] md:text-[14px] flex justify-between items-center wrapper py-2">
        <div className="hidden md:block"></div>
        <p>
          Discover Your Dream Property with Estatein{" "}
          <Link className="underline-offset-1 underline" to="/properties">
            Learn More
          </Link>
        </p>

        <button onClick={handleDismiss} className="cursor-pointer">
          <img src={cancelIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
