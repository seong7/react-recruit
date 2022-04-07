import React from 'react';
import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import 'normalize.css';
import PostContextProvider from '../context/Post/PostContext';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../server');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PostContextProvider>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </PostContextProvider>
    </>
  );
}

export default MyApp;
