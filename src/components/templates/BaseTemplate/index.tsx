import React, { ReactNode } from 'react';
import { Wrapper, NavigationWrapper, ContentWrapper } from './index.styles';
import { useSideBarState } from '../../../context/SideBar/hook';

export interface BaseTemplateProps {
  navigation: ReactNode;
  content: ReactNode;
}

export const BaseTemplate = ({ navigation, content }: BaseTemplateProps) => {
  const { isSideBarOpen } = useSideBarState();
  return (
    <Wrapper>
      <NavigationWrapper isNavOpen={isSideBarOpen}>
        {navigation}
      </NavigationWrapper>
      <ContentWrapper isNavOpen={isSideBarOpen}>{content}</ContentWrapper>
    </Wrapper>
  );
};
