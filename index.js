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
