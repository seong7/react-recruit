import React from 'react';
import type { NextPage } from 'next';
import { BaseTemplate } from '../components/templates/BaseTemplate';
import { PostList } from '../components/organisms/PostList';
import SideBarContextProvider from '../context/SideBar/SideBarContext';
import { PostNav } from '../components/organisms/PostNav';
import { postAPI } from '../api/postAPI';
import { useAsync } from '../hooks/useAsync';
import { usePost } from '../context/Post/hook';

const Home: NextPage = () => {
  const { setPosts } = usePost();

  const { state } = useAsync(
    {
      callback: async () => {
        const posts = await postAPI.getPosts();
        setPosts(posts.data);
      },
    },
    [],
  );

  return (
    <SideBarContextProvider>
      <BaseTemplate
        navigation={<PostNav />}
        content={<PostList isLoading={state.status === 'loading'} />}
      />
    </SideBarContextProvider>
  );
};

export default Home;
