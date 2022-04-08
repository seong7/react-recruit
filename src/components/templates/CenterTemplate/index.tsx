import React, { ReactNode } from 'react';
import { Wrapper, ContentWrapper } from './index.styles';

export interface CenterTemplateProps {
  content: ReactNode;
}

export const CenterTemplate = ({ content }: CenterTemplateProps) => {
  return (
    <Wrapper>
      <ContentWrapper>{content}</ContentWrapper>
    </Wrapper>
  );
};
