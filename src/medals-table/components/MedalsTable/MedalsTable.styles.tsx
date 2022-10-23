import styled from "@emotion/styled";

export const ActionButton = styled.button`
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const CountryCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  min-width: max-content;
`;

export const Actions = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const PlaceholderCell = styled.td`
  padding: 30px;
  background-color: ${(props) => props.theme.colors.backgroundTable};
  color: ${(props) => props.theme.colors.textMuted};
  text-align: center;
`;
