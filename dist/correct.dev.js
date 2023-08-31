"use strict";

/**
 * @param {string} val
 * @return {Object}
 */
var expect = function expect(val) {
  var toBe = function toBe(x) {
    if (x === val) return true;
    throw new Error("Not Equal");
  };

  var notToBe = function notToBe(x) {
    if (x !== val) return true;
    throw new Error("Equal");
  };

  return {
    toBe: toBe,
    notToBe: notToBe
  };
}; // Example usage


try {
  var result1 = expect(5).toBe(5); // true

  console.log(result1); // true
} catch (error) {
  console.error(error.message); // This should not throw an error
}

try {
  var result2 = expect(5).notToBe(5); // true

  console.log(result2); // true
} catch (error) {
  console.error(error.message); // Should throw "Equal" error
}