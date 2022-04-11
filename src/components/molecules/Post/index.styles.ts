import styled from '@emotion/styled';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 340px;
  height: fit-content;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 0 1px rgb(0 0 0 / 6%), 0 1px 3px rgb(0 0 0 / 24%);
  transition: box-shadow 0.1s ease-out;
  border-radius: 14px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 8%),
      0 1px 4px rgb(0 0 0 / 8%);
  }
`;

export const PostTitle = styled.div`
  white-space: pre-wrap;
`;

export const PostTag = styled.span`
  padding: 4px 6px;
  border-radius: 4px;
  background-color: rgb(239, 239, 242);
  width: fit-content;
  max-width: 200px;
  font-size: 1.2rem;
  font-weight: 400;
  margin: 10px 0;
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;
  width: max-content;
  transition: 0.1s ease-out;
  height: 21px;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover {
    background: rgb(239, 239, 242);
  }

  & > span {
    padding-left: 10px;
  }
`;
