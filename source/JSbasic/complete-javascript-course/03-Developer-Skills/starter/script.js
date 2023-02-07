// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const myBirth = 2004;
const calAge = year => 2023-year;
console.log(calAge(myBirth));

//coding challenge 1
// give one array, you need to write a function that will prints C and days;
// step1: give a function, the parameter is an array
// step2: declare a number, the number should be increased by every element of the array
// step3: print out the string, and the string should have number, array element and °C
// step4: add up the number 
// step5: call the function

const tem = [12, 5, -5, 0, 4];
const temInDays = temp => {
    let str = '';
    for(let n = 0;n<temp.length;n++){
        if(n === 0) str += `${temp[n]}°C in ${n+1} days`;
        else str += `...${temp[n]}°C in ${n+1} days`;
    } 
    return str;
}
console.log(temInDays(tem));