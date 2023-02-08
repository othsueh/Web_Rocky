'use strict';
const call = message => document.querySelector(message);
const callAll = message => document.querySelectorAll(message);
const remove = message => message.classList.remove('hidden');
const add = message => message.classList.add('hidden');
const modal = call(".modal");
const overlay = call('.overlay');
const close = call('.close-modal');
const open = callAll('.show-modal');
const addHidden = function(){
    add(modal);
    add(overlay); 
};
const removeHidden = function(){
    console.log(`Button clicked`);  
    remove(modal);
    remove(overlay);
};
for(let i = 0 ; i < open.length; i++)
    open[i].addEventListener('click',removeHidden);

close.addEventListener('click',addHidden);
overlay.addEventListener('click',addHidden);
document.addEventListener('keydown',function(e){
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){ 
        addHidden();
    }
});