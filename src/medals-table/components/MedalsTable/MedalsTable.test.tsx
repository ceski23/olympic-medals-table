import { screen } from "@testing-library/react";
import { CountryMedalsData } from "common/components/Page";
import { MedalsTable } from "medals-table/components";
import { renderWithProviders } from "test/utils";

describe("MedalsTable", () => {
  it("should render data", () => {
    const data: CountryMedalsData[] = [
      { country: "POL", medals: { gold: 1, silver: 2, bronze: 3 } },
    ];

    renderWithProviders(
      <MedalsTable data={data} onEdit={vi.fn()} onDelete={vi.fn()} />
    );

    const country = screen.getByText("Poland");
    expect(country).toBeInTheDocument();
  });

  it("should render empty placeholder", () => {
    renderWithProviders(
      <MedalsTable data={[]} onEdit={vi.fn()} onDelete={vi.fn()} />
    );

    const placeholder = screen.getByTestId("emptyPlaceholder");
    expect(placeholder).toBeInTheDocument();
  });
});
