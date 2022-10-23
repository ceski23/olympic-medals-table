import { Global, ThemeProvider } from "@emotion/react";
import { Page } from "common/components";
import { globalStyles, theme } from "common/styles";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Page />
    </ThemeProvider>
  );
};
