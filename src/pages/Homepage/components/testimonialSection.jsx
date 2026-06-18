import SectionHeader from "./sectionHeader";
import stars from "../../../assets/icons/stars.svg";
import TestimonialCard from "../../../components/testimonialCard";
import PaginationControls from "../../../components/paginationControls";
import usePagination from "../../../hooks/usePagination";
import testimonialsData from "../../../../UI-data/testimonials";

const TestimonialSection = () => {
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
  } = usePagination(testimonialsData);

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

      <div className="overflow-x-hidden">
        <div
          key={currentPage}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7.5 border-b border-dark-15 gap-5 ${slideAnimationClass}`}
        >
          {currentItems.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <TestimonialCard
                title={testimonial.title}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
                name={testimonial.name}
                location={testimonial.location}
              />
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
        secondaryButton={{
          label: "View all Testimonials",
          path: "/properties",
        }}
      />
    </section>
  );
};

export default TestimonialSection;
