import { SortingIndicator } from "medals-table/components";
import { renderWithProviders } from "test/utils";

describe("SortingIndicator", () => {
  it("should render correctly without direction", () => {
    const { asFragment } = renderWithProviders(
      <SortingIndicator direction={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly with ascending direction", () => {
    const { asFragment } = renderWithProviders(
      <SortingIndicator direction="asc" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should render correctly with descending direction", () => {
    const { asFragment } = renderWithProviders(
      <SortingIndicator direction="desc" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
