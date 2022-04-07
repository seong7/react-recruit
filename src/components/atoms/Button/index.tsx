import React, { MouseEventHandler, ReactNode } from 'react';
import { ButtonWrapper } from './index.styles';

export interface ButtonProps {
  children: string | ReactNode;
  size?: 'large' | 'mid' | 'fit';
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, size = 'fit', onClick }: ButtonProps) => {
  return (
    <ButtonWrapper size={size} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};
