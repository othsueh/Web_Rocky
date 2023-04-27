let country = "Taiwan";
let continent = "Ease Asia";
let population = 2.3e+7;
console.log("Country: " + country + ", continent: " + continent + ", population: " + population);

let variable = 35;
console.log(typeof variable);
let var2;
console.log(typeof var2);

const var3 = "hello";
//coding challenge 1
const heightMark = 1.88;
const weightMark = 95;
const heightJohn = 1.76;
const weightJohn = 85;
const johnBMI = (weightJohn / heightMark ** 2);
const markBMI = (weightJohn / heightJohn ** 2);
//coding challenge 2
if(markBMI > johnBMI){
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${johnBMI})`);
} else {
    console.log(`John's BMI(${johnBMI}) is higher than Mark's(${markBMI})`);
}
//coding challenge 3
const dolphins1 = 97 ;
const dolphins2 = 112;
const dolphins3 = 101;
const koala1 = 109;
const koala2 = 95;
const koala3 = 106;
const avgDolphin = (dolphins1 + dolphins2 + dolphins3)/3; 
const avgKoala = (koala1 + koala2 + koala3)/3; 
console.log(avgDolphin, avgKoala);
if(avgDolphin > avgKoala && avgDolphin >= 100) console.log("Dolphin wins!");
else if(avgDolphin === avgKoala && avgKoala >= 100 && avgDolphin >= 100) console.log("Draw!");
else if(avgDolphin < avgKoala && avgKoala >= 100) console.log("Koala wins!");
else console.log("no onw wins");

//coding challenge 4
const bill = 430;
if(bill >= 50 && bill <= 300){
    console.log(`The bill was ${bill} and tip was ${bill * 0.15}, and the total value ${bill * 1.15}`);
}else{
    console.log(`The bill was ${bill} and tip was ${bill * 0.2}, and the total value ${bill * 1.2}`);
}