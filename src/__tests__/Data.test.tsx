import { ALL_CATEGORIES } from '../constants';
import { test, expect, describe } from 'vitest';

describe('Every question is valid', () => {
  test.each(ALL_CATEGORIES)(
    'Every question has an answer, explanation, and distractors',
    input => {
      expect(input).toHaveProperty('question');
      expect(input).toHaveProperty('answer');
      expect(input).toHaveProperty('distractors');
      expect(input).toHaveProperty('explanation');
      expect(input.distractors.length).toBeGreaterThan(0);
    }
  );

  test.each(ALL_CATEGORIES)(
    'There are no empty questions, answers, or distractions.',
    input => {
      expect(input.question.length).toBeGreaterThan(0);
      expect(input.answer.length).toBeGreaterThan(0);
      expect(input.distractors.length).toBeGreaterThan(0);
    }
  );
});
