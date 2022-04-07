import React from 'react';
import Styled from './index.styles';
import { PostListHeader } from './PostListHeader';

export interface PostListProps {}

export const PostList = ({}: PostListProps) => {
  return (
    <Styled.Wrapper>
      <PostListHeader />
    </Styled.Wrapper>
  );
};
