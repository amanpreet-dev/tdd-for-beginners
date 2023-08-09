export function isPalindrome(str: string) {
  str = str.toLowerCase();
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}
