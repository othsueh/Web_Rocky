'use strict';
//scope chain
function calAge(birthYear){
    const age = 2023 - birthYear;
    console.log(name);
    function descript(){
        let output = `${name} is ${age}-year-old, and born in ${birthYear}`;
        console.log(output);
        if(birthYear >= 1981 && birthYear <= 1996){
            var millenial = true;
            const name = "Steven";
            const str = `Oh, you are a millenial, ${name}`;
            console.log(str);
            function add(a,b){
                return a+b;
            }
            output = "OUTPUT!";
        }
        // console.log(add(3,5)); Works with strict mode off
        console.log(output);
        console.log(millenial);
    }
    descript();
    return age;
}
const name = "John";
calAge(1995);
//hoisting and TDZ
console.log(me);
// console.log(job);
// console.log(year);
var me = "Thomas";
let jod = "Engineer";
const year = 2023;

console.log(addDecla(2,3));
// console.log(addExp);
console.log(addArr);
function addDecla(a,b){
    return a + b;
}
const addExp = function(a,b){
    return a + b;
};
var addArr = (a,b) => a+b;

// Don't use var
if(!hi) hello();
var hi = 1;
function hello(){
    console.log("Hello World!");
}
//window object test
var test1 = 0;
let test2 = 0;
const test3 = 0;
console.log(test1 === window.test1);
console.log(test2 === window.test2);
console.log(test3 === window.test3);
// About this
console.log(this);
const hii = function(){
    console.log(this);
};
hii();
const hiiArr = () => console.log(this);
hiiArr();
const jonas = {
    name: "Jonas",
    calAge: function(){
        console.log(this);
    }
};
jonas.calAge();
const matilda = {
    name: "Matilda"
};
matilda.calAge = jonas.calAge;
matilda.calAge();
const f = jonas.calAge;
f();

// Regular vs Arrow functions 
const joman = {
    name: "Joman",
    year: 1993,
    calAge: function(){
        console.log(this);
        //Solution 1
        // const self = this; //fix
        // const ifAge = function (){
        //     if(self.year <= 1996 && self.year >= 1992) console.log(self.year);
        //     console.log(self);
        // }
        // ifAge();
        //Solution 2
        const ifAge = () =>{
            if(this.year <= 1996 && this.year >= 1990) console.log(this.year);
        } 
        ifAge();
    },
    calHi: () => {
        // the calHi function's this is inherited from global variables
        console.log(this);
        console.log(`Hey!, ${this,name}`);
        console.log(this.name === window.name);
    }
};

joman.calHi();
joman.calAge();

//Arguments keyword
function addDecl(a,b){
    console.log(arguments);
    return a + b;
}

const addExr = function(a,b){
    console.log(arguments);
    return a + b;
}
const addArro = (a,b) => {
    console.log(arguments);
    return a +b ;
}
addDecl(1,3,4,2);
addExr(1,3,4,2);
// addArro(1,3,4,2); Arrow function is not allowed to access argument

// prmitive v.s objects
let newName = "John";
let oldName = newName;
newName = "Smith";
console.log(oldName,newName);

const testA = {
    name: "John",
    age: 1997,
    family: ["Mike","Alice"],
};
const testB = testA;
testB.age = 1995;
console.log(testA.age, testB.age);

const testC = Object.assign({},testB);//only shallow copy
testC.age = 1993;
testC.family.push("Jason");
testC.family.push("Thomas");
console.log(testA);
console.log(testC);
console.log(testA.age, testB.age,testC.age);