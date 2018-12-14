let fruit = ["banana", "orange", "apple"];
fruit.splice(2, 0, "lemon", "kiwi");
console.log(fruit);
document.querySelector(".results").innerHTML = fruit;

let fruits = ["banana", "orange", "apple"];
fruits.splice(2, 2, "lemon", "kiwi");
console.log(fruits);
document.querySelector(".result").innerHTML = fruits;
