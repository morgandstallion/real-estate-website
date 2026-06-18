import SectionHeader from "./sectionHeader";
import stars from "../../../assets/icons/stars.svg";
import TestimonialCard from "../../../components/testimonialCard";
import PaginationControls from "../../../components/paginationControls";
import usePagination from "../../../hooks/usePagination";
import image from "../../../assets/icons/golden-star.svg";
import avatar from "../../../assets/images/Profile.png";

const TestimonialSection = () => {
  const {
    goToPrevPage,
    goToNextPage,
    isFirstPage,
    isLastPage,
    cardsShown,
    totalItems,
  } = usePagination([]);

  return (
    <section className="wrapper pbs-[clamp(3.813rem,2.518rem+3.452vw,5.625rem)]">
      <SectionHeader
        icon={stars}
        title="What Our Clients Say"
        description="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
        descriptionSpan=""
        buttonTitle="View All Testimonials"
        buttonPath="/properties"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7.5 border-b border-dark-15 gap-5">
        <TestimonialCard
          image={image}
          title="Sold our apartment in record time"
          testimonial="I was amazed at how quickly Estatein managed to sell our Manhattan apartment. Their marketing strategy was top-notch, and they brought in multiple qualified buyers within the first week. The entire process was transparent, and they kept us informed every step of the way. Highly recommended for anyone looking to sell."
          avatar={avatar}
          name="Morgan Samuel"
          location="New York, USA"
        />
      </div>

      <PaginationControls
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        isFirstPage={isFirstPage}
        isLastPage={isLastPage}
        cardsShown={cardsShown}
        totalItems={totalItems}
        secondaryButton={{ label: "View all Testimonials", path: "/properties" }}
      />
    </section>
  );
};

export default TestimonialSection;
