import { test, expect, Page } from '@playwright/test';
import htmlQuizQuestions from '../src/data/quizzes/html-quiz';
import {
  correctModalResponses,
  incorrectModalResponses
} from '../src/data/quizzes/modal-responses';

interface QuizQuestion {
  question: string;
  answer: string;
  distractors: string[]; // Optional distractor, if present
}

type ModalResponses = string[];

const isDefined = <T>(value: T | undefined): value is T => {
  return value !== undefined;
};

test.beforeEach(async ({ page }) => {
  await page.goto('/#/quizzes');
});

async function selectQuizCategory(page: Page, category: string, questionCount: string) {
  await page.getByRole('button', { name: category }).click();
  await page.getByRole('button', { name: questionCount, exact: true }).click();
  await expect(page.getByText('Points: 0')).toBeVisible();
}

async function getQuestionData(q: string): Promise<QuizQuestion> {
  const questionData = htmlQuizQuestions.questions.find(({ question }) => question.includes(q));
  if (!isDefined(questionData)) {
    throw new Error('Question not found in the quiz data.');
  }
  return questionData;
}

async function verifyModalResponse(page: Page, expectedResponses: ModalResponses, expectedPoints: string) {
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();

  const message = await dialog.getByRole('heading', { level: 2 }).textContent();
  const isMessageInExpectedSet = expectedResponses.some(response => message?.includes(response));

  expect(isMessageInExpectedSet).toEqual(true);
  await expect(dialog.getByText(`Points: ${expectedPoints}`)).toBeVisible();
}

test('should show \'success\' modal after selecting the correct option', async ({ page }) => {
  await selectQuizCategory(page, 'HTML', '10');

  const question = await page.locator('legend').textContent();
  const questionData = await getQuestionData(question || '');

  const answer = questionData.answer;
  await page.getByRole('button', { name: answer }).click();
  await page.getByRole('button', { name: 'Submit', exact: true }).click();

  await verifyModalResponse(page, correctModalResponses, '1');
});

test('should show \'failure\' modal after selecting the wrong option', async ({
  page
}) => {
  await selectQuizCategory(page, 'HTML', '10');

  const question = await page.locator('legend').textContent();
  const questionData = await getQuestionData(question || '');

  const [distractor] = questionData.distractors;
  await page.getByRole('button', { name: distractor, exact: true }).click();
  await page.getByRole('button', { name: 'Submit', exact: true }).click();

  await verifyModalResponse(page, incorrectModalResponses, '0');
});
