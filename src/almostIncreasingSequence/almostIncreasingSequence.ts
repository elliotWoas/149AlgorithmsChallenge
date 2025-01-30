export function almostIncreasingSequence(sequence: number[]): boolean {
    let count = 0;

    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            count++;
            if (count > 1) {
                return false;
            }
            if (i > 0 && sequence[i - 1] >= sequence[i + 1] && i + 2 < sequence.length && sequence[i] >= sequence[i + 2]) {
                return false;
            }
        }
    }

    return true;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])); 
console.log(almostIncreasingSequence([1, 3,5, 2]));    