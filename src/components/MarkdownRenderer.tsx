import React from 'react';
import ReactMarkdown from 'react-markdown';

import { MarkdownRendererProps } from '../types.tsx';


const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => <ReactMarkdown>{content}</ReactMarkdown>;

export default MarkdownRenderer;
