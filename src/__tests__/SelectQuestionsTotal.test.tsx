import SelectQuestionsTotal from '../pages/SelectQuestionsTotal';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { expect, afterEach, describe, it, vi } from 'vitest';
// import { QUESTION_NUMS } from '../constants';

afterEach(cleanup);

describe('Select Quiz', () => {
  it('renders without crashing', () => {
    render(<SelectQuestionsTotal startQuiz={vi.fn()} totalQuestions={0} />);
  });

  it('has a button for every quiz question amount under 600', () => {
    const { getByText } = render(
      <SelectQuestionsTotal startQuiz={vi.fn()} totalQuestions={600} />
    );
    expect(getByText('10').textContent).toBeDefined();
    expect(getByText('25').textContent).toBeDefined();
    expect(getByText('50').textContent).toBeDefined();
    expect(getByText('All (600)').textContent).toBeDefined();
  });

  it('Has a button for max amount equal to 601', () => {
    const { getByText } = render(
      <SelectQuestionsTotal startQuiz={vi.fn()} totalQuestions={601} />
    );
    expect(getByText('All (601)').textContent).toBeDefined();
  });

  it('calls startQuiz with the correct value when a quiz length button is clicked', () => {
    const startQuiz = vi.fn();
    const { getByText } = render(
      <SelectQuestionsTotal startQuiz={startQuiz} totalQuestions={600} />
    );

    // Test clicking on the first available quiz length button
    fireEvent.click(getByText('10'));
    expect(startQuiz).toHaveBeenCalledWith(10);

    // Test clicking on another quiz length button
    fireEvent.click(getByText('25'));
    expect(startQuiz).toHaveBeenCalledWith(25);
  });

  it('calls startQuiz with totalQuestions when the All button is clicked', () => {
    const startQuiz = vi.fn();
    const totalQuestions = 600;
    const { getByText } = render(
      <SelectQuestionsTotal startQuiz={startQuiz} totalQuestions={totalQuestions} />
    );

    fireEvent.click(getByText(`All (${totalQuestions})`));
    expect(startQuiz).toHaveBeenCalledWith(totalQuestions);
  });

  it('only shows quiz lengths that are less than or equal to totalQuestions', () => {
    const startQuiz = vi.fn();
    const totalQuestions = 20;
    const { queryByText } = render(
      <SelectQuestionsTotal startQuiz={startQuiz} totalQuestions={totalQuestions} />
    );

    // Should show buttons for quiz lengths <= 20
    expect(queryByText('10')).toBeInTheDocument();

    // Should not show buttons for quiz lengths > 20
    expect(queryByText('25')).not.toBeInTheDocument();
    expect(queryByText('50')).not.toBeInTheDocument();

    // Should show the All button
    expect(queryByText(`All (${totalQuestions})`)).toBeInTheDocument();
  });
});
