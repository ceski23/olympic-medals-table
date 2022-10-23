import { screen } from "@testing-library/react";

import { Select } from "common/components";
import { renderWithProviders } from "test/utils";

describe("Select", () => {
  it("should render correctly", async () => {
    const { asFragment } = renderWithProviders(
      <Select id="test" label="Test" error="Error">
        <option>1</option>
        <option>2</option>
      </Select>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should display error state", () => {
    renderWithProviders(
      <Select id="test" label="Test" error="Error">
        <option>1</option>
        <option>2</option>
      </Select>
    );

    const input = screen.getByRole("combobox", { name: "Test" });
    expect(input).toBeInvalid();

    const errorText = screen.getByRole("alert");
    expect(errorText).toHaveTextContent("Error");
  });
});
