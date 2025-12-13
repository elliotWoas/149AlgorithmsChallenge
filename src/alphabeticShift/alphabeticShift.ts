export function alphabeticShift(inputString: string): string {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const arrayInputString = inputString.split("");
  const arrayOutputString = [];

  for (let index = 0; index < arrayInputString.length; index++) {
    let indexplus;
    if (alphabet.length - 1 > alphabet.indexOf(arrayInputString[index])) {
      indexplus = alphabet.indexOf(arrayInputString[index]) + 1;
    } else {
      indexplus = 0;
    }
    arrayOutputString.push(alphabet[indexplus]);
  }

  return arrayOutputString.join("");
}

console.log(alphabeticShift("crazy"));
