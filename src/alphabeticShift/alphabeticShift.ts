export function alphabeticShift(inputString: string): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let newString = '';

    for (let i = 0; i < inputString.length; i++) {
        let index = alphabet.indexOf(inputString[i]);
        newString += alphabet[(index + 1) % 26];
    }

    return newString;
    
}

console.log(alphabeticShift('crazy'));