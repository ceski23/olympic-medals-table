import { screen } from "@testing-library/react";

import { Input } from "common/components";
import { renderWithProviders } from "test/utils";

describe("Input", () => {
  it("should render correctly", async () => {
    const { asFragment } = renderWithProviders(
      <Input id="test" label="Test" error="Error" />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("should display error state", () => {
    renderWithProviders(<Input id="test" label="Test" error="Error" />);

    const input = screen.getByRole("textbox", { name: "Test" });
    expect(input).toBeInvalid();

    const errorText = screen.getByRole("alert");
    expect(errorText).toHaveTextContent("Error");
  });
});
