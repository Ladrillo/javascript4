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

function Animal(name) {
  this.name = name;
}
Animal.prototype.greet = function () {
  return this.name + '!!!!!'
}
function FlyingAnimal(name, wingspan) {
  this.wingspam = wingspan;
  Animal.call(this, name)
}
FlyingAnimal.prototype = Object.create(Animal.prototype)
FlyingAnimal.prototype.fly = function () {
  return `${this.name} is flying!!`
}

// new and improved!!!! SUGAR
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return this.name + '!!!!!'
  }

  growl() {
    return 'grrr'
  }
}

var mouse = new Animal2('Mouse');
// var bat = new FlyingAnimal2('Bat', 5)

// A- SEUDO-CLASSIC INHERITANCE & PROTOTYPAL INHERITANCE
//    1- Create a Vehicle constructor that "subclasses" Object.
//    2- Create a Car constructor that "subclasses" Vehicle.
//    3- Create a Tesla constructor that "subclasses" Car.
//    4- Create a Truck constructor that "subclasses" Vehicle.
//    5- Inspect the __proto__ prop on your vehicle instances. See the chain?

// B- CLASS SYNTACTIC SUGAR
//    10- Refactor to use the new `class` and `extends` keywords