import styled from '@emotion/styled';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 340px;
  height: fit-content;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 0 1px rgb(0 0 0 / 6%), 0 1px 3px rgb(0 0 0 / 24%);
  transition: box-shadow 0.1s ease-out;
  border-radius: 14px;
  cursor: pointer;
`;

const PostTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  white-space: pre-wrap;
  margin-bottom: 10px;
`;

const PostTag = styled.span`
  padding: 4px 6px;
  border-radius: 4px;
  background-color: rgb(239, 239, 242);
  width: fit-content;
  max-width: 200px;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 10px;
`;

const PostFooter = styled.div`
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

export default {
  PostWrapper,
  PostTitle,
  PostTag,
  PostFooter,
};
