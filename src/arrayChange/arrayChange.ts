export function arrayChange(inputArray: number[]): number {
let sunChanges:number=0

  for (let index = 0; index < inputArray.length-1; index++) {
    if (inputArray[index] >= inputArray[index + 1]) {
        sunChanges+= inputArray[index] - inputArray[index + 1] + 1;
      inputArray[index + 1] += inputArray[index] - inputArray[index + 1] + 1;    
    }
  }
return sunChanges}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([4, 3, 4,2]));
