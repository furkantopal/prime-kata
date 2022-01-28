import { Roman } from "../main/roman";

describe("Roman test", () => {
  let roman: Roman = new Roman();

  it.each([
    [1, "I"],
    [2, "II"],
    [3, "III"],
    [4, "IV"],
    [5, "V"],
  ])(".prime(%i, %s)", (input, expexted) => {
    expect(roman.getRepresentation(input)).toEqual(expexted);
  });
});
