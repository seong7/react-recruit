import React from 'react';

export interface TestProps {
  text: string;
}

export const Test = ({ text }: TestProps) => {
  return <>{text}</>;
};
