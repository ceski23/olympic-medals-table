import { css, Theme } from "@emotion/react";

export const globalStyles = (theme: Theme) => css`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  #root {
    height: 100vh;
  }
`;
