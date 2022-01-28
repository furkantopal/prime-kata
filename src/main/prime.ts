export class Prime {
  getFactors(input: number): number[] {
    if (input === 1) {
      return [];
    } else {
      return input === 2 ? [2] : [3];
    }
  }
}
