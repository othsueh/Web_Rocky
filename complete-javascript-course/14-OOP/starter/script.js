'use strict';

//topic : coding challenge #4
//subtopic : extend class
// class CarCl{
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     }
//     get speedUS(){
//         return this.speed/1.6;
//     }
//     set speedUS(speed){
//         this.speed = speed*1.6;
//     }
//     accelerate(){
//         this.speed+=10;
//         console.log(this.speed);
//     }
//     brake(){
//         this.speed-=5;
//         console.log(this.speed);
//     }
// }

// class EVCl extends CarCl{
//     //subtopic : private fields
//     #charge;
//     constructor(make,speed,charge){
//         super(make,speed);
//         this.#charge = charge;
//     }
//     //subtopic : extends old method
//     accelerate(){
//         this.speed+=20;
//         this.#charge--;
//         console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}%`);
//         return this;
//     }
//     charBattery(chargeTo){
//         this.#charge = chargeTo;
//         return this;
//     }
//     brake(){
//         this.speed-=5;
//         console.log(this.speed);
//         return this;
//     }
// }
// const rivian = new EVCl('Rivian',100,5);
// rivian.charBattery(23).accelerate().accelerate().accelerate().brake().brake();

//topic : class example
// class account{
//     //subtopic : public fields
//     locale = navigator.language;
//     //subtopic : private fields
//     #movements = [];
//     #pin;
//     constructor(owner,currency,pin){
//         this.owner = owner;
//         this.currency = currency;
//         this.#pin = pin;
//         //subtopic : protected property
//         console.log(`Thanks for opening an account, ${owner}`);
//     }
//     //subtopic : private method
//     #approveLoan(val){
//         return true;
//     }
    
//     //subtopic : public interface
//     getMovements(){
//         return this.#movements;
//     }
//     deposit(val){
//         this.#movements.push(val);
//         return this;
//     }
//     withdraw(val){
//         this.deposit(-val);
//         return this;
//     }
//     requestLoan(val){
//         if(this.#approveLoan(val)){
//             this.deposit(val);
//             console.log(`Loan approved`);
//         }
//         return this;
//     }
//     static helper(){
//         console.log('Helper');
//     }
// }
// const acc1 = new account('Jonas','EUR',1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
//subtopic : chaining
// console.log(acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).getMovements());
//topic : inheritance between classes
//subtopic : constructor function
// const Person = function(firstName, year){
//     this.firstName = firstName;
//     this.year = year;
// }
// const student = function(firstName, year, course){
//     Person.call(this,firstName,year);
//     this.course = course;
// }
// const mike = new student('Mike',2020,'Computer Science');
// console.log(mike);
// console.log(mike instanceof student);

//topic : object.create
//subtopic : initial prototype
// const personProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };
//subtopic : create object
// const steven = Object.create(personProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(personProto);
// sarah.init('Sarah',1979);
// sarah.calcAge();

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
// class PersonCl{
//     //subtopic : instance method
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge(){
//         console.log(2037- this.birthYear);
//     }
//     //subtopic : set a property that already exist
//     set fullName(name){
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }
//     get fullName(){
//         return this._fullName;
//     }
//     //subtopic : static method
//     static hey(){
//         console.log('Hey there');
//     }
// }

// class studentCl extends PersonCl{
//     constructor(fullName, birthYear, course){
//         super(fullName, birthYear);
//         this.course = course;
//     }
//     introduce(){
//         console.log(`My name is ${this.fullName} and I study ${this.course}`);
//     }
//     calcAge(){
//         console.log(`I'm ${2037-this.birthYear} years old, but as a student I feel more like ${2037-this.birthYear+10}`);
//     }
// }
// // studentCl.constructor = studentCl;
// const joe = new PersonCl('Joe Hey',1991);
// const martha = new studentCl('Martha Jones',2012,'Computer Science');
// console.dir(martha);
// martha.introduce();
// martha.calcAge();
//topic : coding challenge #3
// const CarProto = {
//     init(make, speed){
//         this.make = make;
//         this.speed = speed;
//     },
//     accelerate(){
//         this.speed+=10;
//         console.log(this.speed);
//     },
//     brake(){
//         this.speed-=5;
//         console.log(this.speed);
//     }

// } 
// subtopic : proto way
// const EvProto = Object.create(CarProto);
// EvProto.init = function(make,speed,charge){
//     CarProto.init.call(this,make,speed);
//     this.speed = speed;
// }
// EvProto.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// }
// EvProto.accelerate = function(){
//     this.speed+=20;
//     this.charge--;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// };
// const tesla = Object.create(EvProto);
// tesla.init('Tesla',120,23);
// tesla.chargeBattery(49);
// tesla.accelerate();
// subtopic : not proto way
// const EV = function(make,speed,charge){
//     CarProto.init.call(this,make,speed);
//     this.charge = charge;
// }
// EV.prototype = Object.create(CarProto);
// EV.prototype.constructor = EV;
// console.dir(EV);
// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// }
// EV.prototype.accelerate = function(){
//     this.speed+=20;
//     this.charge--;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
// }
// const tesla = new EV('Tesla',120,23);
// tesla.chargeBattery(90);
// tesla.accelerate();

//topic : inheritance between classes
//subtopic : parent class
// const Person = function(firstName, year){
//     this.firstName = firstName;
//     this.year = year;
// }
//subtopic : child class
// const student = function(firstName, year, course){
//     Person.call(this,firstName, year);
//     this.course = course;
// };
// subtopic : linking prototype
// student.prototype = Object.create(Person.prototype);
// student.prototype.constructor = student;
// student.prototype.introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
// }
//subtopic : instance
// const mike = new student('Mike',2020,'Computer Science');
// mike.introduce();
// console.log(mike.__proto__);
// console.log(mike instanceof student);
// console.log(mike instanceof Person);
//topic : coding challenge #2
// class CarCl{
//     constructor(make,speed){
//         this.make = make;
//         this.speed = speed;
//     }
//     get speedUS(){
//         return this.speed/1.6;
//     }
//     set speedUS(speed){
//         this.speed = speed*1.6;
//     }
//     accelerate(){
//         this.speed+=10;
//         console.log(this.speed);
//     }
//     brake(){
//         this.speed-=5;
//         console.log(this.speed);
//     }
// }

// const ford = new CarCl('Ford',120);
// ford.speedUS = 120;
// ford.accelerate();
// console.log(ford.speed,ford.speedUS);

//topic : object.create
//subtopic : initial prototype
// const personProto = {
//     calcAge(){
//         console.log(2037 - this.birthYear);
//     },
//     init(firstName, birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// };
//subtopic : create object
// const steven = Object.create(personProto);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// const sarah = Object.create(personProto);
// sarah.init('Sarah',1979);
// sarah.calcAge();

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
// class PersonCl{
    //subtopic : instance method
//     constructor(fullName, birthYear){
//         this.fullName = fullName;
//         this.birthYear = birthYear;
//     }
//     calcAge(){
//         console.log(2037- this.birthYear);
//     }
    //subtopic : set a property that already exist
//     set fullName(name){
//         if (name.includes(' ')) this._fullName = name;
//         else alert(`${name} is not a full name`);
//     }
//     get fullName(){
//         return this._fullName;
//     }
    //subtopic : static method
//     static hey(){
//         console.log('Hey there');
//     }
// }
// const jessica = new PersonCl('Jessica Davis',1996);
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
// const Person = function(firstName, year){
//     this.firstName = firstName;
//     this.year = year;
// }
//New {} is created
//function is called, this = {}
//{} linked to prototype
//function automatically return {}
// const jonas = new Person('jonas',1991);
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



