'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// const flightList = flights.split('+');

// for(const f of flightList){
//   const components = f.split(';');
//   const final = [];
//   if(components[0].startsWith('_Delay')) final.push('🚨');
//   final.push(`${components[0].replaceAll('_',' ')} from ${components[1].slice(0,3).toUpperCase()} to ${components[2].slice(0,3).toUpperCase()} (${components[3].replace(':','h')})`);
//   console.log(final.join(''));
// }
// // Data needed for first part of the section
// const weekDays = ['mon','tue','wed','thu','fri','sat','sun'];
// const openingHours= {
//     [weekDays[3]]: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   getMenu: function(starter, main){
//     return [this.starterMenu[starter],this.mainMenu[main]];
//   },
//   //compare with A & B expression
//   openingHours, 
//   //A
//   orderDelivery(starterIndex = 0, mainIndex = 0, address = "Where", time = "21:00"){
//     console.log(`I receive your order, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`);
//   },
//   //B 
//   orderPasta: function(ing1, ing2, ing3){
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`)
//   },
//   orderPizza: function(mainFlavor, ...otherFlavors){
//     console.log(`The main flavor of your pizza is ${mainFlavor}.`);
//     console.log(`Ohter is/are ${otherFlavors}.`);
//   }
// };
//Coding challenge 1&2
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
// const [players1,players2] = game.players;
// const [gk,...fieldPlayers]= players1;
// const allPlayers = [...players1,...players2];
// const team1Substitute = ['Thiago', 'Coutinho','Perisic'];
// const players1Final = [...players1,...team1Substitute];
// const {
//     odds:{
//         team1, x:draw, team2
//     },
// }=game;
// console.log(team1,draw,team2);

// const printGoals = (...players)=>{
//     players = players[0];
//     console.log(players);
//     console.log(`${players.length} goals are scored`);
// };
// printGoals(players1Final);
// team1 < team2 && console.log(`team1 is more likely to win`);
// team2 < team1 && console.log(`team2 is more likely to win`);

// for(const [i,player] of game.scored.entries()){
//     console.log(`Goal ${i+1}: ${player}`);
// }
// let avg = 0;
// const odds = Object.values(game.odds);
// for(const odd of odds){
//     avg += odd;
// }
// console.log(avg);
// for(const [team,odd] of Object.entries(game.odds)){
//     const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//     console.log(`Odd of ${teamStr}: ${odd}`);
// }
// const scorers = {};
// for(const player of game.scored.values()){
//     scorers[player] ? scorers[player]++ : scorers[player]=1;
// }
// console.log(scorers);
// const orderset = new Set(["hi","i","am"]);
// orderset.add("thomas");
// console.log(orderset.has("i"));
// console.log(orderset);
// console.log(new Set('penpineappleapplepen'));
// const repeat = ["r","e","p",'e','a','t'];
// console.log([...new Set(repeat)]);

//Coding challenge 3
// const gameEvents = new Map([
// [17, '⚽ GOAL'],
// [36, '🔁 Substitution'],
// [47, '⚽ GOAL'],
// [61, '🔁 Substitution'],
// [64, '🔶 Yellow card'],
// [69, '🔴 Red card'],
// [70, '🔁 Substitution'],
// [72, '🔁 Substitution'],
// [76, '⚽ GOAL'],
// [80, '⚽ GOAL'],
// [92, '🔶 Yellow card'],
// ]);

// const events = [...new Set(gameEvents.values())];
// // console.log(events);
// gameEvents.delete(64);
// // console.log(gameEvents);
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(`An event happened, on average, every ${time/gameEvents.size} minutes`);
// for(const [time, event] of gameEvents){
//     const strPart = time >= 45 ? '[SECOND HALF]' : '[FIRST HALF]';
//     console.log(`${strPart}${time}: ${event}`);
// }
// const plane = "A381";
// console.log(plane[0]);
// console.log('pen'[0]);
// console.log(plane.length);
// console.log('pen'.length);
// console.log(plane.indexOf('A'));
// console.log('BoB'.lastIndexOf('B'));
// const key = "43284723984732894798"
// console.log(key.slice(key.indexOf('7'),key.indexOf('9')));
// console.log('   hello world   '.trim());
// const threeDoor = "door door door";
// console.log(threeDoor.replace(/door/g,'gate'));
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click',function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('\n');
    console.log(rows);
    for(const [i,str] of rows.entries()){
        let [first,second] = str.toLowerCase().trim().split('_');
        const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
        console.log(`${output.padEnd(20)}${'✅'.repeat(i+1)}`);
    }
    
})
// const camelCaseTrans = (str)=>{
//     let [first,second] = str.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`
//     console.log(output);
// }
// camelCaseTrans('   calculate_AGE');

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click',function()
// {
//   const text = document.querySelector('textarea').value;
//   const textList = text.split('\n');
//   const finalList = [];
//   for(const [i,n] of textList.entries()){
//     const [a,b] = n.toLowerCase().trim().split('_');
//     finalList.push((a.toLowerCase()+b[0].toUpperCase()+b.slice(1)).padEnd(20)+'📟'.repeat(i+1));
//   } 
//   document.querySelector('textarea').value = finalList.join('\n');
// });

// //String Methods part 2
// const str = "apple RR";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// const myName = "ThOmAs";
// const nameLower = myName.toLowerCase();
// const nameCorrect = myName[0].toUpperCase() + nameLower.slice(1);
// console.log(nameCorrect);

// const email = "ych930719@gmail.com";
// const loginEmail = " ych930719@gmail.com ";
// const correctEmail = loginEmail.toLowerCase().trim();
// console.log(correctEmail === email);

// const dollar = "13,500 USD";
// console.log(dollar.replace("USD", "TWD"));

// const threeDoor = "door door door";
// console.log(threeDoor.replace("door",'gate'));
// console.log(threeDoor.replace(/door/g,'gate'));
// console.log(threeDoor.includes('gate'));
// if(threeDoor.startsWith('door') && threeDoor.endsWith('door')) console.log("First & Second Door are both opening");

// const [first, second] = "ChunHsueh Yu".split(' ');
// console.log(first, second);
// console.log(['HI','HOW','ARE','YOU'].join('James'));

// const capitalizeName = fullName => {
//   const nameList = fullName.split(' ');
//   const completeName = [];
//   for(const n of nameList) 
//     completeName.push(n.replace(n[0],n[0].toUpperCase()));
//     // completeName.push(n[0].toUpperCase() + n.slice(1));
//   console.log(completeName.join(' '));
// }

// capitalizeName('chun hsueh yu');
// capitalizeName('michael jordan');

// console.log('canYouGuessthePadding?'.padStart(30,'?').padEnd(40,'?').length);

// //secret your secret number
// const crypt = number => {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length,'?');
// }
// console.log(crypt(3350032423));
// console.log(crypt(7234709279037937));

// const guessMonster = number => {
//   const answer = 3; 
//   if(Number(number) == answer) console.log(`There are ${answer} monsters in the forest! ${'🦖'.repeat(answer)}`)
//   else{
//     console.log("You are wrong, guess again");
//     guessMonster(prompt("guess the monster"));
//   }
// }

// guessMonster(prompt("guess the monster"));

// //String Methods part 1
// const str = "penpineappleapplepen";
// console.log(str.length);
// console.log(str.indexOf('p'));
// console.log(str.lastIndexOf('p'));
// console.log(str.slice(3));
// console.log(str.slice(-3));
// console.log(str.slice(17,20));
// console.log(str.slice(str.indexOf('l'),str.lastIndexOf('l')+1));

// const seatCheck = seat =>{
//   const row = seat.slice(-1);
//   if(row > 'F') console.log("You got a far seat!");
//   else console.log("You got a close seat!");
// }

// seatCheck("11A");
// seatCheck("11F");
// seatCheck("11Z");

// //coding challenge 3
// const gameEvents = new Map([
// [17, '⚽ GOAL'],
// [36, '🔁 Substitution'],
// [47, '⚽ GOAL'],
// [61, '🔁 Substitution'],
// [64, '🔶 Yellow card'],
// [69, '🔴 Red card'],
// [70, '🔁 Substitution'],
// [72, '🔁 Substitution'],
// [76, '⚽ GOAL'],
// [80, '⚽ GOAL'],
// [92, '🔶 Yellow card'],
// ]);

// const events = new Set(gameEvents.values());
// gameEvents.delete(64);
// console.log(gameEvents.size);
// console.log(`An event happened, on average, every ${90/gameEvents.size} minutes.`);

// for(const[key, value] of gameEvents) {
//   console.log(`${key <= 45 ? "[FIRST HALF]" : "[SECOND HALF]"} ${key}: ${value}`);
// }

// //convert object to map
// const hour = new Map(Object.entries(openingHours));
// // console.log(hour);

// const question = new Map([['question','What\'s the best program language in the world'],[1,'C'],[2,'Java'],[3,'JavaScript'],
//   ['correct',3],
//   [true,'correct'],
//   [false,'you are wrong']]);
// for(const [key,value] of question){
//   if(typeof key === 'number') console.log(`Option ${key}: ${value}`);
// }
// const ans = Number(prompt("What's your answer?"));
// console.log(ans);

// console.log(question.get(question.get('correct') === ans));

//convert map to array
// console.log([...question]);
// console.log([...question.values()]);
// console.log([...question.keys()]);

// // Map
// const mapTest = new Map();
// mapTest.set(0,"nice");
// // console.log(mapTest);
// // mapTest.set(0,"ok");
// mapTest.set(1,"nice").set("robot", "AI").set("Michael","Jordan").set(true,1).set(false,0);
// console.log(mapTest);

// //Map example
// const rest = new Map();
// rest.set('open',11).set('close',23).set(true,'We are open :)').set(false,'Sorry, next time');
// const time  =10;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// console.log(rest.has('open'));
// rest.set(document.querySelector('h1'),"Heading");
// //use array as key
// const arr = [3,2];
// rest.set(arr,"hi");
// console.log(rest.has(arr));
// // rest.clear();
// console.log(rest);

// //set introduction
// const orderset = new Set(['HI', 'how', 'are','you','you']);
// console.log(orderset.size);
// console.log(orderset.has("HI"));
// orderset.add("Nothing");
// console.log(orderset.has("Nothing"));
// orderset.delete("how");
// console.log(orderset);
// for(const order of orderset) console.log(order);

// //get no-replicate array
// const company = ['Lora','Jason','Mike','Jason'];
// const pure = [...new Set(company)];
// console.log(pure);

// //how many number in an telephone
// const tele = "0983661696";
// console.log(new Set(tele).size);

// console.log(orderset[0]); *set has no index
// const set = new Set("order");
// console.log(set);

// //Object keys - propertyNames
// const properties = Object.keys(openingHours);
// const values = Object.values(openingHours);
// let str = `We open ${properties.length} ${properties.length > 1 ? 'days' : 'day'} in a week`;
// for(const day of properties && values) {
//   str += `, ${day}day`;
//   str += `from ${day[1]} to ${day[2]} `
// }
// // console.log(str);
// //Object keys - propertyValues
// console.log(Object.values(openingHours));

// //Object keys - propertyEntries
// const entries = Object.entries(openingHours);
// for(const index of entries) console.log(`We open on ${index[0]}, from ${index[1].open} ~ ${index[1].close}.`);
// for(const [index, {open, close}] of entries) console.log(`We open on ${index}, from ${open} ~ ${close}.`);



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


// Coding challenge 1 & 2

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

// const data = Object.entries(game.scored); 
// for(const [id,name] of data) console.log(`Goal ${Number(id)+1}:${name}`);

// const winOdd = Object.values(game.odds);
// let avg = 0;
// for(const i of winOdd) avg += i;
// avg /= winOdd.length;
// console.log(avg);

// for(const [team,odd] of Object.entries(game.odds)) console.log(`Odd of ${team === 'x' ? 'draw' : 'victory'} ${game[team] ?? ""}: ${odd} `);

// const str = {};
// for(const score of Object.values(game.scored)) {
//   str[score] ? str[score]++ : (str[score] = 1);   
// }
// console.log(str);

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


// A sufficient condition is a condition or set of conditions that will produce the event.
// A necessary condition is a condition that must be present for an event to occur.
// Implementation of Implications
// function implicationTest(sufficient, necessary){
//   if(sufficient == false || (sufficient && necessary == true))
//     console.log("Sufficient => Necessary");
//   else 
//     console.log("Sufficient !=> Necessary");
// }
// implicationTest(0,0);
// implicationTest(1,0);
// implicationTest(0,1);
// implicationTest(1,1);