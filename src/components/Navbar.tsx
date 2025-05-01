import '../stylesheets/Navbar.css';
import React from 'react';
import dqLogo from '../images/dq-favicon.png';

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="homepage-navbar">
        <a target="_blank" rel="noreferrer" href="https://www.rosscampbell.dev/">
          <img className="website-logo" src={dqLogo} alt="Ross Campbell logo" />
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
