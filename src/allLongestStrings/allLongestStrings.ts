export function allLongestStrings(inputArray: string[]): string[] {
    const maxLength = Math.max(...inputArray.map(e => e.length));
    return inputArray.filter(e => e.length == maxLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));