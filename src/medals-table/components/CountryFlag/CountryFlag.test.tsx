import { CountryFlag } from "medals-table/components";
import { renderWithProviders } from "test/utils";

describe("CountryFlag", () => {
  it("should render correctly", () => {
    const { asFragment } = renderWithProviders(<CountryFlag code="PL" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
