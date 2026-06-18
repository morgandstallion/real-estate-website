import { SecondaryButton } from "./buttons";

const PaginationControls = ({
  goToPrevPage,
  goToNextPage,
  isFirstPage,
  isLastPage,
  cardsShown,
  totalItems,
  secondaryButton,
}) => {
  const arrowButtonClass = (isDisabled) =>
    `p-2 rounded-lg border flex items-center justify-center ${
      isDisabled
        ? "border-dark-20 text-dark-60 cursor-not-allowed"
        : "border-dark-15 bg-dark-10 text-white cursor-pointer"
    }`;

  return (
    <>
      {/* Carousel buttons for mobile */}
      <div className="flex justify-between items-center py-5 md:hidden">
        {secondaryButton && (
          <SecondaryButton
            title={secondaryButton.label}
            path={secondaryButton.path}
          />
        )}

        {!secondaryButton && <div />}

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={arrowButtonClass(isFirstPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25C0;</span>
          </button>

          <div>
            <p>
              <span>{cardsShown}</span>
              <span className="text-dark-60"> of {totalItems}</span>
            </p>
          </div>

          <button
            onClick={goToNextPage}
            disabled={isLastPage}
            className={arrowButtonClass(isLastPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25B6;</span>
          </button>
        </div>
      </div>

      {/* Carousel buttons for tablet */}
      <div className="hidden md:flex lg:hidden justify-between items-center py-5">
        {secondaryButton && (
          <SecondaryButton
            title={secondaryButton.label}
            path={secondaryButton.path}
          />
        )}

        {!secondaryButton && <div />}

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={arrowButtonClass(isFirstPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25C0;</span>
          </button>

          <div>
            <p>
              <span>{cardsShown}</span>
              <span className="text-dark-60"> of {totalItems}</span>
            </p>
          </div>

          <button
            onClick={goToNextPage}
            disabled={isLastPage}
            className={arrowButtonClass(isLastPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25B6;</span>
          </button>
        </div>
      </div>

      {/* Carousel buttons for desktop */}
      <div className="hidden lg:flex justify-between items-center py-5">
        <div>
          <p>
            <span>{cardsShown}</span>
            <span className="text-dark-60"> of {totalItems}</span>
          </p>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            onClick={goToPrevPage}
            disabled={isFirstPage}
            className={arrowButtonClass(isFirstPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25C0;</span>
          </button>

          <button
            onClick={goToNextPage}
            disabled={isLastPage}
            className={arrowButtonClass(isLastPage)}
          >
            <span className="font-bold text-xl leading-none">&#x25B6;</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PaginationControls;
