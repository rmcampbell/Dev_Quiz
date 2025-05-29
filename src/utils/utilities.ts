import { Acronym, Quiz, Term } from '../types';

//fisher yates shuffle
export function shuffle<Type>(array: Type[]): Type[] {
  // Create a copy of the array to avoid mutating the original
  const arrayCopy = [...array];
  let curInd = arrayCopy.length,
    randInd: number;

  while (curInd > 0) {
    randInd = Math.floor(Math.random() * curInd);
    curInd--;

    [arrayCopy[curInd], arrayCopy[randInd]] = [arrayCopy[randInd], arrayCopy[curInd]];
  }

  return arrayCopy;
}

// Functions for accessing terms and acronyms
export const getQuizByCategory = (quizzes: Quiz[], category: string): Quiz | undefined => {
  return quizzes.find(quiz => quiz.category === category);
};

export const getTermsByCategory = (quizzes: Quiz[], category: string): Term[] => {
  const quiz = getQuizByCategory(quizzes, category);
  return quiz?.terms || [];
};

export const getAcronymsByCategory = (quizzes: Quiz[], category: string): Acronym[] => {
  const quiz = getQuizByCategory(quizzes, category);
  return quiz?.acronyms || [];
};

export const hasTerms = (quizzes: Quiz[], category: string): boolean => {
  const terms = getTermsByCategory(quizzes, category);
  return terms.length > 0 && terms.some(term => term.definition.trim() !== '');
};

export const hasAcronyms = (quizzes: Quiz[], category: string): boolean => {
  const acronyms = getAcronymsByCategory(quizzes, category);
  return acronyms.length > 0 && acronyms.some(acronym => acronym.definition.trim() !== '');
};
