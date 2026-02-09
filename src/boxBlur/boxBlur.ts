export function boxBlur(image: number[][]): number[][] {
  let outPut: number = 0;

  image.forEach((array) => {
    array.forEach((number) => (outPut += number));
  });
  return [[Math.floor(outPut / (image.length * image.length))]];
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1],
  ]),
);