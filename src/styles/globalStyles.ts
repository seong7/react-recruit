import { css } from '@emotion/react';

export const globalStyles = css`
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;

    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  }

  html,
  body {
    width: 100%;
    height: 100%;

    // https://stackoverflow.com/questions/29605843/how-do-you-add-box-sizing-border-box-to-normalize-css-file
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    font-size: 10px;
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
