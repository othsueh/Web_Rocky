'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
const openingHours= {
    [weekDays[3]]: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  getMenu: function(starter, main){
    return [this.starterMenu[starter],this.mainMenu[main]];
  },
  //compare with A & B expression
  openingHours, 
  //A
  orderDelivery(starterIndex = 0, mainIndex = 0, address = "Where", time = "21:00"){
    console.log(`I receive your order, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
  },
  //B 
  orderPasta: function(ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`)
  },
  orderPizza: function(mainFlavor, ...otherFlavors){
    console.log(`The main flavor of your pizza is ${mainFlavor}.`);
    console.log(`Ohter is/are ${otherFlavors}.`);
  }
};


//Object keys - propertyNames
const properties = Object.keys(openingHours);
const values = Object.values(openingHours);
let str = `We open ${properties.length} ${properties.length > 1 ? 'days' : 'day'} in a week`;
for(const day of properties && values) {
  str += `, ${day}day`;
  str += `from ${day[1]} to ${day[2]} `
}
console.log(str);
//Object keys - propertyValues
console.log(Object.values(openingHours));



// Methods 
// console.log(restaurant.orderDelivery?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisotto?.(0,1) ?? `Method does not exist`);


//optional chaining 
// restaurant.openingHours.fri && console.log(restaurant.openingHours.fri.open, restaurant.openingHours.fri.close);
// // console.log(restaurant.openingHours.mon?.open);
// // console.log(restaurant.openingHours?.mon);
// // console.log(restaurant.openingHours.fri?.open);
// // console.log(restaurant.openingHours?.fri);
// for(const item of weekDays) {
//   console.log(`on ${item}day, we open at ${restaurant.openingHours[item]?.open || "closed"}`); 
// }

// console.log(restaurant.openingHours);

//for-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for(let item of menu) console.log(item);
// for(const item of menu) console.log(item);
// // for(const item of menu.entries()) console.log(`${item[0] + 1}: ${item[1]}`); 
// for(const [index, item] of menu.entries()) console.log(`${index + 1}: ${item}`); 
// console.log(...menu.entries());

// restaurant.orderPizza("Magrite", "Onino", "Tomato", "Hawaii");
// restaurant.orderDelivery({
//   starterIndex: 1,
//   address: "Your home",
//   time: "18:00",
// });

// Destructuring array
// const arr = [3,5,7];
// const [x,y,z] = arr;
// console.log(x,y,z);
// console.log(arr);
// const [start, , end] = arr;
// console.log(start,end);
// let [main, ,secondary] = restaurant.starterMenu;
// console.log(main,secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);
// let [main, secondary] = restaurant.getMenu(3,2);
// [main,secondary] = [secondary, main];
// console.log(main,secondary);

// Destrutcturing object
// const {name, openingHours, categories} = restaurant;
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);
// const {menu = [], starterMenu : starter = []}= restaurant;
// console.log(menu,starter);

// Mutating variable
// let a = 111;
// let b = 999;
// const obj = {a: 37, b: 63, c:100};
// ({a,b} = obj);
// console.log(a,b);

// Nested objects
// let {fri} = restaurant;;
// console.log(fri);
// ({fri} = openingHours);
// console.log(fri);

//spread operator
// const arr = [1,2,3];
// const newarr = [-1,0,...arr];
// console.log(newarr);

// // copy array
// let copyMenu = restaurant.mainMenu;
// console.log(copyMenu);
// copyMenu = [...restaurant.mainMenu];
// console.log(copyMenu);

// // join array
// const joinMenu = [...restaurant.mainMenu,... restaurant.starterMenu];
// console.log(joinMenu);

// const jonas = ["Jonas","new"];
// console.log(...jonas);

// const ingredients = [
//   prompt(`Let's get the ingredient one!`),
//   prompt(`Let\'s get the ingredient two!`),
//   prompt(`Let\'s get the ingredient three!`)
// ]

// restaurant.orderPasta(...ingredients
// );

// const copyRestaurant = {...restaurant};
// copyRestaurant.name = "Resoto love";
// console.log(copyRestaurant);

// const newRestaurant = {foundedIn: 1997, founder: "Michael Burry",...restaurant};
// console.log(newRestaurant);

//Rest element array
// const [one,two, ...shorter] = [...restaurant.mainMenu,...restaurant.starterMenu];
// console.log(one,two,shorter);
// console.log(one,two,...shorter);
// //Rest element object
// const {thu, ...weekday} = restaurant.openingHours;
// console.log(weekday);

// //multiply multiple number
// const multiply = (...arr) =>{
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(i === 0) sum += arr[i];
//     else sum *= arr[i];
//   }
//   return sum;
// }
// console.log(multiply(2,3,6));

// //Short-circuiting
// console.log(null || 3);
// console.log(undefined || null || 0 || "" || "Hi" || 3);
// console.log(null || undefined); 

// //And
// console.log(undefined && null);
// console.log(35 && 7);
// console.log(35 && 7 && "Hello World!");
// if(restaurant.orderPizza){
//   restaurant.orderPizza("Hawaii", "Pineapple");
// }
// restaurant.orderPizza && restaurant.orderPizza("Hawaii", "Pineapple");


// //Nullish
// console.log(null ?? 57);
// console.log(undefined ?? 57);
// console.log(0 ?? 57);
// console.log("" ?? 57);
// console.log(undefined ?? null ?? 0 ?? "" ?? "Hi" ?? 3);

//Assigment operator - OR
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0
// };
// const rest2 = {
//   name: 'Mice',
//   owner: "Rian",
// };

// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && "<Anonymous>";

// console.log(rest1, rest2);


//Coding challenge 1

// const game = {
// team1: 'Bayern Munich',
// team2: 'Borrussia Dortmund',
// players: [
// [
// 'Neuer',
// 'Pavard',
// 'Martinez',
// 'Alaba',
// 'Davies',
// 'Kimmich',
// 'Goretzka',
// 'Coman',
// 'Muller',
// 'Gnarby',
// 'Lewandowski',
// ],
// [
// 'Burki',
// 'Schulz',
// 'Hummels',
// 'Akanji',
// 'Hakimi',
// 'Weigl',
// 'Witsel',
// 'Hazard',
// 'Brandt',
// 'Sancho',
// 'Gotze',
// ],
// ],
// score: '4:0',
// scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
// 'Hummels'],
// date: 'Nov 9th, 2037',
// odds: {
// team1: 1.33,
// x: 3.25,
// team2: 6.5,
// },
// };



// const players1 = game.players[0];
// const players2 = game.players[1];
// const [gk,...fieldPlayers] = game.players[0];
// const allPlayers = game.players;
// // console.log(gk, fieldPlayers);
// const players1Final = [...players1, 'Thiago', 'Coutinho','Perisic'];
// // console.log(players1Final);
// const {odds: {
//   team1, x:draw, team2,
// }} = game;
// // console.log(team1,draw,team2);
// function printGoals(...players) {
//   console.log(players);
//   console.log(`${players.length} goals are scored.`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
// printGoals(game.scored);
// console.log(team1 < team2 ? "team1" : "team2");
// team1 < team2 && console.log("team1 is more likely to win");
// team1 > team2 && console.log("team2 is more likely to win");