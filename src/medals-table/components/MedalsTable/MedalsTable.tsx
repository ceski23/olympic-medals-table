import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { memo, useMemo, useState } from "react";
import { CountryFlag, Table } from "medals-table/components";
import deleteIcon from "assets/delete.svg";
import editIcon from "assets/edit.svg";
import goldMedal from "assets/gold-medal.svg";
import silverMedal from "assets/silver-medal.svg";
import bronzeMedal from "assets/bronze-medal.svg";
import {
  ActionButton,
  Actions,
  CountryCell,
  PlaceholderCell,
} from "./MedalsTable.styles";
import iso from "iso-3166-1";
import { CountryMedalsData } from "common/components/Page";

interface MedalsTableProps {
  data: CountryMedalsData[];
  onDelete: (rowIndex: number) => void;
  onEdit: (rowIndex: number) => void;
}

const sumMedals = (medals: CountryMedalsData["medals"]) => {
  return Object.values(medals).reduce((sum, amount) => sum + amount);
};

const columnHelper = createColumnHelper<CountryMedalsData>();

export const MedalsTable = memo<MedalsTableProps>(
  ({ data, onDelete, onEdit }) => {
    const columns = useMemo(
      () => [
        columnHelper.accessor(
          ({ country }) => iso.whereAlpha3(country)?.country ?? country,
          {
            header: "Country",
            cell: (cellProps) => {
              const country = iso.whereCountry(cellProps.getValue());

              return (
                <CountryCell>
                  {country?.alpha2 && <CountryFlag code={country.alpha2} />}
                  <span>{cellProps.getValue()}</span>
                </CountryCell>
              );
            },
          }
        ),
        columnHelper.accessor("medals.gold", {
          header: () => (
            <img src={goldMedal} alt="Gold medals" width="30px" height="30px" />
          ),
        }),
        columnHelper.accessor("medals.silver", {
          header: () => (
            <img
              src={silverMedal}
              alt="Silver medals"
              width="30px"
              height="30px"
            />
          ),
        }),
        columnHelper.accessor("medals.bronze", {
          header: () => (
            <img
              src={bronzeMedal}
              alt="Bronze medals"
              width="30px"
              height="30px"
            />
          ),
        }),
        columnHelper.accessor((fields) => sumMedals(fields.medals), {
          id: "total",
          header: "Totals",
        }),
        columnHelper.display({
          id: "actions",
          cell: (cellProps) => (
            <Actions>
              <ActionButton onClick={() => onEdit(cellProps.row.index)}>
                <img src={editIcon} alt="Edit row" />
              </ActionButton>
              <ActionButton onClick={() => onDelete(cellProps.row.index)}>
                <img src={deleteIcon} alt="Delete row" />
              </ActionButton>
            </Actions>
          ),
        }),
      ],
      [onDelete, onEdit]
    );

    const [sorting, setSorting] = useState<SortingState>([
      { id: "total", desc: true },
    ]);

    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      state: {
        sorting,
      },
      onSortingChange: setSorting,
    });

    return (
      <Table
        table={table}
        emptyPlaceholder={
          <tr data-testid="emptyPlaceholder">
            <PlaceholderCell colSpan={6}>The table is empty</PlaceholderCell>
          </tr>
        }
      />
    );
  }
);
