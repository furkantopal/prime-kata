export class Roman {
  getRepresentation(arabic: number): string {
    let roman = "";

    if (arabic > 4) {
      roman = "V";
      arabic -= 5;
    }

    if (arabic === 4) {
      roman += "IV";
      arabic -= 4;
    }

    if (arabic > 0) {
      roman += "I".repeat(arabic);
    }

    return roman;
  }
}
