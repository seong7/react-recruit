import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  transform: scale(1);
`;

const NavigationWrapper = styled.div`
  width: 299px;
  position: fixed;
  top: 0;
  height: 100vh;
  transition: left 0.4s cubic-bezier(0.12, 1.01, 0.86, 1) 0s;
`;

const ContentWrapper = styled.div`
  margin-left: 299px;
  width: 100%;
  transition: margin-left 0.4s cubic-bezier(0.12, 1.03, 0.86, 1) 0s;
`;

export default {
  Wrapper,
  NavigationWrapper,
  ContentWrapper,
};
