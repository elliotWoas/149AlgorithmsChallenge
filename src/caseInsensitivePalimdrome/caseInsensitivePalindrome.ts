export function isCaseInsensitivePalindrome(inputString: string): boolean {
  const inputRverse = inputString.split("").reverse().join("");

  if (inputString.toLowerCase() === inputRverse.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
