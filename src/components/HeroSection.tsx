import React from 'react';
import '../stylesheets/HeroSection.css';
import { ROUNDED_QUESTION_COUNT } from '../constants';
import ButtonLink from './ButtonLink';

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>{`Practice with ${ROUNDED_QUESTION_COUNT}+ Questions`}</h1>
        </div>
        <div className="hero-button">
          <ButtonLink to="/quizzes" size="large">Test Your Knowledge!</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
