import { SecondaryButton } from "../../components/buttons";
import stars from "../../assets/icons/stars.svg";
import PropertiesCard from "../../components/propertiesCard";

import image1 from "../../assets/images/features-image1.png";
import image2 from "../../assets/images/features-image2.png";
import image3 from "../../assets/images/features-image3.png";

import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const FeaturesSection = () => {
  return (
    <section className="wrapper pbs-[clamp(3.813rem,2.518rem+3.452vw,5.625rem)]">
      <div>
        <img src={stars} alt="" />
        <h2 className="text-heading-2 py-3">Featured Properties</h2>
        <div className="flex justify-between items-center">
          <p className="text-dark-60 text-16 whitespace-pre-line lg:max-w-243.75">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein.{" "}
            <span className="hidden md:inline">
              Click "View Details" for more information.
            </span>
          </p>

          <div className="hidden lg:block">
            <SecondaryButton title="Learn More" path="/properties" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7.5 border-b border-dark-15 gap-5">
          <PropertiesCard
            image={image1}
            title="Seaside Serenity Villa"
            desc="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
            bedroom="4-Bedroom"
            bathroom="3-bathroom"
            vila="vila"
            price="$550,000"
          />

          <PropertiesCard
            image={image2}
            title="Metropolitan Haven"
            desc="A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More"
            bedroom="4-Bedroom"
            bathroom="3-bathroom"
            vila="vila"
            price="$550,000"
          />

          <PropertiesCard
            image={image3}
            title="Rustic Retreat Cottage"
            desc="An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More"
            bedroom="4-Bedroom"
            bathroom="3-bathroom"
            vila="vila"
            price="$550,000"
          />
        </div>

        {/* Carousel buttons for mobile and tablet */}
        <div className="flex justify-between items-center py-5 lg:hidden">
          <SecondaryButton title="Learn More" path="/properties" />

          <div className="flex justify-center items-center gap-3">
            <img
              className="p-2 rounded-full border border-dark-15"
              src={arrowLeft}
              alt=""
            />

            <div>
              <p>
                <span>01</span>
                <span className="text-dark-60"> of 60</span>
              </p>
            </div>

            <img
              className="p-2 rounded-full border border-dark-15"
              src={arrowRight}
              alt=""
            />
          </div>
        </div>

        {/* Carousel buttons for desktop */}
        <div className="hidden justify-between items-center py-5 lg:flex">
          <div>
            <p>
              <span>01</span>
              <span className="text-dark-60"> of 60</span>
            </p>
          </div>

          <div className="flex justify-center items-center gap-3">
            <img
              className="p-2 rounded-full border border-dark-15"
              src={arrowLeft}
              alt=""
            />

            <img
              className="p-2 rounded-full border border-dark-15"
              src={arrowRight}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
