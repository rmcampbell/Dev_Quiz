import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';

import { ALL_CATEGORIES, QUESTION_NUMS } from '../constants';
import { correctModalResponses, incorrectModalResponses } from '../data/quizzes/modal-responses';
import Questions from '../pages/Questions';
import '../stylesheets/App.css';
import Results from '../pages/Results';
import SelectCategory from '../pages/SelectCategory';
import SelectQuestionsTotal from '../pages/SelectQuestionsTotal';
import { shuffle } from '../utils/utilities.ts';
import { QuizState } from '../types';

const QuizTemplate: React.FC = () => {
  const navigate = useNavigate();

  // Consolidated state using QuizState interface
  const [quizState, setQuizState] = useState<QuizState>({
    quiz: ALL_CATEGORIES,
    questionNumber: 1,
    points: 0,
    message: '',
    correct: false,
    displayExplanation: '',
    showReference: '',
    selectedOption: '',
    chosenAnswer: '',
    chooseAnswer: false,
    showModal: false,
    choicesArr: [],
    selectedCategory: '',
    filteredQuestions: ALL_CATEGORIES
  });

  // Destructure state for easier access
  const {
    quiz,
    questionNumber,
    points,
    message,
    correct,
    displayExplanation,
    showReference,
    selectedOption,
    chosenAnswer,
    chooseAnswer,
    showModal,
    choicesArr,
    selectedCategory,
    filteredQuestions
  } = quizState;

  // Helper function to update specific state properties
  const updateQuizState = useCallback((updates: Partial<QuizState>) => {
    setQuizState(prevState => ({ ...prevState, ...updates }));
  }, []);

  // Memoize current question and total questions calculations
  const currQuestion = useMemo(() => quiz[questionNumber - 1], [quiz, questionNumber]);
  const totalQuestions = useMemo(() => quiz.length, [quiz]);

  // Alert user function for beforeunload event
  const alertUser = useCallback((e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    e.returnValue = '';
  }, []);

  //detects if the user tries the refresh the page in the middle of the quiz
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => window.removeEventListener('beforeunload', alertUser);
  }, [alertUser]);

  // Store the selected quiz number for potential future use
  const [, setSelectedQuiz] = useState(0);

  // Memoize the shuffle modal responses function
  const shuffleModalResponses = useCallback((responses: string[]) => {
    const shuffleModalArr = shuffle<string>(responses);
    return shuffleModalArr[0];
  }, []);

  const selectQuiz = useCallback((category: string, index: number) => {
    setSelectedQuiz(QUESTION_NUMS[index]);

    // Filter questions based on the selected category
    const filteredQuiz = ALL_CATEGORIES.filter(q => q.category === category);

    updateQuizState({
      selectedCategory: category,
      filteredQuestions: filteredQuiz
    });

    navigate(`/quizzes/${category}/questionsTotal`);
  }, [navigate, updateQuizState]);

  const startQuiz = useCallback((quizQuestionsCount: number) => {
    const shuffledQuiz = shuffle(filteredQuestions).slice(0, quizQuestionsCount);

    const newChoicesArr: string[][] = shuffledQuiz.map((obj) => {
      const validDistractors = obj.distractors.filter((str: string) => str.trim().length > 0);
      if (Array.isArray(obj.answer)) {
        // For multi-select questions, include all answers and distractors
        return shuffle<string>([...obj.answer, ...validDistractors]);
      } else {
        // For single-select questions, include the answer and distractors
        return shuffle<string>([obj.answer, ...validDistractors]);
      }
    });

    updateQuizState({ quiz: shuffledQuiz, choicesArr: newChoicesArr });

    navigate(`/quizzes/${selectedCategory}/questions/1/of/${quizQuestionsCount}`);
  }, [filteredQuestions, navigate, selectedCategory, updateQuizState]);

  // Function to start a random quiz
  const startRandomQuiz = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * QUESTION_NUMS.length);
    setSelectedQuiz(QUESTION_NUMS[randomIndex]);

    // Generate a random set of questions
    const randomQuestions = shuffle(ALL_CATEGORIES).slice(0, QUESTION_NUMS[randomIndex]);

    updateQuizState({
      selectedCategory: 'Random',
      quiz: randomQuestions
    });

    navigate('/quizzes/Random/questionsTotal');
  }, [navigate, updateQuizState]);

  const nextQuestion = useCallback(() => {
    if (questionNumber >= quiz.length) {
      navigate(`/quizzes/${selectedCategory}/results`);
      return;
    }

    updateQuizState({
      questionNumber: questionNumber + 1,
      chooseAnswer: false
    });

    navigate(`/quizzes/${selectedCategory}/questions/${questionNumber + 1}/of/${quiz.length}`);
  }, [questionNumber, quiz.length, navigate, selectedCategory, updateQuizState]);

  const resetQuiz = useCallback(() => {
    // Reset selected quiz
    setSelectedQuiz(0);

    // Reset all quiz state
    updateQuizState({
      selectedCategory: '',
      showModal: false,
      chooseAnswer: false,
      points: 0,
      questionNumber: 1
    });

    navigate('/quizzes');
  }, [navigate, updateQuizState]);

  const selectOption = useCallback((option: string) => {
    if (Array.isArray(currQuestion.answer)) {
      // For multi-select questions
      let newSelectedOption: string[];

      if (Array.isArray(selectedOption)) {
        // If the option is already selected, remove it
        if (selectedOption.includes(option)) {
          newSelectedOption = selectedOption.filter(item => item !== option);
        }
        // If we haven't reached the maximum number of selections, add the option
        else if (selectedOption.length < currQuestion.answer.length) {
          newSelectedOption = [...selectedOption, option];
        }
        // If we've reached the maximum, replace the first selected option
        else {
          newSelectedOption = [...selectedOption.slice(1), option];
        }
      } else {
        // Initialize the array with the first selection
        newSelectedOption = [option];
      }

      updateQuizState({ selectedOption: newSelectedOption });
    } else {
      // For single-select questions
      updateQuizState({ selectedOption: option });
    }
  }, [currQuestion.answer, selectedOption, updateQuizState]);

  const checkAnswer = useCallback(() => {
    const userAnswer = selectedOption;

    // Ensure option was selected before checking the answer
    if (!userAnswer || (Array.isArray(userAnswer) && userAnswer.length === 0)) {
      return;
    }

    let isCorrect = false;

    if (Array.isArray(currQuestion.answer) && Array.isArray(userAnswer)) {
      // For multi-select questions
      // Check if the user selected the correct number of answers
      if (userAnswer.length === currQuestion.answer.length) {
        // Check if all selected answers are correct
        isCorrect = currQuestion.answer.every(answer => userAnswer.includes(answer));
      }
    } else if (!Array.isArray(currQuestion.answer) && !Array.isArray(userAnswer)) {
      // For single-select questions
      isCorrect = userAnswer === currQuestion.answer;
    }

    // Update all related state in a single call
    updateQuizState({
      selectedOption: Array.isArray(currQuestion.answer) ? [] : '',
      chooseAnswer: true,
      chosenAnswer: userAnswer,
      correct: isCorrect,
      points: isCorrect ? points + 1 : points,
      message: isCorrect ? shuffleModalResponses(correctModalResponses) : shuffleModalResponses(incorrectModalResponses),
      displayExplanation: currQuestion?.explanation || '',
      showReference: currQuestion?.link || '',
      showModal: true
    });
  }, [currQuestion, points, selectedOption, shuffleModalResponses, updateQuizState]);

  // Memoize the modal props to prevent unnecessary object recreations
  const modalProps = useMemo(() => ({
    correct,
    chosenAnswer,
    // Include the correct answer only when the user's answer is incorrect
    ...(correct ? {} : { correctAnswer: currQuestion.answer }),
    message,
    points,
    displayExplanation,
    showReference,
    show: showModal, // Use showModal instead of show
    nextQuestion
  }), [
    correct,
    chosenAnswer,
    currQuestion.answer,
    message,
    points,
    displayExplanation,
    showReference,
    showModal,
    nextQuestion
  ]);

  // Memoize the results props
  const resultsProps = useMemo(() => ({
    points,
    totalQuestions,
    resetQuiz
  }), [points, totalQuestions, resetQuiz]);

  // Memoize the question props
  const questionProps = useMemo(() => ({
    currQuestion,
    questionNumber,
    totalQuestions,
    modalProps,
    chooseAnswer,
    points,
    choicesArr,
    selectedOption,
    selectOption,
    checkAnswer
  }), [
    currQuestion,
    questionNumber,
    totalQuestions,
    modalProps,
    chooseAnswer,
    points,
    choicesArr,
    selectedOption,
    selectOption,
    checkAnswer
  ]);

  return (
    <>
      <ButtonLink to="/">Home</ButtonLink>
      <Routes>
        <Route path="/" element={<SelectCategory selectQuiz={selectQuiz} startRandomQuiz={startRandomQuiz} />} />
        <Route
          path="/:category/questionsTotal"
          element={
            <SelectQuestionsTotal startQuiz={startQuiz} totalQuestions={filteredQuestions.length} />
          }
        />
        <Route
          path={'/:category/questions/:currentQuestion/of/:total'}
          element={<Questions {...questionProps} {...modalProps} />}
        />
        <Route
          path={'/:category/results'}
          element={<Results {...resultsProps} />}
        />
      </Routes>
    </>
  );
};

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(QuizTemplate);
