import { Prime } from "../main/prime";

describe("Prime test", () => {
  it("should give prime factors of 1", () => {
    let prime: Prime = new Prime();
    expect(prime.getFactors(1)).toEqual([]);
  });

  it("should give prime factors of 2", () => {
    let prime: Prime = new Prime();
    expect(prime.getFactors(2)).toEqual([2]);
  });
});
