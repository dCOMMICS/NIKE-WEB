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
