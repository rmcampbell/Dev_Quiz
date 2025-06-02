import React from 'react';
import { getTermsByCategory } from '../utils/utilities';
import { quizzes } from '../constants';
import FlashcardContainer from '../components/FlashcardContainer';
import { Term } from '../types';

const TermsFlashcards: React.FC = () => {
  return (
    <FlashcardContainer<Term>
      title="Term Flashcards"
      itemType="Term"
      fetchItems={(category) => getTermsByCategory(quizzes, category)}
      getId={(term) => term.term}
      renderFront={(term) => term.term}
      renderBack={(term) => (
        <div className="flex flex-col gap-2">
          <div><strong>Definition:</strong> {term.definition}</div>
          {term.notes && <div><strong>Notes:</strong> {term.notes}</div>}
          {term.example && <div><strong>Example:</strong> {term.example}</div>}
        </div>
      )}
    />
  );
};

export default TermsFlashcards;
