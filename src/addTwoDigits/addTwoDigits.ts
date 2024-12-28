export function addTwoDigits(n: any): number {

    const str = n.toString();
    const digits = str.split('');
    const sum = digits.reduce((acc: number, digit: string) => acc + parseInt(digit, 10), 0)
    return sum;
    
}

console.log(addTwoDigits(29));