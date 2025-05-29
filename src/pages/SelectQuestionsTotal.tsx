import React from 'react';
import { QUESTION_NUMS } from '../constants';
import { SelectQuestionsTotalProps } from '../types';
import ButtonLink from '../components/ButtonLink';

const SelectQuestionsTotal: React.FC<SelectQuestionsTotalProps> = ({ totalQuestions, startQuiz, goBack }) => {
  const availableQuizLengths = QUESTION_NUMS.filter(length => length <= totalQuestions);

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">How many Questions?</h2>
      <div className="select-btn-div">
        {availableQuizLengths.map((choice: number, index: number) => (
          <button
            className="select-btns"
            onClick={() => startQuiz(choice)}
            key={index}
          >
            {choice}
          </button>
        ))}

        <button
          className="select-btns"
          onClick={() => startQuiz(totalQuestions)}
        >
          All ({totalQuestions})
        </button>
      </div>
      <ButtonLink onClick={goBack} to={''}>Back</ButtonLink>
    </div>
  );
};
export default SelectQuestionsTotal;
