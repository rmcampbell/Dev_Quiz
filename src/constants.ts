// import accessibilityQuiz from "./data/quizzes/accessibility-quiz";
// import agileQuiz from "./data/quizzes/agile-quiz";
// import cloudComputingQuiz from "./data/quizzes/cloud-computing-quiz";
// import cssQuiz from "./data/quizzes/css-quiz";
// import devopsQuiz from "./data/quizzes/devops-quiz";
// import generalCSQuiz from "./data/quizzes/general-cs-quiz";
// import gitQuiz from "./data/quizzes/git-quiz";
// import htmlQuiz from "./data/quizzes/html-quiz";
// import informationTechnologyQuiz from "./data/quizzes/information-technology-quiz";
// import javascriptQuiz from "./data/quizzes/javascript-quiz";
// import linuxQuiz from "./data/quizzes/linux-quiz";
// import pythonQuiz from "./data/quizzes/python-quiz";
// import qualityAssuranceQuiz from "./data/quizzes/quality-assurance-quiz";
// import regexQuiz from "./data/quizzes/regex-quiz";
import securityQuiz from './data/quizzes/security-quiz.ts';
import securityXQuiz from './data/quizzes/securityx-quiz.ts';
// import sqlQuiz from "./data/quizzes/sql-quiz";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapQuizCategory = (quiz: any[], category: string) => {
  return quiz.map(q => ({ ...q, Category: category }));
};

export const QUESTION_NUMS = [5, 10, 25, 50, 100];

export const CATEGORIES = [
  // "Accessibility",
  // "Agile",
  // "Cloud Computing",
  // "CSS",
  // "DevOps",
  // "General CS",
  // "Git",
  // "HTML",
  // "IT",
  // "JavaScript",
  // "Linux",
  // "Python",
  // "QA",
  // "Regex",
  'Security',
  'SecurityX'
  // "SQL"
].sort();

export const ALL_CATEGORIES = [
  // ...mapQuizCategory(accessibilityQuiz, "Accessibility"),
  // ...mapQuizCategory(agileQuiz, "Agile"),
  // ...mapQuizCategory(cloudComputingQuiz, "Cloud Computing"),
  // ...mapQuizCategory(cssQuiz, "CSS"),
  // ...mapQuizCategory(devopsQuiz, "DevOps"),
  // ...mapQuizCategory(generalCSQuiz, "General CS"),
  // ...mapQuizCategory(gitQuiz, "Git"),
  // ...mapQuizCategory(htmlQuiz, "HTML"),
  // ...mapQuizCategory(informationTechnologyQuiz, "IT"),
  // ...mapQuizCategory(javascriptQuiz, "JavaScript"),
  // ...mapQuizCategory(linuxQuiz, "Linux"),
  // ...mapQuizCategory(pythonQuiz, "Python"),
  // ...mapQuizCategory(qualityAssuranceQuiz, "QA"),
  // ...mapQuizCategory(regexQuiz, "Regex"),
  ...mapQuizCategory(securityQuiz, 'Security'),
  ...mapQuizCategory(securityXQuiz, 'SecurityX')
  // ...mapQuizCategory(sqlQuiz, "SQL")
];

export const ROUNDED_QUESTION_COUNT = 1200;
