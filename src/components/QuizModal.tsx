import React, { useRef } from 'react';
import '../stylesheets/Modal.css';
import { QuizQuestion } from '../types';

const QuizModal: React.FC<QuizQuestion> = QuizQuestion => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lightBulbUnicode = '\uD83D\uDCA1';
  const sadFaceUnicode = '\uD83D\uDE14';
  const answerIcon = QuizQuestion.correct ? lightBulbUnicode : sadFaceUnicode;

  // Open/close the dialog using the dialog element's built-in methods
  React.useEffect(() => {
    if (QuizQuestion.show) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [QuizQuestion.show]);

  return (
    <dialog ref={dialogRef}>
      <div className="content">
        <div className="modal-header">
          <h2 className="modal-text">
            {answerIcon} {QuizQuestion.message}
          </h2>
        </div>
        <div className="modal-body">
          <h3 className="modal-text" data-testid="modal-points">
            Points: {QuizQuestion.points}
          </h3>
          <p>
            <b>Your Answer:</b>
          </p>
          <p>
            {Array.isArray(QuizQuestion.chosenAnswer) ? QuizQuestion.chosenAnswer.join(', ') : QuizQuestion.chosenAnswer}
          </p>
          {/* Display the correct answer if the user's answer is incorrect and correctAnswer is provided */}
          {!QuizQuestion.correct && QuizQuestion.correctAnswer && (
            <>
              <p>
                <b>Correct Answer:</b>
              </p>
              <p>
                {/* TODO: \n separator */}
                {Array.isArray(QuizQuestion.correctAnswer) ? QuizQuestion.correctAnswer.join(', ') : QuizQuestion.correctAnswer}
              </p>
            </>
          )}
          <>
            {/* TODO: Enable Markdown */}
            {QuizQuestion?.displayExplanation ? (
              <>
                <p>
                  <b>Explanation:</b>
                </p>
                <p>{QuizQuestion.displayExplanation}</p>
              </>
            ) : ('')}
          </>

          {/* Display references if they exist */}
          {QuizQuestion.references && QuizQuestion.references.length > 0 && (
            <>
              {QuizQuestion.references.length === 1 ? (
                <>
                  <a
                    className="modal-link"
                    href={QuizQuestion.references[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {QuizQuestion.references[0].title}
                  </a>
                  <br />
                </>
              ) : (
                <>
                  <p><b>References:</b></p>
                  <ul>
                    {QuizQuestion.references.map((reference, index) => (
                      <li key={index}>
                        <a
                          className="modal-link"
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {reference.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-btn" onClick={QuizQuestion.nextQuestion}>
            Next Question
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default QuizModal;
