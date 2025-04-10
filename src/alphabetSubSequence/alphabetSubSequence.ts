export function alphabetSubsequence(s: string): boolean {

    for (let i = 0; i < s.length - 1; i++) {

        const currentChar = s.charCodeAt(i)
        const nextChar = s.charCodeAt(i + 1)

        if (currentChar >= nextChar) {
            return false
        }
    }
    return true;
    
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
