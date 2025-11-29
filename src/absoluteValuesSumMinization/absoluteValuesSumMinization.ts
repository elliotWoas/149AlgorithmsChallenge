export function absoluteValuesSumMinimization(a: number[]): number {

}

// Finding the median number in a numerical array using the method proposed by ai
function absoluteValuesSumMinimization1(a: number[]):number {
  a.sort((a, b) => a - b);
  return a[Math.floor((a.length - 1) / 2)];
}


interface objectNTSDONType {
  [name: number]: number;
}


function absoluteValuesSumMinimization2(a: number[]) {
  const objectNTSDON: objectNTSDONType = {}; //An object is a number, the sum of its distances from other numbers.
  let keyNumberMin;
  let sunDistancesMin: number | undefined;

  a.forEach((item: number) => {
    let x = 0;
    a.forEach((value) => {
      const y = Math.abs(item - value);
      x = x + y;
    });

    objectNTSDON[item] = x;
  });

  for (const key in objectNTSDON) {
    if (sunDistancesMin == undefined || objectNTSDON[key] <= sunDistancesMin) {
      if (objectNTSDON[key] !== sunDistancesMin) {
        sunDistancesMin = objectNTSDON[key];
        keyNumberMin = key;
      } else {
        sunDistancesMin = objectNTSDON[key];
        keyNumberMin = Number(keyNumberMin) < Number(key) ? keyNumberMin : key;
      }
    }
  }
  return keyNumberMin;
}


// console.log(absoluteValuesSumMinimization([2, 4, 7]))
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
