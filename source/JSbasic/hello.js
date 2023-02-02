let name = "Michael";
for(let i = 0; i < 3; i++){
    console.log("Hellow World! " + name);
}
console.log(fib(30));
function fib(value){
    if(value == 1){
        return 1;
    }
    else return value * fib(value-1);
}