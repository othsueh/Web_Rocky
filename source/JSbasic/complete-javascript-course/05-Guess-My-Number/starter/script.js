'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.score').textContent = 30;
// document.querySelector('.number').textContent = 30;
// document.querySelector('.guess').value = 24;
// console.log(document.querySelector('.guess').value);

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
const callMessage = message =>{
    document.querySelector('.message').textContent = message;
}
const showScore = score =>{
    document.querySelector('.score').textContent = score;
}
function again() {
    number = Math.trunc(Math.random()*20)+1;
    score = 20;
    callMessage("Start guessing... ");
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';

}
document.querySelector('.again').addEventListener('click',
function(){again();});
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess); 
    if(!guess){
        callMessage("💔 No number!");
    }
    else if(guess !== number){
        if(score > 0){
        callMessage(`${guess > number ? "Too High!" : "Too Low!"}`);
        score--;
        showScore(score);
        }
        else{
            callMessage("❄️ You lost the game!");
            showScore(score);
        }

    }
    else if(guess === number){
        document.querySelector('.number').textContent = guess;
        callMessage("🌮 Correct Number!");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
            highScore = score;
        }
    }
});