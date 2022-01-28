import { Roman } from "../main/roman";

describe("Roman test", () => {
  let roman: Roman = new Roman();

  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
    [6, "VI"],
    [7, "VII"],
    [8, "VIII"],
    [9, "IX"],
    [10, "X"],
    [11, "XI"],
    [12, "XII"],
    [14, "XIV"],
    [15, "XV"],
    [19, "XIX"],
    [20, "XX"],
  ])(".getRepresentation(%i, %s)", (input, expexted) => {
    expect(roman.getRepresentation(input)).toEqual(expexted);
  });
});
