import { useState, useEffect } from "react";
import { SecondaryButton } from "../../components/buttons";
import stars from "../../assets/icons/stars.svg";
import PropertiesCard from "../../components/propertiesCard";
import propertiesData from "../../../UI-data/properties";

const FeaturesSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

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
    setCurrentPage((p) => Math.max(0, p - 1));
  };

  const goToNextPage = () => {
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
          {currentItems.map((property) => (
            <PropertiesCard key={property.id} {...property} />
          ))}
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
      </div>
    </section>
  );
};

export default FeaturesSection;
