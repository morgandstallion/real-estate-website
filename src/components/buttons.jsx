import { Link } from "react-router";

const PrimaryButton = ({ title, path, className = "" }) => {
  return (
    <button
      className={`bg-brand-60 hover:bg-brand-65 text-white font-normal py-[0.2em] px-[0.7em] rounded-md ${className}`}
    >
      <Link to={path}>{title}</Link>
    </button>
  );
};

const SecondaryButton = ({ title, path, className = "" }) => {
  return (
    <button
      className={`bg-dark-10 border border-dark-15 hover:bg-dark-08 text-white font-normal py-[0.2em] px-[0.7em] rounded-md ${className}`}
    >
      <Link to={path}>{title}</Link>
    </button>
  );
};

const GhostButton = ({ title, path, className = "" }) => {
  return (
    <button
      className={`py-[0.2em] px-[0.7em] rounded-md border border-dark-15 ${className}`}
    >
      <Link to={path}>{title}</Link>
    </button>
  );
};

export { PrimaryButton, GhostButton, SecondaryButton };
