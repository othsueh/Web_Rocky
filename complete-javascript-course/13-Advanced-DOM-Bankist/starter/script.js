'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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
//topic : lazy loading images
const loadImg = function(entries,observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
}
const imgTargets = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver(loadImg,
  {
    root : null,
    threshold : 0,
    rootMargin : '200px',
  });
imgTargets.forEach(img=>imageObserver.observe(img));

//topic : revealing elements on scroll
const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection,
  {
    root : null,
    threshold : 0.15,
  })
allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})


//topic : sticky navigation - use intersection observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function(entries){
  const [entry] = entries;
  nav.classList.toggle('sticky',!entry.isIntersecting);
}
const headerObserver = new IntersectionObserver(stickyNav,{
  root:null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})
headerObserver.observe(header);
// const obsCallback = function(entries,observer){
//   entries.forEach(entry=>{
//     console.log(entry);
//   })

// }
// const obsOptions = {
//   root: null, //null means viewport
//   threashold: [0,0.2]

// };
// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);
//topic : sticky navigation - use scroll event
// const initScroll = section1.getBoundingClientRect();
// window.addEventListener('scroll',function(e){
//   if(window.scrollY > initScroll.top){
//     nav.classList.add('sticky');
//   }else{
//     nav.classList.remove('sticky');
//   }
// });


//topic : menu fade animation
const handleHover = function(e){
  if(e.target.classList.contains('nav__link')){
    const clicked = e.target;
    const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
    const logo = clicked.closest('.nav').querySelector('img');
    siblings.forEach(el=>{
      if(el!==clicked) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover',handleHover.bind(0.5));
nav.addEventListener('mouseout',handleHover.bind(1));


//topic : Tabbed component
tabsContainer.addEventListener('click',(e)=>{
  const clicked = e.target.closest('.operations__tab');
  if(!clicked) return;
  // console.log(clicked);
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t=>t.classList.remove('operations__content--active'));
  //subtopic : guard clause
  clicked.classList.add('operations__tab--active');
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});
//topic : DOM traversing
//subtopic : going downwards : child
// const h1 = document.querySelector('h1');
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

//subtopic : going upwards : parents
// const header = h1.closest('.header');
// console.log(h1.parentElement);
// h1.closest('header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';
// console.log(h1.parentNode);
// console.log(document.querySelector('html').parentNode);

//subtopic : going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// });

//topic : Event delegation : implementing page navigation
//subtopic : page navigation-unefficient way
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   });
// });
//subtopic : page navigation-efficient way(bubbling up)
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
})


//topic : Event Propagation in Practice
// const randomInt = (min,max) => Math.floor(Math.random()*(max-min+1)+min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor(0,255));
//propagation : layer1
// document.querySelector('.nav__link').addEventListener
// ('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('LINK',e.target,e.currentTarget);
  // console.log(e.currentTarget === this);
  //subtopic : stop propagation
//   e.stopPropagation();
// })
//propagation : layer2
// document.querySelector('.nav__links').addEventListener
// ('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER',e.target,e.currentTarget);
// })
//propagation : layer3
// document.querySelector('.nav').addEventListener
// ('click', function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV',e.target,e.currentTarget);
// })

//topic : types of events and event handlers
// const h1 = document.querySelector('h1');
// const alertH1 = function(e){
//   alert('addEventListener: Great! You are reading the heading :D');
//subtopic : removing event listener by using function expression
  // h1.removeEventListener('mouseenter',alertH1); 
// };
// h1.addEventListener('mouseenter',alertH1);
//subtopic : removing event listener by using timeOut function
// setTimeout(()=>{h1.removeEventListener('mouseenter',alertH1)},3000);


//topic : smooth scrolling

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

