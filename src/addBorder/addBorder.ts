export function addBorder(picture: string[]): string[] {
    const wall = '*'.repeat(picture[0].length + 2);
    const result = [wall];

    for (const line of picture) {
        result.push('*'.concat(line, '*'));
    }

    result.push(wall);
    return result;
}

console.log(addBorder(["abc", "ded"]))