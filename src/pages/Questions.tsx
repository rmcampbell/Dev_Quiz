import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MarkdownRenderer from '../components/MarkdownRenderer';
import QuizModal from '../components/QuizModal';

import { QuizProps } from '../types';

const Questions: React.FC<QuizProps> = QuizProps => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!QuizProps.choicesArr.length) {
      navigate('/quizzes');
    }
  }, [QuizProps.choicesArr, navigate]);
  return (
    <>
      <div className="quiz-text">
        <p>Question: {QuizProps.questionNumber}/{QuizProps.totalQuestions}</p>
        <p>Points: {QuizProps.points}</p>
      </div>
      <h1 className="quiz-heading">Question {QuizProps.questionNumber}</h1>
      <div className="quiz-div">
        {QuizProps.chooseAnswer ? (<QuizModal {...QuizProps.modalProps} />) : (
          <fieldset className="quiz-answers-div">
            <legend>
              <span className="sr-only">Question {QuizProps.questionNumber}</span>
              <MarkdownRenderer content={
                Array.isArray(QuizProps.currQuestion.answer)
                  ? `${QuizProps.currQuestion.question} (Choose ${QuizProps.currQuestion.answer.length})`
                  : `${QuizProps.currQuestion.question}`
              } />
            </legend>
            <ul>
              {QuizProps.choicesArr.length > 0 &&
                QuizProps.choicesArr[QuizProps.questionNumber - 1].map(
                  (choice: string, index: number) => (
                    <li key={index}>
                      <button
                        className={`answers-btns ${
                          Array.isArray(QuizProps.selectedOption)
                            ? QuizProps.selectedOption.includes(choice) ? 'answers-btns--selected' : ''
                            : choice === QuizProps.selectedOption ? 'answers-btns--selected' : ''
                        }`}
                        onClick={() => QuizProps.selectOption(choice)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                          {Array.isArray(QuizProps.currQuestion.answer) ? (
                            <span className="checkbox">
                              {Array.isArray(QuizProps.selectedOption) && QuizProps.selectedOption.includes(choice) ? '✓' : ''}
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
              className="select-btns submit-btn"
              style={{
                opacity: Array.isArray(QuizProps.currQuestion.answer)
                  ? (Array.isArray(QuizProps.selectedOption) && QuizProps.selectedOption.length === QuizProps.currQuestion.answer.length) ? 1 : 0.5
                  : QuizProps.selectedOption ? 1 : 0.5
              }}
              disabled={Array.isArray(QuizProps.currQuestion.answer)
                ? !(Array.isArray(QuizProps.selectedOption) && QuizProps.selectedOption.length === QuizProps.currQuestion.answer.length)
                : !QuizProps.selectedOption
              }
              onClick={() => QuizProps.checkAnswer()}
            >
              Submit
            </button>
          </fieldset>
        )}
      </div>
    </>
  );
};

export default Questions;
