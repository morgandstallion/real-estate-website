import { Link } from "react-router";
import stars from "../../assets/icons/stars.svg";

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

          <button className=" hidden lg:block bg-dark-10 border border-dark-15 hover:bg-dark-08 w-full lg:w-fit text-white font-normal py-[0.2em] px-[0.7em] rounded-md">
            <Link to="/properties">Learn More</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
