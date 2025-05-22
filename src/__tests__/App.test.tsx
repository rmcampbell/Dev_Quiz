import App from '../App';
import { cleanup, render, screen } from '@testing-library/react';
import { HashRouter as Router, MemoryRouter } from 'react-router-dom';
import { afterEach, describe, it, vi, expect } from 'vitest';

// Mock the components that are rendered by the routes
vi.mock('../pages/WelcomePage', () => ({
  default: () => <div data-testid="welcome-page-mock">WelcomePage Mock</div>
}));

vi.mock('../QuizTemplate', () => ({
  default: () => <div data-testid="quiz-template-mock">QuizTemplate Mock</div>
}));

afterEach(cleanup);

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <App />
      </Router>
    );
  });

  it('renders WelcomePage component for the root path', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('welcome-page-mock')).toBeInTheDocument();
  });

  it('renders QuizTemplate component for the /quizzes path', () => {
    render(
      <MemoryRouter initialEntries={['/quizzes']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('quiz-template-mock')).toBeInTheDocument();
  });

  it('renders QuizTemplate component for nested /quizzes paths', () => {
    render(
      <MemoryRouter initialEntries={['/quizzes/some-nested-path']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('quiz-template-mock')).toBeInTheDocument();
  });
});
