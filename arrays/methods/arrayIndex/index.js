// Array elements are accessed using their index number:
// Array indexes start at 0 and go up from there, the idex is notated like so [0] [1] [2] etc
// It is very important to remember that all array indexes start at 0!!! so if we had an array with 3 elements in it we would access the three elements like so....

const simpleArr = ["dog", "cat", "fish"];
console.log(simpleArr[0]); // returns 'dog'
console.log(simpleArr[1]); // returns 'cat'
console.log(simpleArr[2]); // returns 'fish'

// If we wanted to, we can actually override the value in a given index if we would like. This is done by doing the following....

// Change the first[0] element in simpleArr to `wolf`...
simpleArr[0] = "wolf";
console.log(simpleArr); // return [ 'wolf', 'cat', 'fish' ]

// We need to becareful if we are going to use this method. While we should probably never add an element to array this way because its a good way to override data, or put infomation in the wwrong place.
// Arrays are essentailly prebuilt with infinite indices which is cool, but can get us in trouble.

// We know the length of simpleArr to be 3 but what if we didnt know what would happen if we did somehting like this....
simpleArr[5] = "bird";

console.log(`adding to array blindly we return this array ${simpleArr}`); // return  wolf,cat,fish,,,bird

// notice the ,,, well thats bc we jumped right over index 3 & index 4 => straight to index 5 with 'fish'
