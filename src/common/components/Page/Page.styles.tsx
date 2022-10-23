import styled from "@emotion/styled";
import { mediaQueryUp } from "common/utils";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 50px;

  ${mediaQueryUp("md")} {
    padding: 50px;
  }
`;

export const Hint = styled.div`
  color: ${(props) => props.theme.colors.textMuted};
`;

export const Key = styled.kbd`
  background-color: ${(props) => props.theme.colors.backgroundAlt};
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
    0 2px 0 0 rgba(255, 255, 255, 0.7) inset;
  color: ${(props) => props.theme.colors.text};
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  white-space: nowrap;
  margin: 2px 4px;
`;
