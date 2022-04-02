import { css } from '@emotion/react';

export const globalStyles = css`
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    // https://stackoverflow.com/questions/29605843/how-do-you-add-box-sizing-border-box-to-normalize-css-file
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
