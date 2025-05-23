import { MouseEventHandler } from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface ButtonProps {
  text: string;
  isTransparent: boolean;
  size: string;
  handleClick: MouseEventHandler;
}

export interface ButtonLinkProps extends NavLinkProps {
  size?: string;
}

export interface FlashcardProps {
  front: string;
  back: string;
  trackProgress?: boolean;
  known?: boolean;
  onToggleKnown?: () => void;
}

export interface MarkdownRendererProps {
  content: string;
}
