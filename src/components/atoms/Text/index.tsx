import React from 'react';
import { TextWrapper } from './index.styles';

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'span';
  rem?: number;
  weight?: number;
  children: string;
}

export const Text = ({
  as = 'span',
  rem,
  weight = 300,
  children,
}: TextProps) => {
  const Component = TextWrapper.withComponent(as);

  return (
    <Component rem={rem} weight={weight}>
      {children}
    </Component>
  );
};
