// The sort method does well just that, sort its elements
// The sort method will sort items either alphabetically or numberically
// However when we do use the sort method on numbers its acts kind of funky
// Lets look at some examples and see exactly what were talking about...

let arr = ["Fiat", "Bitcoin", "XRP", "Dodgecoin", "FunFair"];
console.log(arr.sort()); // return [ 'Bitcoin', 'Dodgecoin', 'Fiat', 'FunFair', 'XRP' ]

let numArr = [5, 1, 11, 23, 3, 35, 98, 7];
// What do you anticipate the result to be? most folks would say the numArr now looks like this...
// [1, 3, 5, 7, 11, 23, 35, 98] -- right???
// If you chose the above solution... you would be wrong. the actual out put is...
console.log(numArr.sort()); // return [ 1, 11, 23, 3, 35, 5, 7, 98 ]

// What can be derived from this output is the fact that the sort() method with no arguements is going to return nums
// by looking strictly at the first number, if that number is followed by a second digit the sort method will then
// look to the next value in the digit and determine its place. so when we do this...

let newArr = [10, 19, 18, 12, 11, 15, 20];
console.log(newArr.sort()); // return [ 10, 11, 12, 15, 18, 19, 20 ]

// Our output is what we would expect it to be^^^
// If we want to ensure that we get the sort method to function the way we would like with single digit numbers we must add
// a compare function, like so..
newArr.sort(function(a, b) {
  return a - b;
});

console.log("~~~~~~~~~");
console.log(newArr);
console.log("~~~~~~~~~");

// We can also take this principal and have the array return in ascending order...

newArr.sort(function(a, b) {
  return b - a;
});

console.log("ascending order like so..." + newArr);

// The purpose of compare function is to define an alternative sort order
// The compare function should return a negative, zero, or positive value depending on args
// You can use this code snippet to experiment with numerically and alphabetically sorting:

const points = [10, 100, 1, 5, 25, 95];

function alphaSort() {
  console.log(points.sort());
}

function numSort() {
  console.log(
    points.sort(function(a, b) {
      return a - b;
    })
  );
}

alphaSort();
numSort();
