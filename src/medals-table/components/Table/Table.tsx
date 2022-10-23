import { flexRender, Table as ReactTable } from "@tanstack/react-table";
import {
  Cell,
  Header,
  HeaderCell,
  Row,
  TableElement,
  TableHeading,
  TableWrapper,
} from "./Table.styles";
import { ReactElement } from "react";
import { SortingIndicator } from "medals-table/components";

interface TableProps<T> {
  table: ReactTable<T>;
  emptyPlaceholder: ReactElement;
}

export const Table = <T,>({ table, emptyPlaceholder }: TableProps<T>) => (
  <TableWrapper>
    <TableElement>
      <TableHeading>
        {table.getHeaderGroups().map(({ id, headers }) => (
          <tr key={id}>
            {headers.map((header) => (
              <Header key={header.id}>
                {header.isPlaceholder ? null : (
                  <HeaderCell onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getCanSort() && (
                      <SortingIndicator
                        direction={header.column.getIsSorted()}
                      />
                    )}
                  </HeaderCell>
                )}
              </Header>
            ))}
          </tr>
        ))}
      </TableHeading>

      <tbody>
        {table.getRowModel().rows.length === 0
          ? emptyPlaceholder
          : table.getRowModel().rows.map((row) => (
              <Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Cell>
                ))}
              </Row>
            ))}
      </tbody>
    </TableElement>
  </TableWrapper>
);
