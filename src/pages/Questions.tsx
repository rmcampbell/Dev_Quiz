import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import QuizModal from '../components/QuizModal';

import { QuizProps } from '../types';

const Questions: React.FC<QuizProps> = quizProps => {
  const navigate = useNavigate();
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!quizProps.choicesArr.length) {
      navigate('/quizzes');
    }
  }, [quizProps.choicesArr, navigate]);

  // Memoize the calculation for required answers
  const isRequiredAnswersSelected = useMemo(() => {
    return Array.isArray(quizProps.currQuestion.answer)
      ? Array.isArray(quizProps.selectedOption) && quizProps.selectedOption.length === quizProps.currQuestion.answer.length
      : Boolean(quizProps.selectedOption);
  }, [quizProps.selectedOption, quizProps.currQuestion.answer]);

  // Set focus on submit button when required answers are selected or answer changes
  useEffect(() => {
    if (isRequiredAnswersSelected && submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  }, [isRequiredAnswersSelected, quizProps.selectedOption]);
  // Memoize the question content
  const questionContent = useMemo(() => {
    return Array.isArray(quizProps.currQuestion.answer)
      ? `${quizProps.currQuestion.question} (Choose ${quizProps.currQuestion.answer.length})`
      : `${quizProps.currQuestion.question}`;
  }, [quizProps.currQuestion.question, quizProps.currQuestion.answer]);

  // Memoize the current choices array
  const currentChoices = useMemo(() => {
    return quizProps.choicesArr.length > 0 ? quizProps.choicesArr[quizProps.questionNumber - 1] : [];
  }, [quizProps.choicesArr, quizProps.questionNumber]);

  // Memoize the button opacity calculation
  const submitButtonOpacity = useMemo(() => {
    return Array.isArray(quizProps.currQuestion.answer)
      ? (Array.isArray(quizProps.selectedOption) && quizProps.selectedOption.length === quizProps.currQuestion.answer.length) ? 1 : 0.5
      : quizProps.selectedOption ? 1 : 0.5;
  }, [quizProps.currQuestion.answer, quizProps.selectedOption]);

  // Memoize the button disabled state
  const isSubmitDisabled = useMemo(() => {
    return Array.isArray(quizProps.currQuestion.answer)
      ? !(Array.isArray(quizProps.selectedOption) && quizProps.selectedOption.length === quizProps.currQuestion.answer.length)
      : !quizProps.selectedOption;
  }, [quizProps.currQuestion.answer, quizProps.selectedOption]);

  // Memoize the option selection handler
  const handleOptionClick = useCallback((choice: string) => quizProps.selectOption(choice), [quizProps]);

  // Memoize the check answer handler
  const handleCheckAnswer = useCallback(() => quizProps.checkAnswer(), [quizProps]);

  return (
    <>
      <div className="quiz-text">
        <p>Question: {quizProps.questionNumber}/{quizProps.totalQuestions}</p>
        <p>Points: {quizProps.points}</p>
      </div>
      <h1 className="quiz-heading">Question {quizProps.questionNumber}</h1>
      <div className="quiz-div">
        {quizProps.chooseAnswer ? (<QuizModal {...quizProps.modalProps} />) : (
          <fieldset className="quiz-answers-div">
            <legend>
              <span className="sr-only">Question {quizProps.questionNumber}</span>
              <MarkdownRenderer content={questionContent} />
            </legend>
            <ul>
              {currentChoices.map(
                (choice: string, index: number) => (
                  <li key={index}>
                    <button
                      className={`answers-btns ${
                        Array.isArray(quizProps.selectedOption)
                          ? quizProps.selectedOption.includes(choice) ? 'answers-btns--selected' : ''
                          : choice === quizProps.selectedOption ? 'answers-btns--selected' : ''
                      }`}
                      onClick={() => handleOptionClick(choice)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        {Array.isArray(quizProps.currQuestion.answer) ? (
                          <span className="checkbox">
                            {Array.isArray(quizProps.selectedOption) && quizProps.selectedOption.includes(choice) ? '✓' : ''}
                          </span>
                        ) : null}
                        <span style={{ flexGrow: 1, textAlign: 'center' }}>{choice}</span>
                      </div>
                    </button>
                  </li>
                )
              )}
            </ul>
            <hr />
            <button
              ref={submitButtonRef}
              className="select-btns submit-btn"
              style={{ opacity: submitButtonOpacity }}
              disabled={isSubmitDisabled}
              onClick={handleCheckAnswer}
            >
              Submit
            </button>
          </fieldset>
        )}
      </div>
    </>
  );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(Questions);
