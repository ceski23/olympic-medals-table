import { Theme } from "@emotion/react";

declare module "@emotion/react" {
  interface Theme {
    colors: {
      background: string;
      backgroundAlt: string;
      backgroundTable: string;
      text: string;
      textAlt: string;
      textMuted: string;
      border: string;
      shadow: string;
      primary: string;
      primaryHover: string;
    };
    breakpoints: {
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
  }
}

export const theme: Theme = {
  colors: {
    background: "#ffffff",
    backgroundAlt: "#e9e9e9",
    backgroundTable: "#f6f6f6",
    text: "#000000",
    textAlt: "#ffffff",
    textMuted: "#707070",
    border: "#b6b6b6",
    shadow: "#dddddd",
    primary: "#0084ff",
    primaryHover: "#49a7ff",
  },
  breakpoints: {
    sm: 420,
    md: 768,
    lg: 1024,
    xl: 1200,
  },
};

export type Breakpoint = keyof Theme["breakpoints"];
