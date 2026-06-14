import { Link } from "react-router";

const PrimaryButton = ({ title, path }) => {
  return (
    <button className="bg-brand-60 hover:bg-brand-65 w-full lg:w-fit text-white font-normal py-[0.2em] px-[0.7em] rounded-md">
      <Link to={path}>{title}</Link>
    </button>
  );
};

const SecondaryButton = ({ title, path }) => {
  return (
    <button className="bg-dark-10 border border-dark-15 hover:bg-dark-08 w-full lg:w-fit text-white font-normal py-[0.2em] px-[0.7em] rounded-md">
      <Link to={path}>{title}</Link>
    </button>
  );
};

const GhostButton = ({ title, path }) => {
  return (
    <button className="py-[0.2em] px-[0.7em] w-full lg:w-fit rounded-md border border-dark-15">
      <Link to={path}>{title}</Link>
    </button>
  );
};

export { PrimaryButton, GhostButton, SecondaryButton };
