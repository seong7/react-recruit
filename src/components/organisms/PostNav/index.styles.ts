import styled from '@emotion/styled';

export const PostNavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    90deg,
    rgb(249, 249, 251) 0%,
    rgb(249, 249, 251) calc(100% - 13.3px),
    rgb(239, 239, 242) 100%
  );
  height: 100%;
  min-height: 600px;
  padding: 20px;
  white-space: nowrap;
`;

export const WorkspaceWrapper = styled.div`
  height: fit-content;
  padding: 0;
  margin-bottom: 20px;
`;

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NavTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: #e2e2e2;
  padding: 5px 10px;
`;

export const NavContentWrapper = styled.ul`
  list-style: none;
  padding: 10px 10px;
`;

export const NavContent = styled.li`
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #eeeeee;
  }
`;
