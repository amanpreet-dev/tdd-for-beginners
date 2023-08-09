import { isPalindrome } from "./palindrome";

/** Test cases
[x] An inputted string reads the same forward and backward for e.g - "racecar"
[x] The input string which is not the same when read in reverse, is not a palindrome. e.g "hello"
[x] The function should ignore the case while determining whether the string is palindrome or not. e.g "Madam" should be considered as a palindrome.
[] The function should handle spaces and recognize the input string accordingly. e.g "A man, a plan, a canal, Panama"
[] The function should consider special characters while determining palindrome strings. e.g "$#malyalam#$
[] Some of the edge cases to be considered: A single character or an empty string is also considered as a palindrome. e.g "a", "".
*/

test("should return true for a palindrome", () => {
  expect(isPalindrome("Madam")).toBe(true);
});

test("should return false for a non-palindrome", () => {
  expect(isPalindrome("hello world")).toBe(false);
});
