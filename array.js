const fruits = ["banana", "pineapple", "pear"];
const berries = ["rasberry", "blueberry", "blackberry"];

fruits.push(berries);
console.log(fruits); // nesting of the array

// We can access the nested elements by doing this
console.log(fruits[3][1]);

// Below is the examle of the nesting of the mutliple array
const allfruits = [fruits, berries];
console.log(allfruits);
console.log(allfruits[0][3][1]); // multi level nesting
// flattern the array
x = allfruits.flat();
console.log("All Fruits:", x); // just at the single level
y = allfruits.flat().flat(); // we can chain the methods
console.log(y);

// ============ Spread Operators ====================
// At high level the spread operators are expand iterables into individual values

let arr1 = [1, 2, 3];
console.log(arr1); // This will print the array
console.log(...arr1); // This will print the values of the array as individual elements

// Spread operator will only create the shallow copy

// ============== Note ==================
// A shallow copy is a copy of an object or array where only the top-level structure is duplicated, but nested objects or arrays are still shared by reference between the original and the copy.

// const person = {
//   name: "xyz",
//   address: {
//     city: "Ahm",
//     area: "bopal",
//   },
// };
// console.log(person);
// const person2 = { ...person };
// console.log(person2);
// person2.address.city = "baroda"; // As it is nested the shallow copy will change the original
// console.log(person); // As it is not nested the original will not be affected
// person2.name = "abc";
// console.log(person);
// console.log(person2);

// Spread operator can be used for the merging the array or for the adding elements to the array
arr1 = [2, 3, 4, 5];
let arr2 = [6, 7, 8];
let arr3 = [arr1, arr2]; // This will not mrege the array it will create a nested array
console.log(arr3);
arr3 = [0, 1, ...arr1, ...arr2, 9]; // This will merge the array and add the elements to the specific index in the array
console.log(arr3);

// The spread operator can be used for the adding element merging the array and objects and even the overriding the properties of the object
// It can be used for the passing array elements as an argument in the funtion
// Math.max(...[1, 2, 3]); // ✅ 3
// Math.max([1, 2, 3]); // ❌ NaN

// Strings are iterable, so you can spread them into characters.
const str = "JS";
const chars = [...str];

console.log(chars); // ["J", "S"]

// =============== Challanges ===============================
// Take below two array concat them and remove the duplicate element 5
const array = [1, 2, 3, 4, 5];
const array2 = [5, 6, 7, 8, 9, 10];
array.splice(4);
const array3 = [...array, ...array2];
console.log(array3);

// Object Literals
const person = {
  name: "john doe",
  age: "30",
  isAdmin: false,
  address: {
    street: "123 xyz st",
    city: "boston",
    state: "MH",
  },
  hobbies: ["music", "dance", "run"],
};

// The object can have the array, string, nested objects and primitive types also.
let ab = person.name;
console.log(ab); // print the name
ab = person.address;
console.log(ab); // print the adress object
ab = person.hobbies;
console.log(ab);
ab = person.address.city;
console.log(ab);
person.address.city = "new york";
person.name = "Jane Doe";
person.hobbies[1] = "Swimming";
delete person.address.state;
console.log(person);
// This is how the object literals can be modified
// The obnject can have the funtion and it can access the other properties of the object also
person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};
console.log(person);
ab = person.greet(); // The funtion can be accessed like this

const todo = new Object();
todo.id = 1;
todo.todoName = "Do Something";
console.log(todo);
const obj = { ...todo, ...person }; // This is how the object is concatinated
console.log(obj);

let anotherObject = Object.assign({}, todo, person);
console.log(anotherObject); // This is used before the spread operator intorduced

x = Object.keys(person); // This will create an array of the Object keys
console.log(x);
x = Object.entries(person); // This will return the arrays of the keyvalues pairs
console.log(x);

const {
  name: personName,
  address: { city },
  hobbies,
} = person; // This is called the destructuring of the object and ther changing the keynames
console.log(personName, hobbies, city);

//  Array spreading and destructuring
const arr4 = [1, 2, 3, 8, 4, 5, 5, 8, 8];
const [second] = arr4; // The name can be anything but the element will be fetched the number wise
console.log(second);
const [frt, sec, ...rest] = arr4;
console.log(frt, sec, rest); // here the sp;read operator called the rest operator

// ================ JSON =====================
const str1 = JSON.stringify(person); // convert object to -> JSON
console.log(str1);

const object = JSON.parse(str1); // convert JSON -> Object
console.log(object);

// You cannot access the properties of the json directly first need to parse it then access it.

// Challange
const library = [
  {
    title: "First Title",
    author: "First Author",
    status: {
      own: true,
      read: false,
      reading: false,
    },
  },
  {
    title: "Second Title",
    author: "Second Author",
    status: {
      own: true,
      read: false,
      reading: false,
    },
  },
];
console.log(library);

const { title: firstBook } = library[0];
console.log(firstBook);

let abc = Math.max(...arr4);
console.log(abc);
let abcd = arr4.filter((item) => item === abc).length;
console.log(abcd);

let maximum = 0;
let maxNum;
arr4.forEach((a) => {
  if (a > maximum) {
    maxNum = 1;
    maximum = a;
  } else if (a === maximum) {
    maxNum++;
  }
});
console.log(maxNum);
console.log(typeof arr4.length);
