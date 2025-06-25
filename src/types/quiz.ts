import { MouseEventHandler } from 'react';
import { Acronym, Term } from './flashcards';

export interface Quiz {
  category: string;
  questions: Question[];
  terms?: Term[];
  acronyms?: Acronym[];
}

export interface Question {
  question: string;
  answer: string | string[];
  distractors: string[];
  explanation: string;
  questionNumber?: number | undefined;
  references?: Reference[] | undefined;
}

export interface Reference {
  title: string;
  url: string;
}

export interface QuizQuestion {
  message: string;
  points: number;
  chosenAnswer: string | string[];
  correct: boolean;
  correctAnswer?: string | string[];
  displayExplanation: string;
  references?: Reference[] | undefined;
  nextQuestion: MouseEventHandler; // Used as showModal in QuizTemplate.tsx
  show: boolean;
}

export interface QuizProps {
  currQuestion: Question;
  questionNumber: number;
  totalQuestions: number;
  modalProps: QuizQuestion;
  chooseAnswer: boolean;
  points: number;
  choicesArr: string[][];
  selectedOption: string | string[];
  selectOption: (option: string) => void;
  checkAnswer: () => void;
}

// Type for the quiz state to consolidate related state variables
export interface QuizState {
  quiz: Question[];
  questionNumber: number;
  points: number;
  selectedOption: string | string[];
  chosenAnswer: string | string[];
  chooseAnswer: boolean;
  showModal: boolean;
  correct: boolean;
  message: string;
  displayExplanation: string;
  references?: Reference[] | undefined;
  choicesArr: string[][];
  selectedCategory: string;
  filteredQuestions: Question[];
}

export interface PointTotals {
  points: number;
  totalQuestions: number;
  resetQuiz: () => void;
}
