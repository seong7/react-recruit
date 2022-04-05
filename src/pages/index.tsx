import React from 'react';
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { BaseTemplate } from '../components/templates/BaseTemplate';

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      await fetch('/test');
    })();
  }, []);

  return <BaseTemplate navigation={<></>} content={<></>} />;
};

export default Home;
