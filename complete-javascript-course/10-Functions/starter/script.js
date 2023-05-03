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