import { useState, useEffect, ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Flashcard from './Flashcard';
import ButtonLink from './ButtonLink';
import '../stylesheets/Flashcard.css';

interface FlashcardItem {
  definition: string;  // All items have a definition
}

interface FlashcardContainerProps<T extends FlashcardItem> {
  title: string;  // "Term Flashcards" or "Acronym Flashcards"
  itemType: string;  // "Term" or "Acronym" for display
  fetchItems: (category: string) => T[];  // Function to fetch items
  renderFront: (item: T) => string;  // Function to render the front of the card
  renderBack: (item: T) => ReactNode;  // Function to render the back of the card
  getId: (item: T) => string;  // Function to get a unique identifier for the item
}

export default function FlashcardContainer<T extends FlashcardItem>({
  title,
  itemType,
  fetchItems,
  renderFront,
  renderBack,
  getId
}: FlashcardContainerProps<T>) {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [knownItems, setKnownItems] = useState<Record<string, boolean>>({});
  const [items, setItems] = useState<T[]>([]);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (category) {
      setItems(fetchItems(category));
    }
  }, [category, fetchItems]);

  // Filter out items with empty definitions
  const validItems = items.filter(item => item.definition.trim() !== '');

  if (validItems.length === 0) {
    return (
      <div className="select-quiz-styles">
        <h2 className="quiz-heading">No {itemType.toLowerCase()}s available</h2>
        <div className="select-btn-div">
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <ButtonLink onClick={() => navigate(`/quizzes/${category}/quizType`)} to={''} className="nowrap-btn">Back to Quiz Type</ButtonLink>
          </div>
        </div>
      </div>
    );
  }

  const currentItem = validItems[currentIndex];

  const goToNext = () => {
    if (currentIndex < validItems.length - 1) {
      setCurrentIndex(currentIndex + 1);

      // Reset to show front of card
      setFlipped(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);

      // Reset to show front of card
      setFlipped(false);
    }
  };

  const toggleKnown = () => {
    const itemId = getId(currentItem);
    setKnownItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const goBack = () => navigate(`/quizzes/${category}/quizType`);

  return (
    <div className="select-quiz-styles">
      <h2 className="quiz-heading">{title} - {category}</h2>
      <div className="quiz-text mb-4">
        <span>
          {itemType} {currentIndex + 1} of {validItems.length}
        </span>
      </div>

      <Flashcard
        front={renderFront(currentItem)}
        back={renderBack(currentItem)}
        known={knownItems[getId(currentItem)] || false}
        onToggleKnown={toggleKnown}
        flipped={flipped}
        setFlipped={setFlipped}
      />

      <div className="flashcard-nav-buttons">
        <div className="flex gap-4 justify-center" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <button
            className="select-btns"
            style={{ width: '150px' }}
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            className="select-btns"
            style={{ width: '150px' }}
            onClick={goToNext}
            disabled={currentIndex === validItems.length - 1}
          >
            Next
          </button>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <ButtonLink onClick={goBack} to={''} className="nowrap-btn">Back to Quiz Type</ButtonLink>
        </div>
      </div>
    </div>
  );
}
