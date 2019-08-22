var greeting = 'hello from script';

function Bulb(model) {
  this.model = model;
  this.isOn = false;
  this.isBroken = false;
}
Bulb.prototype.turnOn = function () {
  // side effect
  this.isOn = true;
  // return value
  return 'turnin on!'
}

var philips = new Bulb('Philips');
var sylvania = new Bulb('Sylvania');


// Animal constructor that takes name (subclassing Object)
// Create a FlyingAnimal that subclasses Animal



// A- SEUDO-CLASSIC INHERITANCE & PROTOTYPAL INHERITANCE
//    1- Create a Vehicle constructor that "subclasses" Object.
//    2- Create a Car constructor that "subclasses" Vehicle.
//    3- Create a Tesla constructor that "subclasses" Car.
//    4- Create a Truck constructor that "subclasses" Vehicle.
//    5- Inspect the __proto__ prop on your vehicle instances. See the chain?

// B- CLASS SYNTACTIC SUGAR
//    10- Refactor to use the new `class` and `extends` keywords