/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = Number("25"); // this fix works because it is now a number instead of a string which produced and unwanted output of 255.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


// Implicit Type Conversion
let implicitBefore = "5";
let implicitAfter = implicitBefore - 2;

console.log("Implicit BEFORE type:", typeof implicitBefore);  
console.log("Implicit AFTER value:", implicitAfter);
console.log("Implicit AFTER type:", typeof implicitAfter);

// -----------------------------
// IMPLICIT TYPE CONVERSION EXPLANATION
// -----------------------------

// Before: "5" is a string
let implicitBefore = "5";

// JavaScript sees the minus operator and automatically
// converts the string "5" into the number 5.
// This is implicit conversion because YOU did not ask for it.
let implicitAfter = implicitBefore - 2;

console.log("Implicit BEFORE type:", typeof implicitBefore);  // string
console.log("Implicit AFTER value:", implicitAfter);          // 3
console.log("Implicit AFTER type:", typeof implicitAfter);    // number

// Explicit Type Conversion with edge case
let explicitBefore = "hello";
let explicitAfter = Number(explicitBefore);

console.log("Explicit BEFORE type:", typeof explicitBefore);
console.log("Explicit AFTER value:", explicitAfter);   // NaN
console.log("Explicit AFTER type:", typeof explicitAfter);

// -----------------------------
// EXPLICIT TYPE CONVERSION EXPLANATION
// -----------------------------

// Before: "hello" is a string
let explicitBefore = "hello";

// Number("hello") cannot convert the text into a real number,
// so JavaScript returns NaN (Not-a-Number).
// This is explicit conversion because YOU used Number().
let explicitAfter = Number(explicitBefore);

console.log("Explicit BEFORE type:", typeof explicitBefore);  // string
console.log("Explicit AFTER value:", explicitAfter);          // NaN
console.log("Explicit AFTER type:", typeof explicitAfter);    // number (NaN is still a number!)