import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Volume2 } from 'lucide-react';

import { FlashcardProps } from '../types';
import '../stylesheets/Flashcard.css';
import '../stylesheets/Modal.css';

export default function Flashcard({
  front,
  back,
  trackProgress = true,
  known = false,
  onToggleKnown,
  flipped: controlledFlipped,
  setFlipped: controlledSetFlipped
}: FlashcardProps) {
  const [internalFlipped, setInternalFlipped] = useState(false);

  // Use controlled props if provided, otherwise use internal state
  const flipped = controlledFlipped !== undefined ? controlledFlipped : internalFlipped;
  const setFlipped = controlledSetFlipped || setInternalFlipped;

  return (
    <div className="quiz-div">
      <div
        className="perspective flashcard-container"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="flashcard-content"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front of card */}
          <div
            className="flashcard-face"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="modal-header">
              <h2 className="modal-text" style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
                <Lightbulb size={16} className="flashcard-icon" />
                <div style={{ flex: 1, textAlign: 'center' }}>Term</div>
              </h2>
            </div>
            <div className="modal-body">
              <div className="text-center modal-text">{front}</div>
            </div>
            <div className="modal-footer">
              <span className="flashcard-hint">Click to flip</span>
            </div>
          </div>

          {/* Back of card */}
          <div
            className="flashcard-face"
            style={{transform: 'rotateY(180deg)', backfaceVisibility: 'hidden'}}
          >
            <div className="modal-header">
              <h2 className="modal-text" style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
                <Volume2 size={16} className="flashcard-icon" />
                <div style={{ flex: 1, textAlign: 'center' }}>{front}</div>
              </h2>
            </div>
            <div className="modal-body">
              <div className="modal-text">{back}</div>
            </div>
            <div className="modal-footer">
              <span className="flashcard-hint">Click to flip back</span>
            </div>
          </div>
        </motion.div>
      </div>

      {trackProgress && (
        <div className="flashcard-track-progress">
          <span className="text-sm">Track if you know it or not</span>
          <button
            className={`modal-btn ${known ? 'known-btn' : 'unknown-btn'}`}
            onClick={onToggleKnown}
          >
            {known ? '✓ Known' : '✗ Unknown'}
          </button>
        </div>
      )}
    </div>
  );
}
