import React from 'react';
import { Wrapper } from './index.styles';
import { PostListHeader } from './PostListHeader';

export interface PostListProps {}

export const PostList = ({}: PostListProps) => {
  return (
    <Wrapper>
      <PostListHeader />
    </Wrapper>
  );
};
