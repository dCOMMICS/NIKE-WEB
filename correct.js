/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let toBe = function(x){
      if (x === val) return true;
      throw new Error("Not Equal");
    }
    
    let notToBe = function(x){
      if (x !== val) return true;
      throw new Error("Equal");
    }
    
    return {
      toBe: toBe,
      notToBe: notToBe
    };
};

// Example usage
try {
  const result1 = expect(5).toBe(5); // true
  console.log(result1); // true
} catch (error) {
  console.error(error.message); // This should not throw an error
}

try {
  const result2 = expect(5).notToBe(5); // true
  console.log(result2); // true
} catch (error) {
  console.error(error.message); // Should throw "Equal" error
}
