import SectionHeader from "./sectionHeader";
import stars from "../../../assets/icons/stars.svg";

const TestimonialSection = () => {
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
    </section>
  );
};

export default TestimonialSection;
