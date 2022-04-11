import React from 'react';
import { TextWrapper } from './index.styles';

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'span';
  rem?: number;
  weight?: number;
  color?: string;
  children: string;
}

export const Text = ({
  as = 'span',
  rem,
  weight = 300,
  color = 'inherit',
  children,
}: TextProps) => {
  const Component = TextWrapper.withComponent(as);

  return (
    <Component rem={rem} weight={weight} color={color}>
      {children}
    </Component>
  );
};
