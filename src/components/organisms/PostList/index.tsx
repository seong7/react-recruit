import React from 'react';
import { Wrapper } from './index.styles';
import { Header } from '../../molecules/Header';
import { LoaderIcon } from '../../../assets';
import { FullCenterWrapper } from '../../../styles/FullCenterWrapper';
import { usePost } from '../../../context/Post/hook';
import { Post } from '../../molecules/Post';
import { useSideBarState } from '../../../context/SideBar/hook';

export interface PostListProps {
  isLoading: boolean;
}

export const PostList = ({ isLoading }: PostListProps) => {
  const { posts } = usePost();
  const { toggleSideBar } = useSideBarState();
  return (
    <Wrapper>
      <Header headerTitle={'공고 리스트'} onHeaderButtonClick={toggleSideBar} />

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
