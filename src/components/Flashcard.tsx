import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Volume2 } from 'lucide-react';

import { FlashcardProps } from '../types';

export default function Flashcard({
  front,
  back,
  trackProgress = true,
  known = false,
  onToggleKnown
}: FlashcardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div
        className="relative w-96 h-60 perspective"
        onClick={() => setFlipped(!flipped)}
      >
        <motion.div
          className="absolute w-full h-full rounded-2xl shadow-lg bg-[#2e3348] text-white cursor-pointer"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div
            className="absolute w-full h-full flex flex-col justify-center items-center px-4 text-2xl"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="absolute top-2 left-2 text-sm text-gray-400 flex items-center gap-1">
              <Lightbulb size={16} /> Get a hint
            </div>
            <div className="absolute top-2 right-2">
              <Volume2 size={16} />
            </div>
            {front}
          </div>

          <div
            className="absolute w-full h-full flex items-center justify-center px-4 text-xl bg-[#1e2130] rounded-2xl"
            style={{transform: 'rotateY(180deg)', backfaceVisibility: 'hidden'}}
          >
            {back}
          </div>
        </motion.div>
      </div>

      {trackProgress && (
        <div className="mt-4 flex gap-4 items-center text-white">
          <span className="text-sm text-gray-400">Track if you know it or not</span>
          <button
            className={`px-4 py-1 rounded-full ${known ? 'bg-green-600' : 'bg-red-600'}`}
            onClick={onToggleKnown}
          >
            {known ? '✓' : '✗'}
          </button>
        </div>
      )}
    </div>
  );
}
