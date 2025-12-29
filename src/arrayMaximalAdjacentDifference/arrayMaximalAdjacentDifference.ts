export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
  let differenceAdjacentIndexMax: number = 0;
  for (let indexBasis = 0; indexBasis < inputArray.length - 1; indexBasis++) {
    let differenceAdjacentIndex: number = 0;
    for (let indexFollower = 0; indexFollower < 2; indexFollower++) {
      if (indexFollower == 0) {
        differenceAdjacentIndex = inputArray[indexBasis + indexFollower];
      } else {
        differenceAdjacentIndex -= inputArray[indexBasis + indexFollower];
      }
    }
    if (Math.abs(differenceAdjacentIndex) > differenceAdjacentIndexMax) {
      differenceAdjacentIndexMax = Math.abs(differenceAdjacentIndex);
    }
  }
  return differenceAdjacentIndexMax;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]));
