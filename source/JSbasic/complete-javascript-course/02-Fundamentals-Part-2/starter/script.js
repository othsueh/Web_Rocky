'use strict';
//coding challenge 1 
const calcAverage = (one,two,three) => (one+two+three)/3;
const data1 = calcAverage(85,54,41);
const data2 = calcAverage(23,24,27);
function checkWinner(team1,team2){
    if(team1 >= 2*team2) console.log(`Dolphins wins(${team1} vs. ${team2})`);
    else if(team2 >= 2*team1) console.log(`Koala wins(${team1} vs. ${team2})`);
    else console.log('No one wins');
}
checkWinner(data1,data2);
//coding challenge2
const bills = new Array(125,555,44);
let tips = new Array();
let total = new Array();
const calcTip = data => {
    if(data<= 300 && data >= 50){
        return data*0.15;
    }
    else{
        return data*0.2;
    }
}
const calcToa = data => {
    if(data<= 300 && data >= 50){
        return data*1.15;
    }
    else{
        return data*1.2;
    }
}
calcTip(bills[0]);
calcTip(bills[1]);
calcTip(bills[2]);
console.log(bills);
console.log(tips);
console.log(total);

const jonas = {
    birthYear: 1991,
    hasDriverLicense: true,
    job: 'teacher',
    profile: function (){
        this.age = 2371 - this.birthYear;
        return `Jonas is a ${this.age}-year-old ${this.job}, and he ${this.hasDriverLicense ? "has driver license": "doesn't have driver license"}`
    }

}
console.log(jonas.profile());
//coding challenge 3

const john = {
    firstName: 'John',
    lastNmae: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass / this.height **2;
    }
}
const mark = {
    firstName: 'Mark',
    lastNmae: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass / this.height **2;
    }
}
console.log(`John's BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higher' : 'lower'} than Mark's (${mark.calcBMI()})`);

//coding challenge 4
const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
let tip = new Array;
let totals = new Array;
for(let i = 0; i < bill.length; i++){
    tip.push(calcTip(bill[i])); 
    totals.push(calcToa(bill[i]));
}
console.log(tip,totals);
function calAvg(arr){
    let sum = 0;
    for(let i =0; i < arr.length;i++){
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calAvg(totals));
