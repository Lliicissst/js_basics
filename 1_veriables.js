//! let vs const, naming snake_case, SCREAMING_SNAKE_CASE, camelCase

// const NUMBER_ONE = true;
// let numberTwo = 2;

// numberTwo = "1";
//? dynamic typing

// visible scope, function 'hello' example
function hello(name) {
  let hi = "Hello ";
  console.log(hi + name + "!");
}
let yourName = "Herman";

hello(yourName);
// console.log(hi);
// console.log(NUMBER_ONE + numberTwo);
