import stars from "../../assets/icons/stars.svg";
import PropertiesCard from "../../components/propertiesCard";
import SectionHeader from "./components/sectionHeader";
import PaginationControls from "../../components/paginationControls";
import usePagination from "../../hooks/usePagination";
import propertiesData from "../../../UI-data/properties";

const FeaturesSection = () => {
  const {
    currentPage,
    currentItems,
    totalItems,
    cardsShown,
    goToPrevPage,
    goToNextPage,
    isFirstPage,
    isLastPage,
    slideAnimationClass,
  } = usePagination(propertiesData);

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

      <PaginationControls
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        cardsShown={cardsShown}
        totalItems={totalItems}
        secondaryButton={{ label: "Learn More", path: "/properties" }}
      />
    </section>
  );
};

export default FeaturesSection;
