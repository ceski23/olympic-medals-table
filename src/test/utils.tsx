import { Global, ThemeProvider } from "@emotion/react";
import { render } from "@testing-library/react";
import { FC, PropsWithChildren } from "react";
import { globalStyles, theme } from "common/styles";

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );

  return render(ui, { wrapper: Wrapper });
};
