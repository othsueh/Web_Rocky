'use strict';

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