import React from 'react';
import { NavLink } from 'react-router-dom'; // TODO: check this with v7
import '../stylesheets/Button.css';
import '../stylesheets/ButtonLink.css';
import { ButtonLinkProps } from '../types';

const ButtonLink: React.FC<ButtonLinkProps> = ({ to, children, size }) => {
  return (
    <NavLink
      to={to}
      className={`btn-default btn--link ${size === 'large' ? 'large-btn' : ''}`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLink;
