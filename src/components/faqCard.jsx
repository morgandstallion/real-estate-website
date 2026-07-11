import { useState, useId } from "react";

const FaqCard = ({ question, summary, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const uid = useId();
  const headerId = `faq-header-${uid}`;
  const answerId = `faq-answer-${uid}`;

  return (
    <div
      className={`border border-dark-15 rounded-2xl p-5 flex flex-col transition-all duration-300 ${
        isOpen ? "bg-dark-10" : "bg-transparent"
      }`}
    >
      <button
        id={headerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-start gap-4 w-full text-left cursor-pointer bg-transparent border-0 p-0"
      >
        <div className="flex-1">
          <h4 className="text-heading-20 text-white">{question}</h4>
          {summary && !isOpen && (
            <p className="text-16 text-dark-60 mt-1">{summary}</p>
          )}
        </div>

        <div
          className={`min-w-9 min-h-9 flex items-center justify-center border border-dark-15 rounded-full transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-brand-70 border-brand-70" : "bg-dark-10"
          }`}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-colors duration-300 ${
              isOpen ? "text-dark-08" : "text-white"
            }`}
          >
            <path
              d="M8 3.33325V12.6666"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M3.33337 8H12.6667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          {isOpen && (
            <div id={answerId} aria-labelledby={headerId} role="region">
              <p className="text-16 text-dark-60 leading-relaxed">{answer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
