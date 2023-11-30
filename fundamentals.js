// (1) Intro / Variables - - - - - - - - - - - - - - - - - - - - - - - - -
// (1) Intro / Variables - - - - - - - - - - - - - - - - - - - - - - - - -
// (1) Intro / Variables - - - - - - - - - - - - - - - - - - - - - - - - -

// variable declaration - var or let can be reassigned. Const can't
let num; // change to var and still OK
// variable assignment
num = 10;
console.log(num);
// and reassignment
num = 20;
console.log(num);
// - - - - - - - - - - - - - -

// typeof operator
logIt = (item) => console.log(item);
// typeof - array
myArray = [1, 2, 3];
logIt(typeof myArray);
// typeof - object
myObject = { 1: "a", 2: "b", 3: "c" };
logIt(typeof myObject);
// typeof - null
somethingOrOther = null; // outputs object - a well known bug
logIt(typeof somethingOrOther);
// typeof - function
function nameIt(bla) {
  console.log(bla);
}
nameIt("hello world!");
console.log(typeof nameIt);
// there is also...NaN
logIt(0 / 0);
logIt(Infinity - Infinity);
// - - - - - - - - - - - - - -

// .length string property
let snake = "rattlesnake";
let snakes = ["adder", "grass snake", "viper", "boa constrictor"];
console.log(snake.length);
console.log(snakes.length);
// - - - - - - - - - - - - - -

// Coercion
// explicit coercion
let a = "42";
let b = Number(a);
console.log(b); // 42 - the number
// implicit coercion
let c = "42";
d = c * 1;
console.log(d); // 42 - the number
// equality
// == checks for equality with coercion allowed
// === checks for equality without allowing coercion
let x = "42";
let y = 42;
console.log(x == y); // true
console.log(x === y); // false
// - - - - - - - - - - - - - -

// The + operator can mean mathmatical addition OR string concatenation
console.log(2 + 2);
console.log("2" + "2");
console.log(1 + 2 + "1"); // addition then concatenation
// - - - - - - - - - - - - - -

// exponentiation (**)
console.log(2 ** 2); // 4  (2 * 2)
console.log(2 ** 3); // 8  (2 * 2 * 2)
console.log(2 ** 4); // 16 (2 * 2 * 2 * 2)
// - - - - - - - - - - - - - -

// conversion of string to number:
let apples = "2";
let oranges = "3";
// without conversion:
console.log(apples + oranges); // '23'
// conversion using +:
console.log(+apples + +oranges); // 5
// conversion using Number
console.log(Number(apples) + Number(oranges)); // 5
// - - - - - - - - - - - - - -

// CONVERT STRING to NUMBER
// 1.
// Number() function
var stringToNumber = function (str) {
  const num = Number(str);
  return num;
};
// 2.
// unary operator
var stringToNumber = function (str) {
  return +str;
};
// 3.
// parseInt (or parseFloat)
var stringToNumber = function (str) {
  return parseInt(str);
};
// 4.
// multiply by 1
var stringToNumber = function (str) {
  return str * 1;
};
// - - - - - - - - - - - - - -

// CONVERT NUMBER TO STRING
// 1.
// String keyword
function numberToString(num) {
  return String(num);
}
// 2.
// toString() function
function numberToString(num) {
  return num.toString();
}
// 3.
// implicit coercion (not very readable)
function numberToString(num) {
  return "" + num;
}
// - - - - - - - - - - - - - -

// variables - var, let and const
var myName = "Gen";
let myAge = 21;
const mySex = "female";
myName = "Spongebob Squarepants";
myAge = 21;
// you can't do this: mySex = 'male' - because it was declared with const;
console.log(
  `Hello my name is ${myName} I am aged ${myAge} and I am a ${mySex}`
);
// - - - - - - - - - - - - - -

// arithmetic operators
addIt = (a, b) => a + b;
subtractIt = (a, b) => a - b;
multiplyIt = (a, b) => a * b;
divideIt = (a, b) => a / b;
remainderIt = (a, b) => a % b;
console.log(addIt(5, 5));
console.log(subtractIt(15, 5));
console.log(multiplyIt(2.5, 4));
console.log(divideIt(20, 2));
console.log(remainderIt(110, 50));
// - - - - - - - - - - - - - -

// using +=
let counter = 1;
// this...
counter = counter + 1;
// is the same as this...
counter += 1;
console.log(counter);
// - - - - - - - - - - - - - -

// string methods:
let animal = "grizzly bear lives in the forest";
// find first letter of string
console.log(animal[0]);
// find last letter of string
console.log(animal[animal.length - 1]);
// find second to last letter of string
console.log(animal[animal.length - 2]);
// find second word of string
animal = animal.split(" "); // creates array
console.log(animal[1]);
// find last word of string...
console.log(animal[animal.length - 1]);
// find second to last word of string...
console.log(animal[animal.length - 2]);
// - - - - - - - - - - - - - -

// Math objects
// find lowest value in a string of numbers
console.log(Math.min(1, 2, 3, 4, 5));
// find highest value
console.log(Math.max(1, 2, 3, 4, 5));
// find lowest value in an ARRAY of numbers
console.log(Math.min(...[1, 2, 3, 4, 5]));
// find highest value in an ARRAY of numbers
console.log(Math.max(...[1, 2, 3, 4, 5]));
// access array elements using Math object with "..." (spread operator)
let whatever = [1, 2, 3, 4, 5, 6];
console.log(Math.min(whatever)); // NaN
console.log(Math.min(...whatever)); // 1
// -
// rounding up/down
console.log(Math.round(46.789));
console.log(Math.ceil(46.789));
console.log(Math.floor(46.789));
// random
console.log(Math.random());
// random interger 0 or 1
console.log(Math.round(Math.random()));
// random integer 0 - 100
console.log(Math.round(Math.random() * 100));
// random integer 0 - 4
console.log(Math.round(Math.random() * 4));
// create an array of 10 random numbers from 0 - 100
let randNumArray = [];
for (i = 0; i < 10; i++) {
  randNumArray.push(Math.round(Math.random() * 100));
}
console.log(randNumArray);
// - - - - - - - - - - - - - -

// accessing data
// STRINGS
const string = "Genevieve Elizabeth Heald";
console.log(string[0]);
console.log(string.indexOf("E"));
// split string into words:
const arrayFromString = string.split(" ");
console.log(arrayFromString);
// ARRAYS
console.log(arrayFromString[0]);
// OBJECTS
const robot = { name: "Robbie", colour: "silver", chargeLevel: 60 };
console.log(robot.name);
//accessing data in loops:
for (i = 0; i < string.length; i++) {
  console.log(string[i]);
}
for (i = 0; i < arrayFromString.length; i++) {
  console.log(arrayFromString[i]);
}
// - - - - - - - - - - - - - -

// (2) Conditionals - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (2) Conditionals - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (2) Conditionals - - - - - - - - - - - - - - - - - - - - - - - - - - -

// conditionals
// if, else
let lucyLovesJack = true;
if (lucyLovesJack) {
  console.log(`Jack, Lucy loves you!`);
} else {
  console.log(`Sorry Jack, Lucy does not love you`);
}
// if, else and else if
let jackLovesLucy = 3;
if (jackLovesLucy === 3) {
  console.log(`Lucy, Jack loves you!`);
} else if (jackLovesLucy === 2) {
  console.log(`Lucy, Jack likes you`);
} else if (jackLovesLucy === 1) {
  console.log(`Lucy, Jack's not that into you`);
} else {
  console.log(`Lucy, we're not sure how Jack feels.`);
}
// - - - - - - - - - - - - - -

// truthy and falsy
// 7 falsey values:
let log = console.log;
let a = "";
let b = "";
let c = null;
let d = undefined;
let e = false;
let f = NaN;
let g = 0;
if (a || b || c || d || e || f || g) {
  log("this value is truthy");
} else {
  log("this value is falsey");
}
// - - - - - - - - - - - - - -

// comparison operators
if (1 > 2) {
  console.log("one is greater than two");
} else {
  console.log("one is NOT greater than two");
}
if (1.234 === 1.234) {
  console.log(true);
} else {
  console.log(false);
}
if (45 < 54) {
  console.log(true);
} else {
  console.log(false);
}
if (5 + 5 === 2 + 3 + 4) {
  console.log(true);
} else {
  console.log(false);
}
// - - - - - - - - - - - - - -

// logical operator
let month = "August";
let year = 2018;
if (month === "August" || year === 2019) {
  console.log(`It is ${month} ${year}`);
} else {
  console.log(`It is NOT ${month} ${year}`);
}
// - - - - - - - - - - - - - -

// ternary operator (instead of if...else statement)
let dinner = "stew";
dinner === "pasta" ? console.log("true") : console.log("false");
// - - - - - - - - - - - - - -

// switch statement (instead of multiple else ifs)
let faveColour = "pink";
switch (faveColour) {
  case "yellow":
    console.log("Yellow like the sunshine");
    break;
  case "red":
    console.log("Red like a rose");
    break;
  case "blue":
    console.log("blue like the sea");
    break;
  case "green":
    console.log("green like emeralds");
    break;
  default:
    console.log("another colour");
    break;
}
// - - - - - - - - - - - - - -

// (3) Functions  - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (3) Functions  - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (3) Functions  - - - - - - - - - - - - - - - - - - - - - - - - - - -

// parameters & arguments...
let whichYear;
function printYear(whichYear) {
  console.log(`The year is ${whichYear}`);
}
printYear(1602);
// - - - - - - - - - - - - - -

// basic function with a default value
function visitorName(name = "stranger") {
  console.log(`Hello ${name}`);
}
visitorName();
visitorName("Bob");
// - - - - - - - - - - - - - -

// functions - 4 types
// function declaration
function Sum(a, b, c, d) {
  return a + b + c + d;
}
// function expression
Subtract = function (a, b, c, d) {
  return a - b - c - d;
};
// arrow function
Multiply = (a, b, c, d) => {
  return a * b * c * d;
};
// concise body arrow function
Divide = (a, b, c, d) => a / b / c / d;
// check out the output...
console.log(Sum(20, 5, 2, 1));
console.log(Subtract(20, 5, 2, 1));
console.log(Multiply(20, 5, 2, 1));
console.log(Divide(20, 5, 2, 1));
// - - - - - - - - - - - - - -

// calling functions within others (helpers?)
function ONE() {
  console.log("Hey, I am first dude");
}
function TWO() {
  console.log("Oh, that means I am second then.");
}
function START() {
  ONE();
  TWO();
}
START();
// - - - - - - - - - - - - - -

// super simple helper functions
function doFirst(num) {
  num = num + 1; // passes 3 to next function
  return doSecond(num);
}
function doSecond(num) {
  num = num + 100; // passes 103 to next function
  return doThird(num);
}
function doThird(num) {
  return num * 100; // returns 10300 as output
}
console.log(doFirst(2));
// - - - - - - - - - - - - - -

// helper functions
// F1 - Calculate: sum of hours, multiplied by rate
// F2 - subtract tax
// F3 - round to 2 decimal places using toFixed(2), add £ sign
// console.log the function with hours worked as arguments
function calcWages(hours, rate) {
  return subTax(hours * rate);
}
function subTax(num) {
  let taxrate = 0.1;
  num = num - num * taxrate;
  return formatWages(num);
}
function formatWages(num) {
  return "£" + num.toFixed(2);
}
console.log(calcWages(10, 10.32));
// - - - - - - - - - - - - - -

// nested function (from eloquent javascript)
const hummus = function (factor) {
  // inner function
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  // end of inner function
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);
// hummus function is called -> factor = 2
// ingredient function called -> amount = 1, unit = "can", name = "chickpeas"
// ingredientAmount is calculated as amount(1) * factor(2) -> 2
// if loop runs because ingredientAmount is more than 1
//      unit += "s" adds s to can -> cans
//      ${ingredientAmount} ${unit} ${name} -> 2 cans chickpeas
// ingredient function called again... etch
// - - - - - - - - - - - - - -

// (4) Scope  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (4) Scope  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (4) Scope  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// using var...
var boysName = "Nick";
boysName = "John";
console.log(boysName);
// using let...
let girlsName = "Ada";
girlsName = "Eva";
console.log(girlsName);
// using const...
const teddyName = "Teddy";
teddyName = "Cuddles";
console.log(teddyName);
// - - - - - - - - - - - - - -

// a is being declared in the global scope (const, var and let all work)
// b and c are being declared within block scope (only var works here)
const a = 10;
if (true) {
  var b = 20;
  var c = 30;
}
console.log(a + b + c); // → 60
// - - - - - - - - - - - - - -

// scope...
// child functions can access their parent variables
// but parent functions can't access their childrens variables
function ONE() {
  let myName = "Gen";
  console.log(
    `OUTER FUNCTION: My name is ${myName} but I can\'t access my age here!`
  );

  function TWO() {
    myName = "Genevieve";
    myAge = 21;
    console.log(`INNER FUNCTION: My name is ${myName} and I am ${myAge}`);
  }
  TWO();
}
ONE();
// - - - - - - - - - - - - - -

// (5) Arrays  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (5) Arrays  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (5) Arrays  - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// an array literal
let myJobs = ["wash hair", "pay bills", "book holiday"];
// display length of array (number of elements)
console.log(myJobs.length);
// display length of array (number of elements)
myJobs.length;
// displaying an element
console.log(myJobs);
// displaying a particular element
console.log(myJobs[0]);
// adding an element
myJobs.push("water plants");
console.log(myJobs);
// removing an element using .pop
myJobs.pop();
console.log(myJobs);
// removing an element by index
myJobs.splice(0, 1);
console.log(myJobs);
// changing an element
myJobs[0] = "play with Ada";
console.log(myJobs);
// - - - - - - - - - - - - - -

// Using Math.floor & Math.random to generate a random element from an array
let possColours = ["yellow", "red", "green", "blue"];
let faveColour = possColours[Math.floor(Math.random() * 4)];
console.log(`Your favourite colour is...\n${faveColour}`);

// passing values from an array into a function
let fruitList = ["orange", "pear", "apple", "banana", "pineapple"];
let faveFruit1 = fruitList[1];
let faveFruit2 = fruitList[4];
function makeSmoothie() {
  console.log(`Yum. A ${faveFruit1} and ${faveFruit2} smoothie!`);
}
makeSmoothie();
// - - - - - - - - - - - - - -

// nested arrays
let boxes = [
  ["paints", "brushes"],
  ["paper", "pens", "glue"],
];
console.log(boxes[0][0]);
console.log(boxes[1][2]);
boxes[0].push("canvas");
console.log(boxes[0]);
// - - - - - - - - - - - - - -

// (6) Loops  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (6) Loops  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (6) Loops  - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// for
// simple for loop
let fruitList = ["orange", "pear", "apple", "banana", "pineapple"];
for (i = 0; i < fruitList.length; i++) {
  console.log("I love to eat a nice juicy", fruitList[i]);
}
// - - - - - - - - - - - - - -

// for...in
// loops through an object
var character = {
  firstName: "Spongebob",
  secondName: "Squarepants",
  house: "pineapple",
  job: "fry cook",
};
for (x in character) {
  console.log(x); // gets the keys
}
for (x in character) {
  console.log(character[x]); // gets the values
}
// - - - - - - - - - - - - - -

// for...in
const obj = {
  a: 3,
  b: 6,
  c: 4,
  d: 7,
  e: 10,
};
for (let key in obj) {
  value = obj[key];
  console.log(key + ": " + value);
}

// for...in
// loops through arrays
var spongebob = ["Bob", "Patrick", "Gary", "Mr Crabs", "Squidward"];
var str = "";
for (x in spongebob) {
  console.log(x); // gets the array index positions
}
for (x in spongebob) {
  console.log(spongebob[x]); // gets the elements (values)
}
// - - - - - - - - - - - - - -

// for...in
// loops through a string
var bobString = "Spongebob";
for (x in bobString) {
  console.log(x); // gets the string index positions
}
for (x in bobString) {
  console.log(bobString[x]); // gets the characters (values)
}
// - - - - - - - - - - - - - -

// for...of
// loops through arrays
var spongebob = ["Bob", "Patrick", "Gary", "Mr Crabs", "Squidward"];
var str = "";
for (x of spongebob) {
  console.log(x); // gets the elements (values)
}
// for...of
// loops through a string
var bobString = "Spongebob";
for (x of bobString) {
  console.log(x); // gets the characters (values)
}
// - - - - - - - - - - - - - -

// forEach (see Iterators)
// one way:
var spongebob = ["Bob", "Patrick", "Gary", "Mr Crabs", "Squidward"];
spongebob.forEach(function (element) {
  console.log(element);
});
// -
// another way:
// create a handling function:
function loopRound(x) {
  console.log(x);
}
// Then point forEach to the function:
var spongebob2 = ["Bob", "Patrick", "Gary", "Mr Crabs", "Squidward"];
spongebob2.forEach(loopRound);
// - - - - - - - - - - - - - -

// nested for loop
let fruitList = ["orange", "pear", "apple", "banana", "pineapple"];
let vegList = ["peas", "sprouts", "beans", "carrots", "broccoli"];
for (i = 0; i < fruitList.length; i++) {
  console.log(fruitList[i].toUpperCase());

  for (j = 0; j < vegList.length; j++) {
    console.log(vegList[j]);
  }
}
// - - - - - - - - - - - - - -

// simple while loop
let husband = "Carlos";
let daughter = "Ada";
while (husband === "Carlos" && daughter === "Ada") {
  console.log(
    `I am married to ${husband} and have a lovely daughter called ${daughter}`
  );
  break;
}
// - - - - - - - - - - - - - -

// simple do while loop
let cupsOfSugarNeeded = 12;
let cupsAdded = 0;
do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
console.log(`${cupsAdded} cups of sugar have been added`);
// - - - - - - - - - - - - -

// control loops with - break
let spongebob = ["Bob", "Patrick", "Gary", "Mr Crabs", "Squidward"];
let i = 0;
let str = ""; // (this will convert element into string)
// while loop:
while (true) {
  str += spongebob[i] + " | ";
  console.log(str);
  i++;
  // if condition - stops the loop:
  if (i == 5) {
    break;
  }
}
// - - - - - - - - - - - - -

//control loops with - continue
for (let i = 0; i < 20; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
// 0%2 == 0 continues (logs this)
// 1%2 == 1 does NOT continue (skips next line, not logged)
// 2%2 == 0 contines (logs this)
// 3%2 == 1 does NOT continue (skips next line, not logged)
// 4%2 == 0 contines (logs this)
// etc up to 20
// - - - - - - - - - - - - -

// (7) Iterators  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (7) Iterators  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (7) Iterators  - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// All iterator methods takes a callback function that can be pre-defined, or a function expression, or an arrow function.
// example of callback function...
function calculateTax(price, callBack) {
  price = price + price * 0.08;
  return callBack(price.toFixed(2));
}
function calculatePrice(num1, num2, callBack) {
  price = num1 + num2;
  return callBack(price.toFixed(2));
}
function formatAmount(price) {
  return "£" + price;
}
console.log(calculatePrice(10, 30, formatAmount));
console.log(calculateTax(103.57, formatAmount));
// - - - - - - - - - - - - -

// .forEach()
// dwarves array is an object...
let dwarves = [
  "Sneezy",
  "Sleepy",
  "Dopey",
  "Doc",
  "Happy",
  "Bashful",
  "Grumpy",
];
// .forEach is a method, anonymous function is passed as an argument.
dwarves.forEach(function (dwarf, index, array) {
  console.log(`${index} is ${dwarf}, say hi ho!`);
});
// - - - - - - - - - - - - -

// forEach() / for loop (both do the same thing)
let butterflies = ["peacock", "painted lady", "orange tip", "speckled wood"];
// for loop
for (i = 0; i < butterflies.length; i++) {
  console.log(`I just saw a lovely`, butterflies[i]);
}
// forEach()
butterflies.forEach(function (bfly) {
  console.log(`I just saw a lovely ${bfly}`);
});
// - - - - - - - - - - - - -

// forEach() -- used in 3 different ways
// array
let fish = ["piranha", "barracuda", "cod", "eel"];
// ---
// forEach() -- used with arrow function
fish.forEach((f) => console.log(f));
// ---
// forEach() passed to variable
let listOFish = fish.forEach((f) => console.log("2nd", f));
// ---
// forEach() in function
function printFish() {
  fish.forEach((f) => console.log("3rd", f));
}
printFish();
// - - - - - - - - - - - - -

// .map() - creates a new array of changed elements
var nArray = [1, 4, 9];
var roots = nArray.map(function (num) {
  return Math.sqrt(num);
});
var rootsTimesTen = roots.map(function (num) {
  return num * 10;
});
console.log(nArray);
console.log(roots);
console.log(rootsTimesTen);
// - - - - - - - - - - - - -

// .map() iterator - from code wars 'Is there a vowel in there?'
function isVow(array) {
  var newArray = array.map((num) => {
    if (num === 97) num = "a";
    if (num === 101) num = "e";
    if (num === 105) num = "i";
    if (num === 111) num = "o";
    if (num === 117) num = "u";
    return num;
  });
  return newArray;
}
//tests:
console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
);
//-> [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
console.log(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103]));
//-> ["e",121,110,113,113,103,121,121,"e",107,103]
// - - - - - - - - - - - - -

// .filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var overFour = numList.filter(function (num) {
  return num > 4;
});
console.log(overFour);
// - - - - - - - - - - - - -

// .findIndex()
let fairFood = ["popcorn", "donughts", "candyfloss", "chips", "slushy"];
let findIt = fairFood.indexOf("chips", 0);
console.log(findIt);

// .reduce()  iterates through an array and takes the values of the elements and returns a single value
// https://www.freecodecamp.org/news/reduce-f47a7da511a9/
const numbers = [4, 10, 20, 1000];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(summedNums);
// - - - - - - - - - - - - -

// simple example of reduce()
function giveSum(arr) {
  return arr.reduce((accum, value) => accum + value, 1000);
}
console.log(giveSum([1, 100, 200])); //-> 301
// - - - - - - - - - - - - -

// .reduce()  -- used in a function (from code wars 'Reduce but Grow')
function grow(x) {
  return x.reduce((passIn, item) => passIn * item);
}
console.log(grow([4, 1, 1, 1, 4])); //16
// - - - - - - - - - - - - -

// (8) Objects  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (8) Objects  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// (8) Objects  - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// object literals with methods (created by adding functions)
// use this keyword to refer to this object
// methods are created by using functions within objects (DON'T USE ARROW FUNCTIONS if using this keyword)
var genna = {
  name: "Genna",
  age: 21,
  location: "Stockport",
  "current occupation": "Interaction designer",
  sayAgeAndName() {
    /// this is an anonymous function
    console.log(`${this.name} is ${this.age}`);
  },
};
// we access properties with the dot operator
genna.sayAgeAndName();
console.log(genna.location);
// or bracket notation (if special characters including spaces)
console.log(genna["current occupation"]);
// using bracket notation to select the keys of an object.
let returnAnyProperty = (k, v) => k[v];
console.log(returnAnyProperty(genna, "age"));
// - - - - - - - - - - - - -

// changing an object
const butterfly = {
  species: "Gate Keeper",
  population: 400,
  climate: "temparate",
  extinctionIndex: "safe",
  foodPlant: "nettles",
};
// add key value pair:
butterfly.color = "grey and brown";
console.log(butterfly);
// delete key value pair:
delete butterfly.climate;
console.log(butterfly);
// amend a value:
butterfly.population = 200;
console.log(butterfly);
// - - - - - - - - - - - - -

// nested objects
// myCup is main object
var myCup = {
  material: "ceramic",
  colour: "yellow",
  cost: 14.99,
  printCup() {
    console.log(
      "This is my favourite " +
        this.colour +
        ", " +
        this.material +
        " cup. It was well worth " +
        this.cost
    );
  },
  // myDrink is nested object
  myDrink: {
    liquid: "coffee",
    temperature: "hot",
    printDrink() {
      console.log(
        "Lovely, " +
          this.temperature +
          " cup of " +
          this.liquid +
          " in my favourite " +
          myCup.material +
          " cup!"
      );
    },
  },
};
myCup.printCup();
myCup.myDrink.printDrink();
// - - - - - - - - - - - - -

// Objects - Pass By Reference (funtions mutate the object)
const myMug = {
  material: "ceramic",
  colour: "yellow",
};
let paintItBlue = (obj) => {
  obj.colour = "blue";
};
let makeItPlastic = (obj) => {
  obj.material = "plastic";
};
paintItBlue(myMug);
console.log(myMug.colour);
makeItPlastic(myMug);
console.log(myMug.material);
// - - - - - - - - - - - - -

// for...in loop - executes a given block of code for each property in an object.
var monsters = {
  Canada: "Sasquatch",
  Nepal: "Yeti",
  Scotland: "Loch Ness Monster",
};
for (country in monsters) {
  console.log("In", country, "we have the", monsters[country]);
}
// - - - - - - - - - - - - -

// privacy - underscore _ before the name of a property to mean that the property should not be altered (the recharge method should be used to change the _energyLevel)
const robot = {
  _energyLevel: 0,
  recharge() {
    this._energyLevel += 50;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
  doJobs() {
    this._energyLevel -= 25;
    console.log(`Jobs completed Energy is currently at ${this._energyLevel}%.`);
  },
};
robot.recharge();
robot.doJobs();
robot.recharge();
// - - - - - - - - - - - - -

// 3 ways to create getters and setters
//  - - - - - - - NUBMER 1: default method syntax
const myCar = {
  make: "ford",
  colour: "black",
  mileage: 23000,
  getCar() {
    // can call this getCar or whatever u want
    return `The ${this.colour} ${this.make} has done ${this.mileage} miles.`;
  },
  setColour(newColour) {
    this.colour = newColour;
  },
  setMake(newMake) {
    this.make = newMake;
  },
  setMileage(newMiles) {
    if (newMiles >= 0) {
      this.mileage = newMiles;
    } else {
      console.log("to setMileage please enter a number above 0");
    }
  },
};
console.log(myCar.getCar());
myCar.setColour("red");
console.log(myCar.getCar());
myCar.setMake("VW");
console.log(myCar.getCar());
myCar.setMileage(-3000);
console.log(myCar.getCar());
// - - - - - - - - - - - - -
//  - - - - - - - NUBMER 2: get and set keywords
var myCar = {
  defColor: "blue",
  defMake: "Toyota",
  get color() {
    return this.defColor;
  },
  get make() {
    return this.defMake;
  },
  set color(newColor) {
    this.defColor = newColor;
  },
  set make(newMake) {
    this.defMake = newMake;
  },
};
console.log(myCar.color);
console.log(myCar.make);
console.log((myCar.color = "red")); // (call setters with =)
console.log((myCar.make = "mini"));
// - - - - - - - - - - - - -
//  - - - - - - - NUMBER 1 & NUMBER 2 for comparison
const myCar = {
  defColor: "red",
  getColor() {
    console.log(this.defColor);
  },
  setColor(newColor) {
    this.defColor = newColor;
    console.log(this.defColor);
  },
};
myCar.getColor();
myCar.setColor("pink");

const myCar2 = {
  defColor: "blue",
  get color() {
    console.log(this.defColor);
  },
  set color(newColor) {
    this.defColor = newColor;
    console.log(this.defColor);
  },
};
myCar2.color;
myCar2.color = "green";
// - - - - - - - - - - - - -
//  - - - - - - - NUBMER 3: using the Object.defineProperty() method
// NOT REALLY LEARNT/GOT THIS ONE YET!!!
var myCar = {
  defColor: "blue",
  defMake: "Toyota",
};
Object.defineProperty(myCar, "color", {
  get: function () {
    return this.defColor;
  },
  set: function (newColor) {
    this.defColor = newColor;
  },
});
Object.defineProperty(myCar, "make", {
  get: function () {
    return this.defMake;
  },
  set: function (newMake) {
    this.defMake = newMake;
  },
});
console.log(myCar.color); // blue
console.log(myCar.make); // Toyota
console.log((myCar.color = "red"));
console.log((myCar.make = "Audi"));
// - - - - - - - - - - - - -

// factory function
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name, // destructuring (property value shorthand)
    age, // destructuring (property value shorthand)
    energySource, // destructuring (property value shorthand)
    scare() {
      console.log(catchPhrase);
    },
  };
};
const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");
const zombie = monsterFactory(
  "Rigor Mortis",
  900,
  "living flesh",
  "uuggggggghhhh!"
);
ghost.scare();
zombie.scare();
// - - - - - - - - - - - - -

// built-in object methods - Object.keys() and Object.values() methods
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};
const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotValues = Object.values(robot);
console.log(robotValues);
// - - - - - - - - - - - - -

// classes
// basic class:
class Character {
  constructor(name, personality, quote) {
    this.name = name;
    this.personality = personality;
    this.quote = quote;
  }
}
console.log(new Character("Spongebob", "happy-go-lucky", "Hey friends!"));
console.log(new Character("Patrick", "dopey", "What?"));
// - - - - - - - - - - - - -

// Classes - with getters
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
const surgeonCurry = new Surgeon("Curry", "Cardiovascular");
const surgeonDurant = new Surgeon("Durant", "Orthopedics");
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);
// - - - - - - - - - - - - -
