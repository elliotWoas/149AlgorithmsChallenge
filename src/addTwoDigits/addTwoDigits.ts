export function addTwoDigits(n: any): number {

    return n
        .toString()
        .split('')
        .map(Number)
        .reduce((ac: number, cu: number) => ac + cu)

}
console.log(addTwoDigits(29));