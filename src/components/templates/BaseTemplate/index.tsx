import React, { ReactNode } from 'react';
import Styled from './index.styles';
import { useSideBarState } from '../../../context/SideBar/hook';

export interface BaseTemplateProps {
  navigation: ReactNode;
  content: ReactNode;
}

export const BaseTemplate = ({ navigation, content }: BaseTemplateProps) => {
  const { isSideBarOpen } = useSideBarState();
  return (
    <Styled.Wrapper>
      <Styled.NavigationWrapper isNavOpen={isSideBarOpen}>
        {navigation}
      </Styled.NavigationWrapper>
      <Styled.ContentWrapper isNavOpen={isSideBarOpen}>
        {content}
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};
