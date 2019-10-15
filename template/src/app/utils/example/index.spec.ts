import IsItRaining from "./index";

describe("test the does it rain functionality", () => {
  it("should return true", () => {
    let result = IsItRaining()
    expect(result).toBe(true);
  });
});
