import React, { ReactNode } from 'react';
import { Wrapper, StyledMain } from './index.styles';

export interface CenterTemplateProps {
  content: ReactNode;
}

export const CenterTemplate = ({ content }: CenterTemplateProps) => {
  return (
    <Wrapper>
      <StyledMain>{content}</StyledMain>
    </Wrapper>
  );
};
