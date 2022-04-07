import styled from '@emotion/styled';
import { BaseTemplateProps } from './index';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  transform: scale(1);
`;

const NavigationWrapper = styled.div<Pick<BaseTemplateProps, 'isNavOpen'>>`
  position: fixed;
  transition: left 0.4s cubic-bezier(0.12, 1.01, 0.86, 1) 0s;
  top: 0;
  left: ${(props) => (props.isNavOpen ? '' : 0)};
  width: ${(props) => (props.isNavOpen ? '299px' : '0')};
  height: 100vh;
`;

const ContentWrapper = styled.div<Pick<BaseTemplateProps, 'isNavOpen'>>`
  margin-left: ${({ isNavOpen }) => (isNavOpen ? '299px' : 0)};
  width: 100%;
  transition: margin-left 0.4s cubic-bezier(0.12, 1.03, 0.86, 1) 0s;
`;

export default {
  Wrapper,
  NavigationWrapper,
  ContentWrapper,
};
