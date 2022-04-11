import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

export interface TestProps {
  text: string;
}

export const Test = ({ text }: TestProps) => {
  return (
    <div
      className={css`
        text-align: end;
      `}
    >
      <StyledP>{text}</StyledP>
    </div>
  );
};

const StyledP = styled.p`
  color: cadetblue;
`;
