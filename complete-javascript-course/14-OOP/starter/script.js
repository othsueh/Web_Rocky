'use strict';

//topic : coding challenge #1
//subtopic : constructor
const Car = function(make,speed){
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function(){
    this.speed+=10;
    console.log(this.speed);
}
Car.prototype.brake = function(){
    this.speed-=5;
    console.log(this.speed);
}
const bmw = new Car('BMW',0);
const mercedes = new Car('Mercedes',0);
while(bmw.speed!=95){
    if(bmw.speed < 95) bmw.accelerate();
    else bmw.brake();
}
while(mercedes.speed!=120){
    if(mercedes.speed < 120) mercedes.accelerate();
    else mercedes.brake();
}

//topic : intro to constructor
const Person = function(firstName, year){
    this.firstName = firstName;
    this.year = year;
}
//New {} is created
//function is called, this = {}
//{} linked to prototype
//function automatically return {}
const jonas = new Person('jonas',1991);
// console.log(jonas);
// console.log(jonas instanceof Person);

//topic : Prototypes
// Person.prototype.calcAge = function(){
//     console.log(2037 - this.year);
// }
//subtopic : prototype of the object
// console.log(Person.prototype);
// jonas.calcAge();
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));
//subtopic : .prototypeOfLinkedObjects
// Person.prototype.species = 'Homo sapiens';
// console.log(jonas.species);
// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species')); //have access to the prototype, not own it
//subtopic : topic of the prototype chain
// console.log(jonas.__proto__.__proto__);
//subtopic : prototype of function
// console.dir(x => x+1);
// const h1 = document.querySelector('h1');
// console.dir(h1);



