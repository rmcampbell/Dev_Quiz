import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';

export interface SelectQuizTypeProps {
  selectedCategory: string;
  goBack: () => void;
}

const SelectQuizType: React.FC<SelectQuizTypeProps> = ({ selectedCategory, goBack }) => {
  const navigate = useNavigate();

  const selectQuizType = (quizType: string) => {
    // For now, we'll just navigate to the next page
    // In the future, this could be used to determine which type of quiz to show
    console.log(`Selected quiz type: ${quizType}`);
    navigate(`/quizzes/${selectedCategory}/questionsTotal`);
  };

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Select Quiz Type</h2>
      <div className="select-btn-div">
        <button
          className="select-btns"
          onClick={() => selectQuizType('acronym')}
        >
          Acronyms
        </button>
        <button className="select-btns" onClick={() => selectQuizType('term')}>
          Terms
        </button>
        <button
          className="select-btns"
          onClick={() => selectQuizType('multiple-choice')}
        >
          Multiple Choice
        </button>
      </div>
      <ButtonLink onClick={goBack} to={''}>
        Back
      </ButtonLink>
    </div>
  );
};

export default SelectQuizType;
