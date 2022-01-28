import { Prime } from "../main/prime";

describe("Prime test", () => {
  let prime: Prime = new Prime();

  it.each([
    [1, []],
    [2, [2]],
    [3, [3]],
    [4, [2, 2]],
  ])(".prime(%i, %s)", (input, expexted) => {
    expect(prime.getFactors(input)).toEqual(expexted);
  });
});
