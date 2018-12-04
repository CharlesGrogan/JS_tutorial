//  In JavaScript there are 7 type of Data Types to be familiar with...
//  'strings', arrays [], numbers 4, booleans true/false, objects {}, undefined, and null
//  Data Types are very very important in programming because it gives the computer
//  the ability to safely solve problems, for example...
// More detail is given on these data types in the subsequent folders - keep going

var x = 98 * "ferrari";
console.log(x);
console.log("___________________________________");

//  Should the output be that I get 98 ferraris??? I wish.
//  in javaScript a number multipled by a sring will return `NaN` or Not a Number`

var y = 98 + "ferrari";

//  Maybe this will get me 98 ferraris! Nope didn't think so
//  adding a number to a string returns a string
console.log(y); // '98ferrari'
console.log("____________________________________");
// proof that the data typeof y is....well just that!

console.log(typeof y);
console.log("____________________________________");

// To check the data type of what we are working with, we can use the typeof operator to see exactly what we're looking at for example it will return any variable, object, function, or expression - for example...
console.log(typeof decNum);
console.log("~ ~");
console.log(typeof NaN);
console.log("~ ~");
console.log(typeof [1, 2, "a", "b", 3 + 4]);
console.log("~ ~");
console.log(typeof function() {});
console.log("~ ~");
console.log(typeof "ten");
console.log("~ ~");
console.log(typeof dec);
console.log("~ ~");
console.log(typeof { 1: "hi", 2: "there" });
console.log("~ ~");
console.log(typeof null);
console.log("~ ~");
console.log(typeof false);
