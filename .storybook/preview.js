import { Global } from '@emotion/react';
import { globalStyles } from '../src/styles/globalStyles';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import 'normalize.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => (
    <>
      <Global styles={globalStyles} />
      <Story />
    </>
  ),
];
