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

// GENERAL
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
class FlyingAnimal2 extends Animal2 {
  constructor(name, wingspam) {
    super(name);
    this.wingspam = wingspam;
  }
  fly() {
    return `${this.name} is flying!!`;
  }
}

var mouse = new Animal2('Mouse');
var bat = new FlyingAnimal2('Bat', 5);


class Vehicle {
  constructor(name) {
    this.name = name;
  }
  drive() {
    return 'broooom'
  }
}

// if we don't need extra food for the constructor
// and the truck doens't need any extra properties / fields
// WE CAN DISPENSE WITH CONSTRUCTOR ALTOGETHER
class Truck extends Vehicle {
  // constructor(name) {
  //   super(name);
  //   this.cargo = [];
  // }
  tow() {
    return 'towing'
  }
  drive() {
    return 'BROOOOOOOOMO!!!'
  }
}

class ElectricTruck extends Truck {

}

var prius = new Vehicle('prius');
var f150 = new Truck('f150')
var teslaTruck = new ElectricTruck('TeslaTruck')

// A- SEUDO-CLASSIC INHERITANCE & PROTOTYPAL INHERITANCE
//    1- Create a Vehicle constructor that "subclasses" Object.
//    2- Create a Car constructor that "subclasses" Vehicle.
//    3- Create a Tesla constructor that "subclasses" Car.
//    4- Create a Truck constructor that "subclasses" Vehicle.
//    5- Inspect the __proto__ prop on your vehicle instances. See the chain?

// B- CLASS SYNTACTIC SUGAR
//    10- Refactor to use the new `class` and `extends` keywords