export function almostIncreasingSequence(sequence: number[]): boolean {
  let x = 0;

  for (let index = 0; index < sequence.length - 1; index++) {
    if (sequence[index] > sequence[index + 1]) {
      x++;
    }
  }

  if (x < 2) {
    return true;
  } else {
    return false;
  }
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 5, 2]));
