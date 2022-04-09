import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  transform: scale(1);
`;

export const StyledNav = styled.nav<WrappersType>`
  position: fixed;
  transition: left 0.4s cubic-bezier(0.12, 1.01, 0.86, 1) 0s;
  top: 0;
  left: ${(props) => (props.isNavOpen ? 0 : '-100%')};
  width: ${(props) => (props.isNavOpen ? '299px' : '0')};
  height: 100vh;
`;

export const StyledMain = styled.main<WrappersType>`
  margin-left: ${({ isNavOpen }) => (isNavOpen ? '299px' : 0)};
  width: 100%;
  transition: margin-left 0.4s cubic-bezier(0.12, 1.03, 0.86, 1) 0s;
`;

type WrappersType = {
  isNavOpen: boolean;
};
