export function avoidObstacles(inputArray: number[]): number {
  inputArray.sort((a, b) => a - b);
  let output: number;
  for (let index = 1; index <= inputArray[inputArray.length - 1]; index++) {
    const isTrue = inputArray.every((value) => value % index !== 0);
    console.log(isTrue);

    if (isTrue) {
      output = index;
      break;
    }
    if (index === inputArray[inputArray.length - 1] && !isTrue) {
      output = inputArray[inputArray.length - 1] + 1;
    }
  }
  return output!;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
