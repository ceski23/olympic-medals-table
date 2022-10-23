import { CountryForm, FormMode, MedalsTable } from "medals-table/components";
import { useCallback, useState } from "react";
import { UseFormReset } from "react-hook-form";
import { preset2020 } from "medals-table/fixtures";
import { Container, Hint, Key } from "./Page.styles";

export interface CountryMedalsData {
  country: string;
  medals: {
    gold: number;
    silver: number;
    bronze: number;
  };
}

export const Page = () => {
  const searchParams = Object.fromEntries(
    new URLSearchParams(window.location.search).entries()
  );

  const [editData, setEditData] = useState<Partial<CountryMedalsData>>();
  const [data, setData] = useState<CountryMedalsData[]>(() =>
    searchParams.preset === "2020" ? preset2020 : []
  );

  const handleSubmit = (
    medalsData: CountryMedalsData,
    reset: UseFormReset<CountryMedalsData>
  ) => {
    if (editData) {
      setData((d) =>
        d.map((c) => (c.country === medalsData.country ? medalsData : c))
      );
      setEditData(undefined);
    } else {
      setData((d) => [...d, medalsData]);
    }

    reset();
  };

  const handleEditClick = useCallback(
    (rowIndex: number) => {
      setEditData(data[rowIndex]);
    },
    [data]
  );

  const handleDeleteClick = useCallback((rowIndex: number) => {
    setData((d) => d.filter((_, idx) => idx !== rowIndex));
  }, []);

  return (
    <Container>
      <CountryForm
        onSubmit={handleSubmit}
        defaultValues={editData}
        key={JSON.stringify(editData)}
        mode={editData ? FormMode.EDIT : FormMode.ADD}
      />
      <MedalsTable
        data={data}
        onDelete={handleDeleteClick}
        onEdit={handleEditClick}
      />
      <Hint>
        Hint: Hold <Key>SHIFT</Key> while sorting to use multisort!
      </Hint>
    </Container>
  );
};
