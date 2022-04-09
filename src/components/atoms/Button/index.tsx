import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonWrapper } from './index.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  size?: 'large' | 'mid' | 'fit';
}

export const Button = ({
  children,
  size = 'fit',
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper size={size} onClick={onClick} {...rest}>
      {children}
    </ButtonWrapper>
  );
};
