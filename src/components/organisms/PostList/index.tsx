import React from 'react';
import { Wrapper } from './index.styles';
import { PostListHeader } from './PostListHeader';
import { LoaderIcon } from '../../../assets';
import { FullCenterWrapper } from '../../../styles/FullCenterWrapper';
import { usePost } from '../../../context/Post/hook';
import { Post } from '../../molecules/Post';

export interface PostListProps {
  isLoading: boolean;
}

export const PostList = ({ isLoading }: PostListProps) => {
  const { posts } = usePost();
  return (
    <Wrapper>
      <PostListHeader />
      {isLoading ? (
        <FullCenterWrapper>
          <LoaderIcon />
        </FullCenterWrapper>
      ) : (
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            created_at={post.created_at}
            applicants={post.applicants}
            description={post.description}
          />
        ))
      )}
    </Wrapper>
  );
};
