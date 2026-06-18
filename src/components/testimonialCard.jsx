import goldenStar from "../assets/icons/golden-star.svg";
const TestimonialCard = ({ title, testimonial, avatar, name, location }) => {
  return (
    <div className="border border-dark-15 p-4 rounded-2xl">
      <div className="flex gap-1">
        <img className="w-7.5" src={goldenStar} alt="" />
        <img className="w-7.5" src={goldenStar} alt="" />
        <img className="w-7.5" src={goldenStar} alt="" />
        <img className="w-7.5" src={goldenStar} alt="" />
        <img className="w-7.5" src={goldenStar} alt="" />
      </div>

      <p className="text-20 font-bold mbs-4 mb-2">{title}</p>
      <p className="mb-3">{testimonial}</p>

      <div className="flex gap-3 items-center">
        <img src={avatar} alt="" />

        <div>
          <p>{name}</p>
          <p className="text-dark-60 text-14">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
