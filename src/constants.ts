import accessibilityQuiz from "./data/accessibility-quiz";
import agileQuiz from "./data/agile-quiz";
import cloudComputingQuiz from "./data/cloud-computing-quiz";
import cssQuiz from "./data/css-quiz";
import devopsQuiz from "./data/devops-quiz";
import generalCSQuiz from "./data/general-cs-quiz";
import gitQuiz from "./data/git-quiz";
import htmlQuiz from "./data/html-quiz";
import informationTechnologyQuiz from "./data/information-technology-quiz";
import javascriptQuiz from "./data/javascript-quiz";
import linuxQuiz from "./data/linux-quiz";
import pythonQuiz from "./data/python-quiz";
import qualityAssuranceQuiz from "./data/quality-assurance-quiz";
import regexQuiz from "./data/regex-quiz";
import securityQuiz from "./data/security-quiz";
import sqlQuiz from "./data/sql-quiz";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapQuizCategory = (quiz: any[], category: string) => {
  return quiz.map(q => ({ ...q, Category: category }));
};

export const QUESTION_NUMS = [5, 10, 25, 50, 100];

export const CATEGORIES = [
  "Accessibility",
  "Agile",
  "Cloud Computing",
  "CSS",
  "DevOps",
  "General CS",
  "Git",
  "HTML",
  "IT",
  "JavaScript",
  "Linux",
  "Python",
  "QA",
  "Regex",
  "Security",
  "SQL"
].sort();

export const ALL_CATEGORIES = [
  ...mapQuizCategory(accessibilityQuiz, "Accessibility"),
  ...mapQuizCategory(agileQuiz, "Agile"),
  ...mapQuizCategory(cloudComputingQuiz, "Cloud Computing"),
  ...mapQuizCategory(cssQuiz, "CSS"),
  ...mapQuizCategory(devopsQuiz, "DevOps"),
  ...mapQuizCategory(generalCSQuiz, "General CS"),
  ...mapQuizCategory(gitQuiz, "Git"),
  ...mapQuizCategory(htmlQuiz, "HTML"),
  ...mapQuizCategory(informationTechnologyQuiz, "IT"),
  ...mapQuizCategory(javascriptQuiz, "JavaScript"),
  ...mapQuizCategory(linuxQuiz, "Linux"),
  ...mapQuizCategory(pythonQuiz, "Python"),
  ...mapQuizCategory(qualityAssuranceQuiz, "QA"),
  ...mapQuizCategory(regexQuiz, "Regex"),
  ...mapQuizCategory(securityQuiz, "Security"),
  ...mapQuizCategory(sqlQuiz, "SQL")
];

export const ROUNDED_QUESTION_COUNT = 1200;
