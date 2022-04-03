import type { NextPage } from 'next';
import { useEffect } from 'react';

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      await fetch('/test');
    })();
  }, []);

  return <>test</>;
};

export default Home;
