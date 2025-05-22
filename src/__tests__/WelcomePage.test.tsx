import WelcomePage from '../pages/WelcomePage';
import { cleanup, render } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import { afterEach, describe, it, vi, expect } from 'vitest';

// Mock the Navbar and HeroSection components
vi.mock('../components/Navbar', () => ({
  default: () => <div data-testid="navbar-mock">Navbar Mock</div>
}));

vi.mock('../components/HeroSection', () => ({
  default: () => <div data-testid="hero-section-mock">HeroSection Mock</div>
}));

afterEach(cleanup);

describe('Welcome Page', () => {
  it('renders without crashing', () => {
    render(
      <Router>
        <WelcomePage />
      </Router>
    );
  });

  it('renders the Navbar component', () => {
    const { getByTestId } = render(
      <Router>
        <WelcomePage />
      </Router>
    );
    expect(getByTestId('navbar-mock')).toBeInTheDocument();
  });

  it('renders the HeroSection component', () => {
    const { getByTestId } = render(
      <Router>
        <WelcomePage />
      </Router>
    );
    expect(getByTestId('hero-section-mock')).toBeInTheDocument();
  });

  it('renders a divider', () => {
    const { getByRole } = render(
      <Router>
        <WelcomePage />
      </Router>
    );
    expect(getByRole('separator')).toBeInTheDocument();
  });
});
