export function candies(n: number, m: number): number {

    const equally=Math.floor(m/n)

    return equally*n
}

console.log(candies(3, 10));
console.log(candies(5,12));
