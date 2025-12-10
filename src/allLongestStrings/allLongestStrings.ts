export function allLongestStrings(inputArray: string[]): string[] {
  let longestString: number = 0;
  const outputArray: string[] = [];
  
  inputArray.forEach((item) => {
    if (longestString < item.length) {
      longestString = item.length;
    }
  });

  inputArray.forEach((item) => {
    if (item.length == longestString) {
      outputArray.push(item);
    }
  });
  return outputArray;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
