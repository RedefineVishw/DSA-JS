// Polyfills are the code in javascript that is written for the implemeting the feature that is not exist in the older browsers.
// The Features of the ES6 is not supported by the older browsers.

// Every function in JavaScript automatically gets a property called prototype.
// This prototype is used to attach methods or properties that will be shared by all objects created from that function (when used as a constructor).
// js use the prototype based inheritance not the class based hence use the prototype keyword to attach that property to it.

// MAP Polyfill

// Edge cases like the invalid funtion passing.

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let result = [];
    for (let i = 0; i < this.length; i++) {
      // Skip empty slots / undefined elements in sparse arrays
      if (i in this) {
        result[i] = callback.call(thisArg, this[i], i, this);
      }
    }
    return result;
  };
}

// FILTER Polyfill
if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let result = [];

    for (let i = 0; i < this.length; i++) {
      if (i in this) {
        let value = this[i];
        if (callback.call(thisArg, value, i, this)) {
          result.push(value);
        }
      }
    }

    return result;
  };
}

// Edge cases the length of array is 0.
// REDUCE Polyfill
if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    let accumulator,
      startIndex = 0;

    // If no initialValue provided
    if (arguments.length > 1) {
      accumulator = initialValue;
    } else {
      // Find first non-empty index
      while (startIndex < this.length && !(startIndex in this)) {
        startIndex++;
      }

      if (startIndex >= this.length) {
        throw new TypeError("Reduce of empty array with no initial value");
      }

      accumulator = this[startIndex];
      startIndex++;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (i in this) {
        accumulator = callback(accumulator, this[i], i, this);
      }
    }

    return accumulator;
  };
}

console.log([1, 2, 3].myMap((x) => x * 2));
// [2, 4, 6]
console.log([10, 5, 8, 3].myFilter((x) => x > 5));
// [10, 8]
console.log([1, 2, 3, 4].myReduce((acc, val) => acc + val, 0));
// 10
