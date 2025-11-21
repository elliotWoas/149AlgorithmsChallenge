
export function addTwoDigits(n: number): number {

    return n.toString().split('').reduce((sum, d) => sum + parseInt(d, 10), 0);

}


console.log(addTwoDigits(29));