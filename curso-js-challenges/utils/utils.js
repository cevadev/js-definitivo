function isDigit(ch) {
  return ch >= 0 && ch <= 9;
}

export default function isNumber(value) {
  let numeroDigitos = 0;
  let posicionPuntoDecimal = -1;

  const input = value.toString();
  for (let i = 0; i < input.length; i++) {
    let ch = input.charAt(i);
    if (ch === ".") {
      if (posicionPuntoDecimal !== -1 && i > value.length - 1) {
        return false;
      }
      posicionPuntoDecimal = i;
    } else if (ch === "-") {
      if (i != 0) {
        return false;
      }
    } else if (!isDigit(ch)) {
      return false;
    } else {
      numeroDigitos++;
    }
  }
  return numeroDigitos > 0;
}
