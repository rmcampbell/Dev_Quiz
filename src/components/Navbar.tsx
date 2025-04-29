import '../stylesheets/Navbar.css';
import React from 'react';
// import fccLogo from "../images/fcc_primary_large.webp";

const Navbar: React.FC = () => {
  return (
    <header>
      <nav className="homepage-navbar">
        <a target="_blank" rel="noreferrer" href="https://www.rosscampbell.dev/">
          {/*<img className="website-logo" src={fccLogo} alt="Ross Campbell logo" />*/}
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
