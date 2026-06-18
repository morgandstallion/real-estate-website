import { useState, useEffect } from "react";
import stars from "../../assets/icons/stars.svg";
import PropertiesCard from "../../components/propertiesCard";
import SectionHeader from "./components/sectionHeader";
import propertiesData from "../../../UI-data/properties";
import { SecondaryButton } from "../../components/buttons";

const FeaturesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");

    const updateItemsPerPage = () => {
      if (lg.matches) {
        setItemsPerPage(3);
      } else if (md.matches) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
      setCurrentPage(0);
    };

    updateItemsPerPage();

    lg.addEventListener("change", updateItemsPerPage);
    md.addEventListener("change", updateItemsPerPage);

    return () => {
      lg.removeEventListener("change", updateItemsPerPage);
      md.removeEventListener("change", updateItemsPerPage);
    };
  }, []);

  const totalProperties = propertiesData.length;
  const totalPages = Math.ceil(totalProperties / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentItems = propertiesData.slice(startIdx, startIdx + itemsPerPage);
  const cardsShown = Math.min(
    (currentPage + 1) * itemsPerPage,
    totalProperties,
  );

  const goToPrevPage = () => {
    setDirection("left");
    setCurrentPage((p) => Math.max(0, p - 1));
  };

  const goToNextPage = () => {
    setDirection("right");
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const arrowButtonClass = (isDisabled) =>
    `p-2 rounded-lg border flex items-center justify-center ${
      isDisabled
        ? "border-dark-20 text-dark-60 cursor-not-allowed"
        : "border-dark-15 bg-dark-10 text-white cursor-pointer"
    }`;

  const slideAnimationClass =
    direction === "right"
      ? "animate-slide-from-right"
      : "animate-slide-from-left";

  return (
    <section className="wrapper pbs-[clamp(3.813rem,2.518rem+3.452vw,5.625rem)]">
      <SectionHeader
        icon={stars}
        title="Featured Properties"
        description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. "
        descriptionSpan='Click "View Details" for more information.'
        buttonTitle="Learn More"
        buttonPath="/properties"
      />

      <div className="overflow-x-hidden">
        <div
          key={currentPage}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7.5 border-b border-dark-15 gap-5 ${slideAnimationClass}`}
        >
          {currentItems.map((property, index) => (
            <div
              key={property.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PropertiesCard {...property} />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel buttons for mobile */}
      <div className="flex justify-between items-center py-5 md:hidden">
        <SecondaryButton title="Learn More" path="/properties" />

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={arrowButtonClass(isFirstPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25C0;</span>
          </button>

          <div>
            <p>
              <span>{cardsShown}</span>
              <span className="text-dark-60"> of {totalProperties}</span>
            </p>
          </div>

          <button
            onClick={goToNextPage}
            disabled={isLastPage}
            className={arrowButtonClass(isLastPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25B6;</span>
          </button>
        </div>
      </div>

      {/* Carousel buttons for tablet */}
      <div className="hidden md:flex lg:hidden justify-between items-center py-5">
        <SecondaryButton title="Learn More" path="/properties" />

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={arrowButtonClass(isFirstPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25C0;</span>
          </button>

          <div>
            <p>
              <span>{cardsShown}</span>
              <span className="text-dark-60"> of {totalProperties}</span>
            </p>
          </div>

          <button
            onClick={goToNextPage}
            disabled={isLastPage}
            className={arrowButtonClass(isLastPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25B6;</span>
          </button>
        </div>
      </div>

      {/* Carousel buttons for desktop */}
      <div className="hidden lg:flex justify-between items-center py-5">
        <div>
          <p>
            <span>{cardsShown}</span>
            <span className="text-dark-60"> of {totalProperties}</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={arrowButtonClass(isFirstPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25C0;</span>
          </button>

          <button
            onClick={goToNextPage}
            disabled={isLastPage}
            className={arrowButtonClass(isLastPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25B6;</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
