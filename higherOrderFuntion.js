//  A higher-order function is a function that does at least one of the following:
// 1. Takes one or more functions as arguments, or
// 2. Returns a function as its result
// ✅ Reduce code duplication
// ✅ Make code more reusable
// ✅ Improve readability and expressiveness
// ✅ Enable functional programming patterns

// When to use which loop
// for loop  ->  “Walk 10 steps”  // start end and condition is known

// while loop -> “Keep walking while the light is green” // only condition is known

// do...while loop  -> “Open the door once, then check if you need to stay” // run at least once the loop

function greet(name) {
  return "Hello " + name;
}

function greeting(name) {
  return "Greetings to " + name;
}

function processUser(name, callback) {
  return callback(name);
}
console.log(processUser("jane", greet));
console.log(processUser("john", greeting));

// Returning a Funtion
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(6)); // Output: 10

// ======= fizz buzz chalange ========
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   let result = "";
//   if (i % 3 === 0) result += "Fizz";
//   if (i % 5 === 0) result += "Buzz";

//   console.log(result || i); // conditional or operator the empty string is a falsy value
// }

// loop throgh array
const arr = [2, 3, 4, 112, 6, 7, 1, 34, 2, 56, 11, 17, 94];
// for (const i of arr) {
//   console.log(i);
// }

// loop throght the string
// const string = "dfhweuifhihgedh";
// for (const ch of string) {
//   console.log(ch);
// }

// loop over the map
const map = new Map();
map.set("name", "jhon");
map.set("age", "24");
console.log(map);
for (const [key, value] of map) {
  console.log(key, value);
}

// JS object vs the Map
// js obj keys -> only string type -> order not preserved
// map keys => any value -> order is preserved

const obj = {
  color: "red",
  material: "metal",
  code: "GS200",
  materialCost: "20$",
};
for (const key in obj) {
  console.log(key, obj[key]);
}

// if for in loop used for the array it will retrun the index of the array as the keys.
// arr.forEach((a) => {
//   console.log(a);
// });

// for each will not return any thing nor it will modify the array
function logArray(a) {
  console.log(a);
}
arr.forEach(logArray);

const result = arr.filter((a) => a > 5);
console.log(result);

// The result return here is a shallow copy means the nested data will be having the same refernce if there.
const result2 = arr.map((a) => a * 2);
console.log(arr);
console.log(result2);
// Create a new array of same size with the tranformed values

// Reduce Funtion: return a single value
const largest = arr.reduce((a, b) => (a > b ? a : b), 0);
console.log(largest);
// this will reduce the array to the largest value of the elements

const people = [
  {
    firstName: "person1",
    lastname: "person1",
    email: "person1@email.com",
    phone: "111-111-1111",
    age: 30,
  },
  {
    firstName: "person2",
    lastname: "person2",
    email: "person2@email.com",
    phone: "111-111-1112",
    age: 24,
  },
  {
    firstName: "person3",
    lastname: "person3",
    email: "person3@email.com",
    phone: "111-111-1113",
    age: 47,
  },
  {
    firstName: "person4",
    lastname: "person4",
    email: "person4@email.com",
    phone: "111-111-1114",
    age: 15,
  },
];

const youngPeople = people
  .filter((a) => a.age <= 25)
  .map((a) => ({
    name: a.firstName + "" + a.lastname,
    email: a.email,
  }));
console.log(youngPeople);

const numbers = [-3, 5, 28, -4, -68, 8];
const sum = numbers.filter((a) => a > 0).reduce((a, b) => a + b, 0);
console.log(sum);

const word = ["afgfgr", "dver", "oersbd"];
const capitalizeWords = word.map((a) => (a = a[0].toUpperCase() + a.slice(1)));
console.log(capitalizeWords);
