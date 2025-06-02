import { MouseEventHandler, ReactNode } from 'react';
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
  back: ReactNode;
  trackProgress?: boolean;
  known?: boolean;
  onToggleKnown?: () => void;
  flipped?: boolean;
  setFlipped?: (flipped: boolean) => void;
}

export interface MarkdownRendererProps {
  content: string;
}

export type NavLinkRenderProps = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};
