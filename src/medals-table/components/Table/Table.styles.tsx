import styled from "@emotion/styled";

export const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 500px;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 5px;
  width: 100%;
  box-shadow: 0 10px 20px ${(props) => props.theme.colors.shadow};
  border: 1px solid ${(props) => props.theme.colors.border};
`;

export const Row = styled.tr`
  max-height: 50px;
  background-color: ${(props) => props.theme.colors.backgroundTable};

  &:nth-of-type(odd) {
    background-color: ${(props) => props.theme.colors.backgroundAlt};
  }
`;

export const Cell = styled.td`
  padding: 15px 15px;
`;

export const HeaderCell = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
  gap: 10px;
`;

export const TableHeading = styled.thead`
  background-color: ${(props) => props.theme.colors.background};
`;

export const Header = styled.th`
  min-width: min-content;
`;
