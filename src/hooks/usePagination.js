import { useState, useEffect } from "react";

const usePagination = (data) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [direction, setDirection] = useState("right");

  useEffect(() => {
    const lg = window.matchMedia("(min-width: 1024px)");
    const md = window.matchMedia("(min-width: 768px)");

    const updateItemsPerPage = () => {
      if (lg.matches) {
        setItemsPerPage(3);
      } else if (md.matches) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
      setCurrentPage(0);
    };

    updateItemsPerPage();

    lg.addEventListener("change", updateItemsPerPage);
    md.addEventListener("change", updateItemsPerPage);

    return () => {
      lg.removeEventListener("change", updateItemsPerPage);
      md.removeEventListener("change", updateItemsPerPage);
    };
  }, []);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const currentItems = data.slice(startIdx, startIdx + itemsPerPage);
  const cardsShown = Math.min((currentPage + 1) * itemsPerPage, totalItems);

  const goToPrevPage = () => {
    setDirection("left");
    setCurrentPage((p) => Math.max(0, p - 1));
  };

  const goToNextPage = () => {
    setDirection("right");
    setCurrentPage((p) => Math.min(totalPages - 1, p + 1));
  };

  const isFirstPage = currentPage === 0;
  const isLastPage = currentPage === totalPages - 1;

  const slideAnimationClass =
    direction === "right"
      ? "animate-slide-from-right"
      : "animate-slide-from-left";

  return {
    currentPage,
    currentItems,
    totalItems,
    cardsShown,
    goToPrevPage,
    goToNextPage,
    isFirstPage,
    isLastPage,
    slideAnimationClass,
  };
};

export default usePagination;
