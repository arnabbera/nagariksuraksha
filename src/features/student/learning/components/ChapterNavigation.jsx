import {
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const ChapterNavigation = ({
  previousChapter,
  nextChapter,
  completed = false,
  completing = false,
  onPrevious,
  onNext,
  onComplete,
}) => {
  return (
    <div className="ns-chapter-navigation">
      <button
        type="button"
        disabled={!previousChapter}
        onClick={onPrevious}
      >
        <FaArrowLeft />
        Previous
      </button>

      <button
        type="button"
        className={
          completed
            ? "complete completed"
            : "complete"
        }
        disabled={
          completed || completing
        }
        onClick={onComplete}
      >
        <FaCheck />

        {completed
          ? "Chapter Completed"
          : completing
            ? "Completing..."
            : "Mark Chapter Complete"}
      </button>

      <button
        type="button"
        disabled={!nextChapter}
        onClick={onNext}
      >
        Next
        <FaArrowRight />
      </button>

      <style>
        {`
          .ns-chapter-navigation {
            display: flex;
            justify-content: space-between;
            gap: 12px;
            margin-top: 22px;
          }

          .ns-chapter-navigation button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid #bfdbfe;
            border-radius: 11px;
            background: #eff6ff;
            color: #2563eb;
            cursor: pointer;
            padding: 11px 16px;
            font-weight: 700;
          }

          .ns-chapter-navigation button.complete {
            border-color: #2563eb;
            background: #2563eb;
            color: white;
          }

          .ns-chapter-navigation button.completed {
            border-color: #bbf7d0;
            background: #dcfce7;
            color: #166534;
          }

          .ns-chapter-navigation button:disabled {
            cursor: not-allowed;
            opacity: .55;
          }

          @media (max-width: 700px) {
            .ns-chapter-navigation {
              flex-direction: column;
            }

            .ns-chapter-navigation button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ChapterNavigation;