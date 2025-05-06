import { ALL_CATEGORIES } from '../constants';
import { test, expect, describe } from 'vitest';

describe('Every question is valid', () => {
  test.each(ALL_CATEGORIES)(
    'Every question has an answer, explanation, a link and three distractions',
    input => {
      expect(input).toHaveProperty('question');
      expect(input).toHaveProperty('answer');
      expect(input).toHaveProperty('Distractors');
      expect(input).toHaveProperty('Explanation');
      expect(input).toHaveProperty('Link');
    }
  );
  test.each(ALL_CATEGORIES)(
    'There are no empty answers, explanations,links or distractions.',
    input => {
      expect(input.question.length).toBeGreaterThan(0);
      expect(input.answer.length).toBeGreaterThan(0);
      expect(input.distractors.length).toBeGreaterThan(0);
      expect(input.explanation.length).toBeGreaterThan(0);
      expect(input.link.length).toBeGreaterThan(0);
    }
  );
});
