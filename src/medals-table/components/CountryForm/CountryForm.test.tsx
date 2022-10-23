import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CountryForm, FormMode } from "medals-table/components";
import { renderWithProviders } from "test/utils";

describe("CountryForm", () => {
  it("should submit data", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(
      <CountryForm onSubmit={handleSubmit} mode={FormMode.ADD} />
    );

    await user.selectOptions(screen.getByLabelText("Country"), "Poland");
    await user.type(
      screen.getByRole("spinbutton", { name: "Gold medals" }),
      "5"
    );
    await user.type(
      screen.getByRole("spinbutton", { name: "Silver medals" }),
      "3"
    );
    await user.type(
      screen.getByRole("spinbutton", { name: "Bronze medals" }),
      "10"
    );
    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(handleSubmit).toBeCalledWith(
      {
        country: "POL",
        medals: { gold: 5, silver: 3, bronze: 10 },
      },
      expect.any(Function)
    );
  });

  it("should not accept invalid data", async () => {
    const handleSubmit = vi.fn();
    const user = userEvent.setup();

    renderWithProviders(
      <CountryForm onSubmit={handleSubmit} mode={FormMode.ADD} />
    );

    await user.click(screen.getByRole("button", { name: /add/i }));

    expect(handleSubmit).toBeCalledTimes(0);
  });
});
