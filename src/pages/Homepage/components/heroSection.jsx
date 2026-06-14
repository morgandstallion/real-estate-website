import { useNavigate } from "react-router";
import HeroCard from "./heroCards";

import { GhostButton, PrimaryButton } from "../../../components/buttons";
import { heroMiniCard } from "../../../../UI-data/info";
import heroImage from "../../../assets/images/hero-image.png";
import heroAnimation from "../../../assets/images/hero-animation.png";

import image1 from "../../../assets/icons/hero-card-icon-1.svg";
import image2 from "../../../assets/icons/hero-card-icon-2.svg";
import image3 from "../../../assets/icons/hero-card-icon-3.svg";
import image4 from "../../../assets/icons/hero-card-icon-4.svg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleAnimationClick = () => {
    navigate("/properties");
  };

  return (
    <>
      <div className="wrapper flex flex-col-reverse lg:flex-row items-center gap-14">
        {/* Hero Info */}
        <div>
          <h1 className="text-heading-1 max-w-[clamp(22.375rem,11.125rem+30vw,38.125rem)] mb-[clamp(1rem,0.821rem+0.476vw,1.25rem)]">
            Discover Your Dream Property with Estatein
          </h1>

          <p className="text-dark-60 md:pe-50 lg:pe-0">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <div className="flex flex-col md:flex-row gap-3 pbs-[clamp(2.5rem,2.054rem+1.19vw,3.125rem)] pbe-[clamp(2.5rem,2.054rem+1.19vw,3.125rem)]">
            <GhostButton title="Learn More" path="/about" />{" "}
            <PrimaryButton title="Browse Properties" path="/properties" />
          </div>

          {/* Hero Mini Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {heroMiniCard.map(({ title, info }, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center md:items-start items-center py-4 px-2 rounded-md border border-dark-15 bg-dark-10 ${index === heroMiniCard.length - 1 ? "col-span-2 md:col-span-1" : ""}`}
              >
                <h3 className="text-heading-3">{title}</h3>
                <p className="text-dark-60">{info}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Hero Image */}
        <img
          onClick={handleAnimationClick}
          className="w-[clamp(7.313rem,6.777rem+1.429vw,8.063rem)] absolute inset-0 top-[65%] left-2.5 lg:left-[44.5%] lg:top-[25%] cursor-pointer"
          src={heroAnimation}
          alt=""
        />

        <img
          className="w-full lg:w-172.5 rounded-2xl lg:rounded-none mbs-10 lg:mbs-0 lg:-me-11"
          src={heroImage}
          alt=""
        />
      </div>

      {/* Secondary Hero cards */}
      <div className="px-2 lg:px-0 pbs-10 md:pbs-1 lg:pbs-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 border-3 border-dark-15 rounded-lg lg:rounded-none p-2">
          <HeroCard image={image1} title="Find Your Dream Home" />
          <HeroCard image={image2} title="Unlock Property Value" />
          <HeroCard image={image3} title="Effortless Property Management" />
          <HeroCard
            image={image4}
            title="Smart Investments, Informed Decisons"
          />
        </div>
      </div>
    </>
  );
};

// [clamp(22.375rem,7.554rem+39.524vw,43.125rem)]
export default HeroSection;
