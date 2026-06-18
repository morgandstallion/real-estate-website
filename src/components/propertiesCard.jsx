import { PrimaryButton } from "./buttons.jsx";
import bedroomIcon from "../assets/icons/bedroom-icon.svg";
import bathroomIcon from "../assets/icons/bathroom-icon (1).svg";
import vilaIcon from "../assets/icons/vila-icon.svg";

const PropertiesCard = ({
  image,
  title,
  desc,
  bedroom,
  bathroom,
  vila,
  price,
}) => {
  return (
    <div className="p-5 border border-dark-15 rounded-2xl flex flex-col h-full">
      <div className="w-full aspect-[1.4/1] overflow-hidden rounded-xl mb-2">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <h4 className="text-heading-4 py-3">{title}</h4>
      <p className="text-16 text-dark-60 grow">{desc}</p>

      <div className="flex gap-2 flex-wrap my-[clamp(1.25rem,1.071rem+0.476vw,1.5rem)]">
        <p className="flex justify-between gap-2 items-center bg-dark-10 border border-dark-15 rounded-full px-2 py-1">
          <img src={bedroomIcon} alt="" />
          {bedroom}
        </p>
        <p className="flex justify-between gap-2 items-center bg-dark-10 border border-dark-15 rounded-full px-2 py-1">
          <img src={bathroomIcon} alt="" />
          {bathroom}
        </p>
        <p className="flex justify-between gap-2 items-center bg-dark-10 border border-dark-15 rounded-full px-2 py-1">
          <img src={vilaIcon} alt="" />
          {vila}
        </p>
      </div>

      <div className="flex justify-between gap-4">
        <div className="">
          <p className="text-sm text-dark-60">price</p>
          <p className="text-heading-4">{price}</p>
        </div>

        <PrimaryButton title="View Property Details" path="/properties" />
      </div>
    </div>
  );
};

// clamp(19.375rem,17.455rem+5.119vw,22.063rem)

export default PropertiesCard;
