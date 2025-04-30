import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { PointTotals } from '../types';

const Results: React.FC<PointTotals> = ({ points, totalQuestions, resetQuiz }: PointTotals) => {
  const totalPercentageCorrect = (Math.floor(points) / totalQuestions) * 100;

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Update the window size when it changes
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (points === totalQuestions) {
      setShowConfetti(true);

      // Remove the confetti after 5 seconds
      const confettiTimeout = setTimeout(() => setShowConfetti(false), 5000);

      // Clean up the timeout on unmount
      return () => clearTimeout(confettiTimeout);
    }
  }, [points, totalQuestions]);

  return (
    <div className="results-div">
      <h1 className="results-heading">Results</h1><br/><br/>
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}
      <h2>
        {points === totalQuestions ? 'Wow! Perfect Score!' : 'You received'}{' '}
      </h2><br/>
      <h2>{points} out of {totalQuestions} points: {totalPercentageCorrect}%</h2>
      <br/>
      <button onClick={resetQuiz} className="results-btn">Play again?</button>
    </div>
  );
};
export default Results;
