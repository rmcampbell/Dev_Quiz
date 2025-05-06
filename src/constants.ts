// import accessibilityQuiz from './data/quizzes/accessibility-quiz';
// import agileQuiz from './data/quizzes/agile-quiz';
// import cloudComputingQuiz from './data/quizzes/cloud-computing-quiz';
// import cssQuiz from './data/quizzes/css-quiz';
// import devopsQuiz from './data/quizzes/devops-quiz';
// import generalCSQuiz from './data/quizzes/general-cs-quiz';
// import gitQuiz from './data/quizzes/git-quiz';
// import htmlQuiz from './data/quizzes/html-quiz';
// import informationTechnologyQuiz from './data/quizzes/information-technology-quiz';
// import javascriptQuiz from './data/quizzes/javascript-quiz';
// import linuxQuiz from './data/quizzes/linux-quiz';
// import pythonQuiz from './data/quizzes/python-quiz';
// import qualityAssuranceQuiz from './data/quizzes/quality-assurance-quiz';
// import regexQuiz from './data/quizzes/regex-quiz';
// import securityQuiz from './data/quizzes/security-quiz.ts';
import securityXQuiz from './data/quizzes/securityx-quiz.ts';
// import sqlQuiz from './data/quizzes/sql-quiz';
import { Quiz } from './types.tsx';

const quizzes: Quiz[] = [
  // accessibilityQuiz,
  // agileQuiz,
  // cloudComputingQuiz,
  // cssQuiz,
  // devopsQuiz,
  // generalCSQuiz,
  // gitQuiz,
  // htmlQuiz,
  // informationTechnologyQuiz,
  // javascriptQuiz,
  // linuxQuiz,
  // pythonQuiz,
  // qualityAssuranceQuiz,
  // regexQuiz,
  // securityQuiz,
  securityXQuiz
  // sqlQuiz
];

const mapQuizCategory = (quiz: Quiz) => {
  const validQuestions = quiz.questions.filter((q) => {
    const hasValidAnswer = q.answer && q.answer.trim().length > 0;
    const validDistractors = Array.isArray(q.distractors) && q.distractors.filter((d: string) => d.trim().length > 0).length > 0;
    return hasValidAnswer && validDistractors;
  });

  return validQuestions.map((q) => ({ ...q, category: quiz.category }));
};

export const QUESTION_NUMS = [5, 10, 25, 50, 100];
export const CATEGORIES = [...new Set(quizzes.map(q => q.category))].sort();
export const ALL_CATEGORIES = quizzes.flatMap(mapQuizCategory);

export const ROUNDED_QUESTION_COUNT = (() => {
  const len = ALL_CATEGORIES.length;
  if (len >= 100) return Math.round(len / 100) * 100;
  if (len >= 10) return Math.round(len / 10) * 10;
  return len;
})();
