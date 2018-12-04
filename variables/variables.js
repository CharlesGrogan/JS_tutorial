// Variables -  Thought of as containers to store information.
// You store data in a variable - give that information a name to be referred to as...
// You have yourself a variable, let's look at some examples below...

// Variables can be strings
var name = "Charlie";
var city = "Cleveland, Ohio";
var currentCity = "Chicago, Illinois!!! 👽 ";
var favLang = "JavaScript";
var hobby = "blockChain and teaching myself to write in Solidity.";

// Variables can be numbers
var age = 31;

// Variables can be booleans (True or False)
var married = true;
var hungry = false;

// Variables can be arrays
var list = ["html", "css", "javaScript"];

// Link all the variables together and call and entire sentence with one word
var sentence =
  "Hello there! My name is " +
  name +
  ". I am " +
  age +
  ", I was born in " +
  city +
  " and currently live in " +
  currentCity +
  " My favorite language is " +
  favLang +
  " and really dig " +
  hobby +
  " Are you married? That answer is " +
  married +
  ". I know a decent bit about " +
  list +
  ".";

// in the vaiables.js folder type `node variables.js` in the terminal and see what happens!
console.log(sentence);
