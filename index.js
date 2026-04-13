// alert("Hello");
// console.table({ 1: "Vishw", 2: "someoneelse" });
// console.group("This is example of the grouping");
// console.log(100);
// console.error("Alrert");
// console.warn("This is a warning");
// console.log("You Can go now");
// console.groupEnd();

// const a = 5;
// console.log(a);

// const person = {
//   name: "brad",
// };
// person.email = "brad@gmail.com"; // This is allowed
// console.log(person);
// a = a + 1; // Why this is not?
// console.log(a);

// let name1 = "john"; // this will store in the stack as a new variable and value
// console.log(name1);
// let age = 30; // this will store in the stack as a new variable and value
// console.log(age);
// let newName = name1; // this will store in the stack as a new variable and value
// console.log("The New Name before changing it: ", newName);
// //  means change in the newname will not change the actual name1
// newName = "Prakash";
// console.group("This is example of the stack memory changing");
// console.log("The New name=", newName);
// console.log("The Old name=", name1);
// console.groupEnd();

// let person = {
//   name: "jonh",
//   age: 30,
// };
// let Newperson = person;

// console.group("This is example of the stack memory changing");
// console.log("The Original Person", person);
// console.log("The New Person", person);
// console.groupEnd();

// Newperson.name = "Prakash";

// console.group(
//   "The newPerson has been modified which also changed the value of the person due to stored in the heap",
// );
// console.log("The Original Person", person);
// console.log("The New Person", person);
// console.groupEnd();

// let num = "35.6";
// // num = +num;   unary operator for the type conversion
// // num = parseInt(num); // lossy conversion
// // num = parseFloat(num); // convert to complete float value
// num = Number(num); // convert to any float integer value no lossy coversion
// console.log(num, typeof num);

// num = num.toString(); // method apply to primitive
// console.log(num, typeof num); // this will work cause js will temporarily wrap the num to object
// amount = 100.456;
// amount = String(amount); // constructor funtions
// console.log(amount, typeof amount);

// for the parseFloat and parseInt the type will be
// let name = "0";
// name = Boolean(name);
// console.log(name);
// for the boolean type conversion anything other than the 0 is a truthy value even "0" is a truthy
// trying to convert the string to the number will give the NaN as value and number as type
// let value1 = "someString";
// value1 = Number(value1);
// console.log(value1, typeof value1);

//  all of below will be NaN and type will be number
// console.log("first" / 3, typeof ("first" / 3));
// console.log(undefined + undefined);
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);

// let num = 5 + "5";
// console.log("This will convert to string concatination", num);

// num = 5 - "5";
// console.log("This will convert to number ", num);
// // same for the * , / , % ,**

// num = 5 + null;
// console.log("This will convert to number ", num);
// num = 5 + true;
// console.log("This will convert to number conver boolean to number", num);
// num = 5 + undefined;
// console.log(
//   "This will convert to number conver boolean to number with NaN value",
//   num,
// );

let string = "hello";
console.log(string.length);
// length is a property and we can access all properties and methods by
console.log(string.__proto__);
console.log(string.slice(4, 0));
