import React from 'react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { BaseTemplate } from '../components/templates/BaseTemplate';
import { PostList } from '../components/organisms/PostList';
import SideBarContextProvider from '../context/SideBar/SideBarContext';
import { PostNav } from '../components/organisms/PostNav';

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      await fetch('/test');
    })();
  }, []);

  return (
    <SideBarContextProvider>
      <BaseTemplate navigation={<PostNav />} content={<PostList />} />
    </SideBarContextProvider>
  );
};

export default Home;
