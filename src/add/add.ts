export function add(param1: number, param2: number): number {
  let sum: number = param1 + param2;
  return sum;
}

export function add2(...params: number[]): number {
  let sum: number = 0;

  params.forEach((param) => {
    sum += param;
  });

  return sum;
}

console.log(add(-100, 1000));
console.log(add(3, 2));

console.log(add2(-1, 2, -3, 4, 5));
console.log(add2(2, 3));
