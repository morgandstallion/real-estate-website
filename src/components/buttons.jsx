import { Link } from "react-router";

const buttonBaseClasses =
  "inline-flex items-center justify-center font-normal py-[0.2em] px-[0.7em] rounded-md";

const PrimaryButton = ({ title, path, className = "" }) => {
  return (
    <Link
      to={path}
      className={`bg-brand-60 hover:bg-brand-65 text-white ${buttonBaseClasses} ${className}`}
    >
      {title}
    </Link>
  );
};

const SecondaryButton = ({ title, path, className = "" }) => {
  return (
    <Link
      to={path}
      className={`bg-dark-10 border border-dark-15 hover:bg-dark-08 text-white ${buttonBaseClasses} ${className}`}
    >
      {title}
    </Link>
  );
};

const GhostButton = ({ title, path, className = "" }) => {
  return (
    <Link
      to={path}
      className={`border border-dark-15 ${buttonBaseClasses} ${className}`}
    >
      {title}
    </Link>
  );
};

export { PrimaryButton, GhostButton, SecondaryButton };
