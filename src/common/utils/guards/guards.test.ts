import { nonNullable } from "common/utils/guards";

describe("guards", () => {
  it("should filter-out nullable values", () => {
    const data = ["a", null, 3, undefined, 0, {}, ""];
    const filteredData = data.filter(nonNullable);

    expect(filteredData).toEqual(["a", 3, 0, {}, ""]);
  });
});
