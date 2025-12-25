export function arrayConversion(inputArray: number[]): number {
  let outputArray = [...inputArray];

  for (let index = 1; 1 < outputArray.length; index++) {
    if (index % 2 === 0) {
      const productArray: number[] = [];
      for (let index = 0; index < outputArray.length / 2; index++) {
        const product = outputArray[2 * index] * outputArray[2 * index + 1];
        productArray.push(product);
      }
      outputArray = [...productArray];
    } else {
      const sunArray: number[] = [];
      for (let index = 0; index < outputArray.length / 2; index++) {
        const sun = outputArray[2 * index] + outputArray[2 * index + 1];
        sunArray.push(sun);
      }
      outputArray = [...sunArray];
    }
  }

  return outputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
