export function absoluteValuesSumMinimization(a: number[]): number {
 const mid = Math.floor((a.length - 1) / 2);
  return a[mid];
}
console.log(absoluteValuesSumMinimization([2, 4, 7]))
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
