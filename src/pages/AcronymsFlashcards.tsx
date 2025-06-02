import React from 'react';
import { getAcronymsByCategory } from '../utils/utilities';
import { quizzes } from '../constants';
import FlashcardContainer from '../components/FlashcardContainer';
import { Acronym } from '../types';

const AcronymsFlashcards: React.FC = () => {
  return (
    <FlashcardContainer<Acronym>
      title="Acronym Flashcards"
      itemType="Acronym"
      fetchItems={(category) => getAcronymsByCategory(quizzes, category)}
      getId={(acronym) => acronym.acronym}
      renderFront={(acronym) => acronym.acronym}
      renderBack={(acronym) => (
        <div className="flex flex-col gap-2">
          <div><strong>Full Term:</strong> {acronym.actual}</div>
          <div><strong>Definition:</strong> {acronym.definition}</div>
          {acronym.additionalAcronyms && acronym.additionalAcronyms.length > 0 &&
            acronym.additionalAcronyms[0] !== '' && (
            <div>
              <strong>Additional Acronyms:</strong>
              {acronym.additionalAcronyms.join(', ')}
            </div>
          )}
          {acronym.notes && <div><strong>Notes:</strong> {acronym.notes}</div>}
        </div>
      )}
    />
  );
};

export default AcronymsFlashcards;
