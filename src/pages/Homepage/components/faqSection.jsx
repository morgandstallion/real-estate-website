import usePagination from "../../../hooks/usePagination";
import faqData from "../../../../UI-data/faq";
import SectionHeader from "./sectionHeader";
import stars from "../../../assets/icons/stars.svg";
import PaginationControls from "../../../components/paginationControls";
import FaqCard from "../../../components/faqCard";

const FaqSection = () => {
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
  } = usePagination(faqData);
  return (
    <section className="wrapper pbs-[clamp(3.813rem,2.518rem+3.452vw,5.625rem)]">
      <SectionHeader
        icon={stars}
        title="Frequently Asked Questions"
        description="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
        descriptionSpan=""
        buttonTitle="View All FAQs"
        buttonPath="/faq"
      />

      <div className="overflow-x-hidden">
        <div
          key={currentPage}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-7.5 border-b border-dark-15 gap-5 ${slideAnimationClass}`}
        >
          {currentItems.map((faq, index) => (
            <div key={faq.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <FaqCard
                question={faq.question}
                summary={faq.summary}
                answer={faq.answer}
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
          label: "View All FAQs",
          path: "/faq",
        }}
      />
    </section>
  );
};

export default FaqSection;
