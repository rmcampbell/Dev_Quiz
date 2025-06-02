export interface SelectCategoryProps {
  selectQuiz: (category: string, index: number) => void;
  startRandomQuiz: () => void;
}

export interface SelectQuizTypeProps {
  selectedCategory: string;
  goBack: () => void;
}

export interface SelectQuestionsTotalProps {
  startQuiz: (e: number) => void;
  totalQuestions: number; // Add the totalQuestions prop
  goBack: () => void; // Add back button functionality
}
