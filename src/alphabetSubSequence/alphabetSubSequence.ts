export function alphabetSubsequence(s: string): boolean {
  let outputFunction = true;
  const arrayString = s.split("");

  for (let index = 0; index < arrayString.length - 1; index++) {
    const firstString = arrayString[index].charCodeAt(0);
    const secondString = arrayString[index + 1].charCodeAt(0);

    if (firstString > secondString) {
      outputFunction = false;
    }
  }
  return outputFunction;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effg"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
