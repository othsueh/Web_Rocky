'use strict';
/*
*task 1: setting roll dice
TODO: 1. when roll click, change the graph, add up the current 
TODO: 2. When add up current, check present player

*task 2: setting hold scores

*task 3: setting win game
*/
//selected elements
const call = message => document.querySelector(message);
const callId = message => document.getElementById(message);
const callAll = message => document.querySelectorAll(message);
const callDice = message => call('.dice');
const addActive = player => call(`.player--${player}`).classList.add('player--active');
const removeActive = player => call(`.player--${player}`).classList.remove('player--active');
const toggleActive = player => call(`.player--${player}`).classList.toggle('player--active');
const changeCurrent = (player,current) => callId(`current--${player}`).textContent = current;
const winner = (player,flag) => {
    if(flag === 1) return call(`.player--${player}`).classList.add(`player--winner`);
    else return call(`.player--${player}`).classList.remove(`player--winner`); 
};
let activePlayer = 0;
let score = [0,0];
let currentScore = 0;
let playing = true;

//initial state
function init(){
    for(let i=0; i < 2; i++){
        callId(`score--${i}`).textContent = 0; 
        callId(`current--${i}`).textContent = 0; 
    }
    callDice().classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    addActive(activePlayer); 
    removeActive(activePlayer+1);
}
init();
//switchPlayer
function switchPlayer(){
    currentScore = 0;
    changeCurrent(activePlayer,currentScore);
    toggleActive(activePlayer);
    activePlayer = activePlayer === 1 ? 0:1;
    toggleActive(activePlayer);
}
//roll
call('.btn--roll').addEventListener('click',function(){
    if(playing){
        const dice = Math.trunc(Math.random()*6)+1;
        callDice().classList.remove('hidden');
        callDice().src = `dice-${dice}.png`;
        if(dice !== 1){
            currentScore += dice;
            changeCurrent(activePlayer,currentScore);
        }else{
            switchPlayer();
        }}
});
call('.btn--hold').addEventListener('click', function(){
    if(playing){
        score[activePlayer] += currentScore;
        callId(`score--${activePlayer}`).textContent = score[activePlayer];
        if(score[activePlayer] >= 50){
            winner(activePlayer,1);
            changeCurrent(activePlayer,0);
            removeActive(activePlayer);
            playing = false;
        }else{
            switchPlayer();
    }}
});
call('.btn--new').addEventListener('click', function(){
    score = [0,0];
    winner(activePlayer,0);
    init(); 
    playing = true;
});