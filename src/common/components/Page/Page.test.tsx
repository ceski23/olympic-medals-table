import { Page } from "common/components";
import { renderWithProviders } from "test/utils";

describe("Page", () => {
  it("should render correctly", () => {
    const { asFragment } = renderWithProviders(<Page />);
    expect(asFragment()).toMatchSnapshot();
  });
});
