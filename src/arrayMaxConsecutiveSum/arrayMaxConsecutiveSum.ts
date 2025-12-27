export function arrayMaxConsecutiveSum(
  inputArray: number[],
  k: number
): number {
  let sunKIndexMax: number = 0;
  for (
    let indexBasis = 0;
    indexBasis < inputArray.length - (k - 1);
    indexBasis++
  ) {
    let sunKIndex: number = 0;
    for (let indexFollower = 0; indexFollower < k; indexFollower++) {
      sunKIndex += inputArray[indexBasis + indexFollower];
    }
    if (sunKIndex > sunKIndexMax) {
      sunKIndexMax = sunKIndex;
    }
  }
  return sunKIndexMax;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
