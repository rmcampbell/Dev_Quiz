import Results from '../pages/Results';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import { expect, afterEach, describe, it } from 'vitest';

afterEach(cleanup);

// Mock the react-confetti module to prevent rendering actual confetti
vi.mock('react-confetti', () => ({
  default: () => <div data-testid="confetti-mock" />
}));

describe('Results', () => {
  it('Renders without crashing', () => {
    const resetQuiz = vi.fn();
    render(<Results points={0} totalQuestions={10} resetQuiz={resetQuiz} />);
  });

  it('Displays the accurate score for wrong answers', () => {
    const resetQuiz = vi.fn();
    const { getByText } = render(
      <Results points={0} totalQuestions={10} resetQuiz={resetQuiz} />
    );
    expect(
      getByText('0 / 10 points: 0%').textContent
    ).toBeDefined();
  });

  it('Displays the accurate score for partial correct answers', () => {
    const resetQuiz = vi.fn();
    const { getByText } = render(
      <Results points={5} totalQuestions={10} resetQuiz={resetQuiz} />
    );
    expect(
      getByText('5 / 10 points: 50%').textContent
    ).toBeDefined();
  });

  it('Displays the perfect score message if all answers are correct', () => {
    const resetQuiz = vi.fn();
    const { getByText } = render(
      <Results points={10} totalQuestions={10} resetQuiz={resetQuiz} />
    );
    expect(
      getByText('Wow! Perfect Score!').textContent
    ).toBeDefined();
  });

  it('renders with perfect score and showConfetti is true', () => {
    const props = {
      points: 10,
      totalQuestions: 10,
      resetQuiz: vi.fn()
    };
    const { getByTestId } = render(<Results {...props} />);
    const confettiElement = getByTestId('confetti-mock');
    expect(confettiElement).toBeInTheDocument();
  });

  it('does not render confetti when score is not perfect', () => {
    const props = {
      points: 9,
      totalQuestions: 10,
      resetQuiz: vi.fn()
    };
    const { queryByTestId } = render(<Results {...props} />);
    const confettiElement = queryByTestId('confetti-mock');
    expect(confettiElement).not.toBeInTheDocument();
  });

  it('calls resetQuiz when the Play again button is clicked', () => {
    const resetQuiz = vi.fn();
    const { getByText } = render(
      <Results points={5} totalQuestions={10} resetQuiz={resetQuiz} />
    );

    fireEvent.click(getByText('Play again?'));
    expect(resetQuiz).toHaveBeenCalled();
  });
});
