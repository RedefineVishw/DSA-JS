function registerUser(user = "bot") {
  // This method is used after the ES 6 passing the default parameter
  //   if (!user) {
  //     user = "Bot";
  //   } // This method was used before the ES6
  return user + " is Registerd";
}

console.log(registerUser());

function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(2, 4, 6, 7, 20, 45));

// object as argument
function loginuser(user) {
  return `The user ${user.name} is logged in with the id:${user.id}`;
}
console.log(loginuser({ name: "user1", id: 23 }));

// This is called the funtion expression
const sum1 = function () {
  let x = 2;
  function sum2() {
    let y = 4;
    console.log(x + y);
  }
  sum2();
  console.log(x);
};
sum1();

// Arrow Funtion Declaration
const arrowfun = (a, b) => a + b;
console.log(arrowfun(2, 3));

// IIFE -> immediatly invoked funtions
// funtion which are declared and invoked at same time
// run in its own excution context

// we can pass the parameters here to.
// we can add the funtions inside the IIFE but we cannot invole it out side of the IIFE
(function (name) {
  console.log("Hello from IIFE to", name);
  const hello = () => console.log("Hello");
  hello();
})("Shawn");

// if you call the IIFE inside it again it will crash the console.
// (function hello() {
//   console.log("Hello");
//   hello();
// })();
// This above funtion will call infinite loop.

const getCelsius = (a) => (b = (a - 32) * (5 / 9));
console.log(getCelsius(83));

const minMax = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (a of arr) {
    if (min > a) {
      min = a;
    }
    if (max < a) {
      max = a;
    }
  }
  return { max: max, min: min };
};

// const minMax = (arr) => {
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);
//   return { min, max };
// };
console.log(minMax([1, 2, 5, 8, 3, 9]));

const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log("it is january");
    break;
  case 2:
    console.log("it is a february");
  default:
    console.log("it is not jan of feb");
}
// ========== Falsy Values ==========
// false
// null
// undefined
// '' or "" empty string
// 0
// Nan
// Other than this 6 all of the vlaues are the truthy even the '0', " ",{}, []

// Truthy and Falsy Caveat
let num = 0;
if (num) {
  console.log("This is your number", num);
} else {
  console.log("Please enter the number");
}
// In above case the second condition will executed cause the 0 is a falsy value
// in this cases do 
// if(!isNaN(num))  or if(num !== undefined)