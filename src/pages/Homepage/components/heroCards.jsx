import icon from "../../../assets/icons/hero-card-arrow.svg";
const HeroCard = ({ image, title }) => {
  return (
    <div className="flex flex-col bg-dark-10 p-2 rounded-md">
      <div className="flex justify-between items-center">
        <div></div>
        <img className="w-5" src={icon} alt="" />
      </div>

      <div className="flex flex-col items-center gap-2">
        <img src={image} alt="" />
        <p className="text-14 text-center">{title}</p>
      </div>
    </div>
  );
};

export default HeroCard;
