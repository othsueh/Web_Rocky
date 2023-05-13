'use strict';
// topic: Higher Order Function and CallBack Function
// const oneWord = (str) =>{
//     return str.replace(/\s/g, '').toLowerCase();
// }
// const upperFirstWord = (str) =>{
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = (str, fn) =>{
//     console.log(`Original String: ${str}`);
//     console.log(`Transformed String: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`);
// }
// const strr = 'Hello World! Nice to Meet you'
// transformer(strr, oneWord);
// const high5 = () =>{
//     console.log(`👋`);
// }
// document.body.addEventListener('click',high5)
// const greeter = ['Jonas', 'Martha', 'hello'];
// greeter.forEach(high5);


// topic : Functions Returning Functions
// const greet = (greeting)=>{
//     return function(name){
//         console.log(`${greeting} ${name}`);
//     }
// }
// greet('Hey')('Jonas');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hello')('Jonas');

// TOPIC : The call and apply Methods
// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     //book: function(){}
//     book(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
//     }
// }
// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(245, 'Adan Smith');

// subtopic : Call Method
// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// };
// const book = lufthansa.book;

// //!Not Worked
// // book(23, 'Sarah Williams');
// book.call(lufthansa, 23, 'Sarah Williams');
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(lufthansa.bookings);
// console.log(eurowings.bookings);

//subtopic : Apply Method
// const flightData = [583, 'George Cooper'];
// book.apply(eurowings,flightData);
// // *same
// book.call(eurowings, ...flightData);

//subtopic : Bind Method
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// bookEW(23, 'Steven Williams');
// const bookEW23 = book.bind(eurowings, 23);
// bookEW23(`Jonas Schmedtmann`);

// // * with Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function(){
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// document
//     .querySelector('.buy')
//     .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value*(rate/100);
// console.log(addTax(10,200));
// const addVat = addTax.bind(null, 23);
// console.log(addVat(100));

//topic : Coding Challenge #1
//subtopic : data
// const poll = {
//     question: "What is your favourite programming language?",
//     options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
//     // This generates [0, 0, 0, 0]. More in the next section!
//     answers: new Array(4).fill(0),
//     //subtopic : registerNewAnswer
//     registerNewAnswer(){
//         const ans = prompt('What is your favourite programming language?\n0: JavaScript\n1: Python\n2: Rust\n3:C++');
//         if(typeof(Number(ans))=== 'number' && ans >= 0 && ans < 4){
//             this.answers[ans] ++;
//         }
//         this.displayResults();
//         this.displayResults('string');
//     },
//     //subtopic : displayResults
//     displayResults(type='string'){
//         if(type === 'string'){
//             console.log(`Poll results are ${this.answers.join(', ')}`);
//         }
//         else if(type === 'array'){
//             console.log(this.answers);
//         }
//     },
// };
// const registerNewAnswer = poll.registerNewAnswer.bind(poll);
// document.querySelector('.poll').addEventListener('click',registerNewAnswer);
// // subtopic Bonus
// poll.displayResults.call({answers: [5,2,3]});
// poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'array');

//topic : IIFE
// (function(){
//     console.log('Haha You will never find me again');
// })();
// (()=>console.log('Nooooh you find me, I\'m gonna hide again'))();

// {
//     const hello = 'hello World';
//     var hey = 'hey';
// }
// console.log(hello);
// console.log(hey);

//topic : Coding Cahllenge #2
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();