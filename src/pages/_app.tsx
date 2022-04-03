import type { AppProps } from 'next/app';
import { Global } from '@emotion/react';
import { globalStyles } from '../styles/globalStyles';
import 'normalize.css';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../server');
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
