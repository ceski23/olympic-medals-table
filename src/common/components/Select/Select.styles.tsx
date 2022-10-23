import styled from "@emotion/styled";

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.textMuted};
`;

export const SelectElement = styled.select`
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px 15px;
  font-size: 1rem;
  box-shadow: 3px 3px 7px ${(props) => props.theme.colors.shadow};
  min-width: 0;

  option:disabled {
    color: ${(props) => props.theme.colors.textMuted};
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
`;
