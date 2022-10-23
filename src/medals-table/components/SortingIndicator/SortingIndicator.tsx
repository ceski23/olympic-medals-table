import { useTheme } from "@emotion/react";
import { Container } from "./SortingIndicator.styles";
import { FC } from "react";
import { SortDirection } from "@tanstack/react-table";

interface SortingIndicatorProps {
  direction: SortDirection | false;
}

export const SortingIndicator: FC<SortingIndicatorProps> = ({ direction }) => {
  const theme = useTheme();

  return (
    <Container viewBox="0 0 312.85 385.74" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={
          direction === "asc" ? theme.colors.textMuted : theme.colors.shadow
        }
        d="M18.26 174.61H294.6c16.23 0 24.355-19.617 12.879-31.094L169.309 5.336c-7.113-7.113-18.645-7.113-25.762 0L5.377 143.516C-6.092 154.993 2.033 174.61 18.26 174.61z"
      />
      <path
        fill={
          direction === "desc" ? theme.colors.textMuted : theme.colors.shadow
        }
        d="M5.38 242.23l138.17 138.18c7.113 7.11 18.648 7.11 25.762 0l138.17-138.18c11.477-11.473 3.352-31.094-12.879-31.094H18.253c-16.227 0-24.352 19.621-12.879 31.094z"
      />
    </Container>
  );
};
