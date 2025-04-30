import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ButtonLink from './components/ButtonLink';

// import FCCLogo from "./components/FCCLogo";
import { ALL_CATEGORIES, QUESTION_NUMS } from './constants';
import { correctModalResponses, incorrectModalResponses } from './data/quizzes/modal-responses.ts';
import Questions from './pages/Questions';
import './stylesheets/App.css';
import Results from './pages/Results';
import SelectCategory from './pages/SelectCategory';
import SelectQuestionsTotal from './pages/SelectQuestionsTotal';
import shuffle from './shuffle-arr';

const Main: React.FC = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(ALL_CATEGORIES);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [correct, setCorrect] = useState(false);
  const [displayExplanation, setDisplayExplanation] = useState('');
  const [showReference, setShowReference] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [chosenAnswer, setChosenAnswer] = useState('');
  const [chooseAnswer, setChooseAnswer] = useState(false);
  const [show, setShowModal] = useState(false);

  const [choicesArr, setChoicesArr] = useState<string[][]>([]);
  const currQuestion = quiz[questionNumber - 1];
  const totalQuestions = quiz.length;
  const [filteredQuestions, setFilteredQuestions] = useState(ALL_CATEGORIES);

  //detects if the user tries the refresh the page in the middle of the quiz
  useEffect(() => {
    window.addEventListener('beforeunload', alertUser);
    return () => window.removeEventListener('beforeunload', alertUser);
  }, []);

  const alertUser = (e: {
    preventDefault: () => void;
    returnValue: string;
  }) => {
    e.preventDefault();
    e.returnValue = '';
  };
  const [selectedCategory, setSelectedCategory] = useState('');
  const [, setSelectedQuiz] = useState(0);

  const selectQuiz = (category: string, index: number) => {
    setSelectedCategory(category);
    setSelectedQuiz(QUESTION_NUMS[index]);

    // Filter questions based on the selected category
    const filteredQuiz = ALL_CATEGORIES.filter(q => q.Category === category);
    setFilteredQuestions(filteredQuiz);
    navigate(`/quizzes/${category}/questionsTotal`);
  };

  const startQuiz = (quizQuestionsCount: number) => {
    const validQuestions = filteredQuestions.filter((q) => {
      const hasValidAnswer = q.Answer && q.Answer.trim().length > 0;
      const validDistractors = Array.isArray(q.Distractors) && q.Distractors.filter((d: string) => d.trim().length > 0).length > 0;
      return hasValidAnswer && validDistractors;
    });

    const shuffledQuiz = shuffle(validQuestions).slice(0, quizQuestionsCount);

    const choicesArr: string[][] = shuffledQuiz.map((obj) => {
      const validDistractors = obj.Distractors.filter((str: string) => str.trim().length > 0);
      return shuffle<string>([obj.Answer, ...validDistractors]);
    });

    setQuiz(shuffledQuiz);
    setChoicesArr(choicesArr);
    navigate(`/quizzes/${selectedCategory}/questions/1/of/${quizQuestionsCount}`);
  };

  // Function to start a random quiz
  const startRandomQuiz = () => {
    // Set the selected category to "Random"
    setSelectedCategory('Random');

    const randomIndex = Math.floor(Math.random() * QUESTION_NUMS.length);
    setSelectedQuiz(QUESTION_NUMS[randomIndex]);

    // Generate a random set of questions
    const randomQuestions = shuffle(ALL_CATEGORIES).slice(0, QUESTION_NUMS[randomIndex]);
    setQuiz(randomQuestions);
    navigate('/quizzes/Random/questionsTotal');
  };

  const nextQuestion = () => {
    if (questionNumber >= quiz.length) {
      navigate(`/quizzes/${selectedCategory}/results`);
      return;
    }
    setQuestionNumber(curr => curr + 1);
    setChooseAnswer(false);
    navigate(`/quizzes/${selectedCategory}/questions/${questionNumber + 1}/of/${quiz.length}`);
  };

  const resetQuiz = () => {
    // Reset the selected category
    setSelectedCategory('');

    // Reset selected quiz
    setSelectedQuiz(0);
    setShowModal(false);
    setChooseAnswer(false);
    setPoints(0);
    setQuestionNumber(1);
    navigate('/quizzes');
  };

  const shuffleModalResponses = (responses: string[]) => {
    const shuffleModalArr = shuffle<string>(responses);
    return shuffleModalArr[0];
  };

  const selectOption = (option: string) => setSelectedOption(option);

  const checkAnswer = () => {
    const userAnswer = selectedOption;

    // Ensure option was selected before checking answer
    if (!userAnswer) {
      return;
    }

    setSelectedOption('');
    setChooseAnswer(true);
    setChosenAnswer(userAnswer);
    if (userAnswer !== currQuestion.Answer) {
      setCorrect(false);
      setMessage(shuffleModalResponses(incorrectModalResponses));
      setDisplayExplanation(currQuestion.Explanation);
      setShowReference(currQuestion.Link);
      setShowModal(true);
    } else {
      setCorrect(true);
      setPoints(curr => curr + 1);
      setMessage(shuffleModalResponses(correctModalResponses));
      setDisplayExplanation(currQuestion.Explanation);
      setShowReference(currQuestion.Link);
      setShowModal(true);
    }
  };

  const modalProps = {
    correct,
    chosenAnswer,
    message,
    points,
    displayExplanation,
    showReference,
    show,
    nextQuestion
  };

  const resultsProps = {
    points,
    totalQuestions,
    resetQuiz
  };

  const questionProps = {
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
  };

  return (
    <>
      <ButtonLink to="/">Home</ButtonLink>
      {/*<FCCLogo />*/}
      <Routes>
        <Route
          path="/"
          element={
            <SelectCategory
              selectQuiz={selectQuiz}
              startRandomQuiz={startRandomQuiz}
            />
          }
        />
        <Route
          path="/:category/questionsTotal"
          element={
            <SelectQuestionsTotal
              startQuiz={startQuiz}
              totalQuestions={filteredQuestions.length}
            />
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
export default Main;
