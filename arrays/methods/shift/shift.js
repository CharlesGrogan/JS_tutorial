let shiftArr = ["blue", "red", "orange", "green"];
document.getElementById("demo").innerHTML = shiftArr;

// Now we want to use the shift() method to add a new element to the array

let firstElem = shiftArr.shift();
console.log(firstElem); // returns "blue"
document.getElementById("demo1").innerHTML = firstElem;

// Now we can show the new Array after thr shift() method was applied, check it...

document.getElementById("demo2").innerHTML = shiftArr;
