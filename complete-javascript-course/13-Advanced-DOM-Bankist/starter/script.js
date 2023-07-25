'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal))
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//topic : Event Propagation in Practice
const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);
const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
console.log(randomColor(0,255));
document.querySelector('.nav__link').addEventListener
('click', function(e){
  this.style.backgroundColor = randomColor();
})
document.querySelector('.nav__links').addEventListener
('click', function(e){
  this.style.backgroundColor = randomColor();
})
document.querySelector('.nav').addEventListener
('click', function(e){
  this.style.backgroundColor = randomColor();
})

//topic : types of events and event handlers
const h1 = document.querySelector('h1');
const alertH1 = function(e){
  alert('addEventListener: Great! You are reading the heading :D');
//subtopic : removing event listener by using function expression
  // h1.removeEventListener('mouseenter',alertH1); 
};
// h1.addEventListener('mouseenter',alertH1);
//subtopic : removing event listener by using timeOut function
// setTimeout(()=>{h1.removeEventListener('mouseenter',alertH1)},3000);


//topic : smooth scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',(e)=>{
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Current scroll (X/Y)',window.pageXOffset,window.pageYOffset);
  // console.log('offset x/y',window.pageXOffset,window.pageYOffset);
  // console.log('height/width viewport',document.documentElement.clientHeight,document.documentElement.clientWidth);
  //subtopic : scrolling
  // window.scrollTo({
  //   left:s1coords.left+window.pageXOffset,
  //   top:s1coords.top+window.pageYOffset,
  //   behavior:'smooth'
  // })
  //modern way
  section1.scrollIntoView({behavior:'smooth'});
})

//topic : selecting, creating and deleting elements
//subtopic : selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
const header = document.querySelector('.header');
// console.log(header);
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);
// document.getElementById('section--1');
// const allButtons2 = document.querySelectorAll('button');
// const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);
// console.log(allButtons2);
// console.log(allButtons === allButtons2);
// console.log(document.getElementsByClassName('btn'));
document.q
//subtopic : creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);

//subtopic : deleting elements
document.querySelector('.btn--close-cookie').
addEventListener('click',function(){
  message.remove();//new method
  // message.parentElement.removeChild(message);//old method
})

//topic : styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// console.log(message.style.width);
// console.log(message.style.height);
// console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height,10)+30+'px';
// document.documentElement.style.setProperty('--color-primary','orangered');

//topic : attributes
const logo = document.querySelector('.nav__logo');
// logo.alt = 'Beautiful minimalist logo';
// console.log(logo.alt);

//subtopic : access same attribute but get different property
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

//subtopic : access non-standard attribute
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','Bankist');

//subtopic : dataset
// console.log(logo.dataset.versionNumber);

//topic : classes
// logo.classList.add('c','j');
// logo.classList.remove('c','j');
// logo.classList.toggle('c');
// console.log(logo.classList.contains('c'));

