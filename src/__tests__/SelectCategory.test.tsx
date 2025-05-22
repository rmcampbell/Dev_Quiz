import SelectCategory from '../pages/SelectCategory';
import { render, cleanup, RenderResult, fireEvent } from '@testing-library/react';
import { expect, afterEach, describe, it, vi } from 'vitest';
// import { CATEGORIES } from '../constants';

// Mock the constants module to provide predictable test data
vi.mock('../constants', () => ({
  CATEGORIES: ['SecurityX'],
  QUESTION_NUMS: [5, 10, 25, 50, 100],
  ALL_CATEGORIES: [],
  ROUNDED_QUESTION_COUNT: 0
}));

afterEach(cleanup);

describe('SelectCategory', () => {
  it('displays the Choose a Category screen', () => {
    const selectQuiz = vi.fn();
    const startRandomQuiz = vi.fn();

    const { getByText }: RenderResult = render(
      <SelectCategory selectQuiz={selectQuiz} startRandomQuiz={startRandomQuiz} />
    );
    expect(getByText('Choose a Category')).toBeInTheDocument();
  });

  it('displays the correct categories', () => {
    const selectQuiz = vi.fn();
    const startRandomQuiz = vi.fn();

    const { getByText } = render(
      <SelectCategory selectQuiz={selectQuiz} startRandomQuiz={startRandomQuiz} />
    );

    // Check that the SecurityX category is displayed
    expect(getByText('SecurityX')).toBeInTheDocument();
  });

  it('calls selectQuiz with the correct category and index when a category button is clicked', () => {
    const selectQuiz = vi.fn();
    const startRandomQuiz = vi.fn();

    const { getByText } = render(
      <SelectCategory selectQuiz={selectQuiz} startRandomQuiz={startRandomQuiz} />
    );

    fireEvent.click(getByText('SecurityX'));
    expect(selectQuiz).toHaveBeenCalledWith('SecurityX', 0);
  });

  it('calls startRandomQuiz when the Random button is clicked', () => {
    const selectQuiz = vi.fn();
    const startRandomQuiz = vi.fn();

    const { getByText } = render(
      <SelectCategory selectQuiz={selectQuiz} startRandomQuiz={startRandomQuiz} />
    );

    fireEvent.click(getByText('Random'));
    expect(startRandomQuiz).toHaveBeenCalled();
  });
});
