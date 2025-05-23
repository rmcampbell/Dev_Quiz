export interface SelectCategoryProps {
  selectQuiz: (category: string, index: number) => void;
  startRandomQuiz: () => void;
}

export interface SelectQuestionsTotalProps {
  startQuiz: (e: number) => void;
  totalQuestions: number; // Add the totalQuestions prop
}
