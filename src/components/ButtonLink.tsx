import React, { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import '../stylesheets/Button.css';
import '../stylesheets/ButtonLink.css';
import { ButtonLinkProps, NavLinkRenderProps } from '../types';

const ButtonLink: React.FC<ButtonLinkProps & { onClick?: () => void, className?: string }> = ({ to, children, size, onClick, className = '' }) => {
  // Convert children to ReactNode if it's a function (only needed for button element)
  const childrenContent: ReactNode = typeof children === 'function'
    ? children({ isActive: false, isPending: false, isTransitioning: false } as NavLinkRenderProps)
    : children;

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`btn-default btn--link ${size === 'large' ? 'large-btn' : ''} ${className}`}
      >
        {childrenContent}
      </button>
    );
  }

  // NavLink can handle both ReactNode and function children
  return (
    <NavLink
      to={to}
      className={`btn-default btn--link ${size === 'large' ? 'large-btn' : ''} ${className}`}
    >
      {children}
    </NavLink>
  );
};

export default ButtonLink;
