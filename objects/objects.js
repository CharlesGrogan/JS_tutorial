// Objects are real life...object - like a car, animal, spaceship etc etc
// Objects include properties like the weight of the spaceship or its speed
// Objects also include methods like ignite or lightspeed
// For example...

// Properties
// spaceship.name = "Millenium Falcon";
// spaceship.model = "Battle Stryker";
// spaceship.color = "beige";

// // Methods
// spaceship.lightspeed();
// spaceship.ignite();
// spaceship.fireWeapon();

// all spaceships have the properties, but the property values differ from ship to ship
// all spaceships have the same methods, but methods aee performed at different times
// Example of an object...

var spaceship = { type: "Battle Ship", model: "x-wing", color: "orange" };

// We can access the information in the object using dot notation, like this....
// To get the type of ship, we can type...

console.log(`the spaceship type is ${spaceship.type}`);

// We can define (and create) a JS object with an object literal...

var person = {
  firstName: "Charlie",
  lastName: "Marshall",
  age: 25,
  eyeColor: "Green eyes"
};

// We can also access information in an object like this...
console.log("The last name of the person is " + person["lastName"]);

// Methods are stored in properties as function definitions
var person = {
  firstName: "Charlie",
  lastName: "Marshall",
  age: 25,
  eyeColor: "Green eyes",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(this.fullName);
