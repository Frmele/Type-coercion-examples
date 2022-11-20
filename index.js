// The operation we focus on is: subtraction with -
// The type coercion rules here convert birthYear into a number.
// The resulting expression is then 2022 - 1991 = 31.
// This is what we would expect. 🎉
const birthYear = "1991";
console.log("In 2022 you were this old");
console.log(2022 - birthYear); // 31


// The operation we focus on is: console.log
// Type coercion is also happening here!
// console.log is an operation that expects a string.
// So if it does not get a string it will try
// to convert 50 into a string, which is successful!
// This is what we would expect. 🎉
const totalPrice = 50;
console.log(50);


// The operation we focus on is: string interpolation
// Type coercion is also happening here!
// When we do string interpolation it actually expects a string.
// So if it does not get a string it will try
// to convert 50 into a string, which is successful!
// This is what we would expect. 🎉
const discountPercentage = 10;
console.log(`You get a ${discountPercentage}% discount.`);


// The operation we focus on is: exponentiation with **
// ** expects two numbers.
// If it does not get those it will try to convert them
// to numbers which is successful!
// This is what we would expect. 🎉
console.log("2" ** "3"); // 8


// The operation we focus on is: slice
// slice expects a number here
// If it does not get those it will try to convert them
// to numbers which is successful!
// This is what we would expect. 🎉
const name = "Samuel Sinyangwe";
console.log(`The last 7 characters of "${name}" are:`);
console.log(name.slice("7"));


// This is similar to the example you've seen.
// The operation we focus on is: +
// + expects two numbers OR two strings
// Because of the type coercion rules 100 gets converted into "100"
// This is not what we would expect. 😕
const currentYear = "2022";
console.log("In a 100 years the year will be:");
console.log(currentYear + 100);

// There are two operation we focus on: + and slice.
// + expects two numbers OR two strings
// Because of the type coercion rules 1 gets converted into "1"
// The result of "7" + "1" is "71".
// slice then expects a number here
// Because it does not get a number it will convert "71" to 71.
// Then the operation becomes slice(71)
// This is not what we would expect. 😕
console.log(`The last 8 characters of "${name}" are:`);
console.log(name.slice("7" + 1)); // Empty
