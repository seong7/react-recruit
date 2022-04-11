import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonWrapper } from './index.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  size?: 'full' | 'mid' | 'fit';
  color?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  size = 'fit',
  color = 'primary',
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonWrapper size={size} onClick={onClick} color={color} {...rest}>
      {children}
    </ButtonWrapper>
  );
};
