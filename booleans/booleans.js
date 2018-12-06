//  Booleans are the most basic of the data types because
//  They can only have 1 of 2 values - True or False
//  While booleans are basic in nature they are very handy when writing logic statements
//  Below are some simple boolean examples...

var x = 10;
var y = 10;
var z = 59;

console.log(x === y); // true
console.log(x === z); // false

//  You will notice that I used the 3 '=' in a row. This is deliberate.
//  In javaScript the '=' has 3 different meanins depending on how many there are, for example...
//  If you just 1 '=' sign, we are assigning value to a var, for example
var one = "assign value";

//  Two '==' in a row, is to see if the two values, on either side of the '==' are true-ish, for example...
var one = 1;
var two = "1";

//  What do you think the answer is, true or false?
console.log(one == two);
console.log("~~~~~~~~~");
console.log("the data type of var one is..." + typeof one);
console.log("the data type of var two is..." + typeof two);
console.log("~~~~~~~~~");

//  The reason this is true is because what the computer sees is ( 1 == '1' )
//  The only difference is `one` is a number and `two` is a string...
//  If we use 3 '===' in a row then we have what is called strict equality
console.log(one === two);
console.log("~~~~~~~~~");

//  Okay good, we got the answer we are truly seeking - false.
//  It is very important to always* use '===' when checking the equality of two values
//  Imagine if this program was written for a bank and '==' was used instead of '==='
// The laws a equality in javaScript are
// one '=' sign sets values equal to one another
// two '==' signs give you truthy
// three '===' signs means absolutely equal to

// We can also use the '!' sign to create true and false statements for example...

console.log(isThisTrue(12, 10));
