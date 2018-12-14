// The if statement
// Use the if statement to specify a block of code for javaScript to execute if the code is true

/*
FOR EXAMPLE... 

 if (condition) {
    block of code to be executed if true   
}

*/

if (100 < 20) {
  console.log("10 less than 20 is a true statement");
}

// The else if statement
// Use the else if statement to specify a new condition if the first condition is false
// Synatx....

/*
if (condition) {
  block of code to be executed if condition1 is true;
} else if (condition2) {
    block of code to be executed if the conditon1 is false and condition2 is true; 
} else {
    block of code to be executed if condition1 and condition2 are false
}
*/

// EXAMPLE - check out the html to see what happens!
function myFunction() {
  var greeting;
  var time = new Date().getHours();
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}
