export function arrayChange(inputArray: number[]): number {
  return inputArray.reduce((moves, curr, i) => {
    if (i > 0 && curr <= inputArray[i - 1]) {
      inputArray[i] = inputArray[i - 1] + 1;
      return moves + inputArray[i] - curr;
    }
    return moves;
  }, 0);
}

