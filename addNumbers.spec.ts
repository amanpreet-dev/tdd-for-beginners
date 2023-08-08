// addNumbers.spec.ts
import { addNumbers } from "./addNumbers";

test("should add two numbers correctly", () => {
  expect(addNumbers(2, 3)).toBe(5);
});
