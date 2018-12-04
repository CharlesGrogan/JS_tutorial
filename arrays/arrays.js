//  JavaScript arrays are written with square brackets []
//  Elements inside of the array are seperated by commas [a, b, c]
//  Elements in arrays can be 'strings', numbers, booleans, functions, objects
//  They can be a combination of all the above

var array = ["charlie", 31, true, function() {}];

//  Arrays are special values that can hold more than one value at a time
//  If you had a list of items (a list of hobbies) that you want to store - an array is perfect
// Transform this list into a powerful array...
var hobby0 = "coding";
var hobby1 = "working out";
var hobby2 = "reading";

var hobbyArr = ["coding", "working out", "reading"];
//            index 0            1            2
console.log("This is the original hobbyArr..." + hobbyArr);

// Arrays are 0 indexed - which means using the example above, coding is in position 0
// Working out is in position 1 - reading is in position 2
// Using the index we can access the information inside of an array, like so...
console.log("This is the value at index 1 in the hobbyArr..." + hobbyArr[1]); // 'working out'

//  We can also use this indexing method to access the first value in the array, for example...
hobbyArr[0] = "biking";
console.log("This is the updated hobbyArr..." + hobbyArr);

//  Since we know that hobbyArr only has 3 elements in it, we can simply write this statment to add a hobby...
hobbyArr[3] = "baseball";
console.log("Our newest version of hobbyArr is..." + hobbyArr);

//  Imagine we had an array that contained hundreds of elements, it is not practical
//  Nor is it best practice to insert information into an array like we just did
//  Reasons why include: we don't know exactly the last index of a given array and
//  We don't want to override or delete information in our array

//  To help us find the end of an array we can call a method called Array_Name.length, for example...
console.log(hobbyArr.length); // returns 4
//  This means that the hobbyArr has 4 elements indexed at 0, 1, 2, 3
//  Now, we can safely add a value to the end of the array, knowing that there is no value in index 4...
hobbyArr[4] = "swimming";
console.log("newer newest version of hobbyArr..." + hobbyArr);

//  To access the last element in an array we use arr.length - 1, for example...
var last = hobbyArr[hobbyArr.length - 1];
console.log("The last element in hobbyArr is..." + last);

//  Looping (or cycling) through the elements of an array using a 'for loop' example below
var newArr = ["a", "b", "c", "d"];

//  Define the length of the arr
var arrLen = newArr.length;

//  Now we 'loop' through our arr like so...
for (var index = 0; index < arrLen; index++) {
  // 'The Loop'
  console.log(
    "The value of newArr at index " + [index] + " is " + newArr[index]
  ); // 'The Action'
}

// 1. We start a for loop by creating a new variable that acts as a counter aka index = 0
// 2. If the index is less than the length of the array
// 3. Do 'The Action' or console log each element in the newArr at each index
// 4. Once the action is complete increment the index by 1 (index++ is same as index + 1)
// 5. Jump back into The Loop - index = 1 => 1 < 4 (true) => console log the element
// 6. Increment the index => index = 2 => 2 < 4 (true) => console log the element => index++
// 7. Jump back into The Loop - index = 3 => 3 < 4 (true) => console log the element => index++
// 8. Jump back into The Loop - index = 4 => 4 < 4 (true) => console log the element => index++
// 9. Jump back into The Loop - index = 5 => 5 < 4 (false) => break free of loop and end work
