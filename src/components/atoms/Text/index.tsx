import React from 'react';
import Styled from './index.styles';

export interface TextProps {
  as?: 'h1' | 'h2' | 'h3' | 'span';
  rem?: number;
  weight?: number;
  children: string;
}

export const Text = ({
  as = 'span',
  rem = 1.6,
  weight = 300,
  children,
}: TextProps) => {
  const Component = Styled.Text.withComponent(as);

  return (
    <Component rem={rem} weight={weight}>
      {children}
    </Component>
  );
};
