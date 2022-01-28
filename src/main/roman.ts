export class Roman {
  getRepresentation(arabic: number): string {
    let roman = "";

    if (arabic > 8 && arabic < 40) {
      if (10 % arabic === 0) {
        roman += "X"
        arabic -= 10
      } else if (10 % arabic === 1) {
        roman = "IX"
        arabic -= 9
      }
    }

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
