import { PrimaryButton } from "./buttons";
import ctaBg from "../assets/images/cta-lg.png";

const CtaBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
      }}
      className="bg-cover lg:bg-contain mt-[clamp(4.5625rem,calc(5.125rem-0.625vw),5rem)]"
    >
      <div className="wrapper lg:py-20 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h2 className="text-heading-2">
            Start Your Real Estate Journey Today
          </h2>
          <p className="max-w-244.75 text-dark-60 my-2">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </p>
        </div>

        <div className="w-full lg:w-fit my-4">
          <PrimaryButton
            title="Explore Properties"
            path="/properties"
            className="w-full lg:w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default CtaBanner;
