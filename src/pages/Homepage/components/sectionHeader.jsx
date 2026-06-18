import { SecondaryButton } from "../../../components/buttons";

const SectionHeader = ({
  icon,
  title,
  description,
  descriptionSpan,
  buttonTitle,
  buttonPath,
}) => {
  return (
    <div>
      <img src={icon} alt="" />
      <h2 className="text-heading-2 py-3">{title}</h2>
      <div className="flex justify-between items-center">
        <p className="text-dark-60 text-16 whitespace-pre-line lg:max-w-243.75">
          {description}
          {descriptionSpan && (
            <span className="hidden md:inline">{descriptionSpan}</span>
          )}
        </p>
        <div className="hidden lg:block">
          <SecondaryButton title={buttonTitle} path={buttonPath} />
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
