import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import { hasTerms as categoryHasTerms, hasAcronyms as categoryHasAcronyms } from '../utils/utilities';
import { quizzes } from '../constants';

export interface SelectQuizTypeProps {
  selectedCategory: string;
  goBack: () => void;
}

const SelectQuizType: React.FC<SelectQuizTypeProps> = ({ selectedCategory, goBack }) => {
  const navigate = useNavigate();
  const [hasTerms, setHasTerms] = useState(false);
  const [hasAcronyms, setHasAcronyms] = useState(false);

  useEffect(() => {
    // Check if the selected category has terms and acronyms using utility functions
    setHasTerms(categoryHasTerms(quizzes, selectedCategory));
    setHasAcronyms(categoryHasAcronyms(quizzes, selectedCategory));
  }, [selectedCategory]);

  const selectQuizType = (quizType: string) => {
    console.log(`Selected quiz type: ${quizType}`);

    // Navigate to different pages based on the quiz type
    if (quizType === 'term') {
      navigate(`/quizzes/${selectedCategory}/terms`);
    } else if (quizType === 'acronym') {
      navigate(`/quizzes/${selectedCategory}/acronyms`);
    } else {
      // Default to multiple choice quiz
      navigate(`/quizzes/${selectedCategory}/questionsTotal`);
    }
  };

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">Select Quiz Type</h2>
      <div className="select-btn-div">
       <!-- {hasAcronyms && (
          <button
            className="select-btns"
            onClick={() => selectQuizType('acronym')}
          >
            Acronyms
          </button>
        )}
        {hasTerms && (
          <button
            className="select-btns"
            onClick={() => selectQuizType('term')}
          >
            Terms
          </button>
        )}-->
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
