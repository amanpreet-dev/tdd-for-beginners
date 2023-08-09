# Setting up a TypeScript project

- Initialization of project using `npm init`
- Installation of TypeScript as a development dependency using `npm install typescript ts-node -D`
- Creation of a `tsconfig.json` file using `npx tsc --init`
- Configuration of Testing framework using `npm install jest @types/jest ts-jest -D`

# Configuration of Jest, TypeScript & package.json

- Configuration of `jest.config.js` file
- Additional Configuration of `tsconfig.json` file
- Configuration of `package.json` file to inclide `jest` as a test runner

# Basic Example of using TDD for adding two numbers

- Create `addNumbers.spec.ts` file to write the TDD test cases for adding two numbers
- Create `addNumbers.ts` file to write the actual code for adding two numbers

# Example of using TDD for checking if a string is a palindrome

- Create `palindrome.spec.ts` file to write the TDD test cases for checking if a string is a palindrome
- Create `palindrome.ts` file to write the actual code for checking if a string is a palindrome
- Check the test cases defined in `palindrome.spec.ts` file by running `npm run test` command
- Defining the test cases for the palindrome function

[x] An inputted string reads the same forward and backward for e.g - "racecar" .

[x] The input string which is not the same when read in reverse, is not a palindrome. e.g "hello"

[x] The function should ignore the case while determining whether the string is palindrome or not. e.g "Madam" should be considered as a palindrome.

[x] The function should handle spaces and recognize the input string accordingly. e.g "A man, a plan, a canal, Panama"

# Consider the non-word characters like spaces, punctation marks etc while determining palindrome strings

[x] The function should consider special characters while determining palindrome strings. e.g "$malyalam$"

[x] Some of the edge cases to be considered: A single character or an empty string is also considered as a palindrome. e.g "a", "".

# Adding all the defined test cases for the palindrome function
