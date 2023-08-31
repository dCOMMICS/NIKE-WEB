let O = [..."/*+-"]
let of = 0.reduce((a,v))=> (a[v])= new Function('a', 'b', `return a${v}b`),

// this code works fine on my side//


// leetcode//

@return {function}

const createHelloWorld = function() {
    return function (...args) {
        return "Hello World";
    }
};

// day 1 done//

// leetcode//
// day 2//
var createCounter = function(n){
    return function () {
        return n++; // hidden counter
    };
}

const counter = createCounter(10)
counter()//10
counter()//11
counter()//12

// leetcode//
// day 3 done//

var createCounter = function (init){
    let count = init;

    function increment(){
        return ++count;
    }
    function decrement(){
        return --count;
    }
    function reset(){
        count = init;
        return count;
    }

    increment()
    decrement()
    reset()

    return {
        increment: increment,
        decrement: decrement,
        reset: reset,
    }
};

// DAY 4 LEETCODE/

/**
 * @param {string} val
 * @return {Object}
 */

type ToBeOrNotBe = {
    toBe; (val: any) => boolean;
    notToBe; (val: any) => boolean;
  };
  function expect(val: any): ToBeOrNotBe {
    return {
      toBe : (val2) =>{
        if (val === val){
          return true
        }else(
          throw new Error {"Not Equal"}
        )
      }, notToBe:(val2) =>{
        if (val2 !== val){
          return true
        }
        else {
          throw new Error ("Equal")
        }
        
      },
    }
  };
  /**
   * expect(5).toBe(5); // true
   * expect(5).notToBe(5); // throws "Equal"
   */
  
  