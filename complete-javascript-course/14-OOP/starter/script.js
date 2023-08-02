'use strict';

//topic : coding challenge #2
class CarCl{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }
    get speedUS(){
        return this.speed/1.6;
    }
    set speedUS(speed){
        this.speed = speed*1.6;
    }
    accelerate(){
        this.speed+=10;
        console.log(this.speed);
    }
    brake(){
        this.speed-=5;
        console.log(this.speed);
    }
}

const ford = new CarCl('Ford',120);
ford.speedUS = 120;
ford.accelerate();
console.log(ford.speed,ford.speedUS);
//topic : object.create
//subtopic : initial prototype
const personProto = {
    calcAge(){
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
};
//subtopic : create object
const steven = Object.create(personProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(personProto);
sarah.init('Sarah',1979);
sarah.calcAge();

//topic : getter and setter
// const account = {
//     owner : 'Jonas',
//     movements : [200,530,120,300],

//     get latest(){
//         return this.movements.slice(-1).pop();
//     },
//     set latest(mov){
//         return this.movements.push(mov);
//     }
// }
// console.log(account.latest);
// account.latest = 50;
// console.log(account.movements);

//topic : ES6 classes
class PersonCl{
    //subtopic : instance method
    constructor(fullName, birthYear){
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    calcAge(){
        console.log(2037- this.birthYear);
    }
    //subtopic : set a property that already exist
    set fullName(name){
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`);
    }
    get fullName(){
        return this._fullName;
    }
    //subtopic : static method
    static hey(){
        console.log('Hey there');
    }
}
const jessica = new PersonCl('Jessica Davis',1996);
// console.log(jessica.fullName);
// console.log(PersonCl.hey());
// console.log(jessica.hey()); //error
// jessica.calcAge();
// console.log(jessica.hasOwnProperty('calcAge'));



//topic : coding challenge #1
//subtopic : constructor
// const Car = function(make,speed){
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function(){
//     this.speed+=10;
//     console.log(this.speed);
// }
// Car.prototype.brake = function(){
//     this.speed-=5;
//     console.log(this.speed);
// }
// const bmw = new Car('BMW',0);
// const mercedes = new Car('Mercedes',0);
// while(bmw.speed!=95){
//     if(bmw.speed < 95) bmw.accelerate();
//     else bmw.brake();
// }
// while(mercedes.speed!=120){
//     if(mercedes.speed < 120) mercedes.accelerate();
//     else mercedes.brake();
// }

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



