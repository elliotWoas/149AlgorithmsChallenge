export function allLongestStrings(inputArray: string[]): string[] {
    let len: number[] = []
    for (const arr of inputArray) {
        len.push(arr.length);
    }
    const maximum = Math.max(...len);
    return inputArray.filter(a => a.length === maximum)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));