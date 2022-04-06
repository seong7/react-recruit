import React, { ReactNode } from 'react';
import Styled from './index.styles';

export interface BaseTemplateProps {
  navigation: ReactNode;
  content: ReactNode;
}

export const BaseTemplate = ({ navigation, content }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Styled.NavigationWrapper>{navigation}</Styled.NavigationWrapper>
      <Styled.ContentWrapper>{content}</Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
