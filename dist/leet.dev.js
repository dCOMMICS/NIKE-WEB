"use strict";

/**
 * @param {string} val
 * 
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

  return toBe, notToBe;
};
/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */