import React, { ReactNode } from 'react';
import { Wrapper, StyledNav, StyledMain } from './index.styles';
import { useSideBarState } from '../../../context/SideBar/hook';

export interface BaseTemplateProps {
  navigation: ReactNode;
  content: ReactNode;
}

export const BaseTemplate = ({ navigation, content }: BaseTemplateProps) => {
  const { isSideBarOpen } = useSideBarState();
  return (
    <Wrapper>
      <StyledNav isNavOpen={isSideBarOpen}>{navigation}</StyledNav>
      <StyledMain isNavOpen={isSideBarOpen}>{content}</StyledMain>
    </Wrapper>
  );
};
