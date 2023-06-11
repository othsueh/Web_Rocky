'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann', 
  short: 'js',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  short: 'jd',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  short: 'stw',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  short: 'ss',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let currentAcc = '';
//topic : sort
let sortMov = false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  if(!sortMov){
    displayMovements(currentAcc.movements,true);
    sortMov = true;
  }
})
//topic : loan
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAcc.movements.some(mov=>mov>=amount*0.1)){
    currentAcc.movements.push(amount);
    updateUI(currentAcc);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
})

//topic : close account
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(inputCloseUsername.value === currentAcc.owner && Number(inputClosePin.value) === currentAcc.pin){
    const index = accounts.findIndex(acc=>acc.owner === currentAcc.owner);
    accounts.splice(index,1);
    labelWelcome.textContent = 'Log in to get started';
    containerApp.style.opacity = 0;
  }
})
//topic : transfer money
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value); 
  const receiverAcc = accounts.find(acc=>acc.owner === inputTransferTo.value);
  if(amount > 0 && receiverAcc&& currentAcc.balance >= amount && receiverAcc.owner != currentAcc.owner){
    currentAcc.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAcc);
  }
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();
})

//topic : display login
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  currentAcc = accounts.find(acc=>(acc.owner === inputLoginUsername.value)||(acc.short===inputLoginUsername.value));
  if(currentAcc.pin===Number(inputLoginPin.value)){
    containerApp.style.opacity = 100;
    labelWelcome.textContent = `Welcome back, ${currentAcc.owner.split(' ')[0]}`;
    updateUI(currentAcc);
  }
  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginPin.blur();

})

//subtopic : update info
const updateUI = function(acc){
    displaySum(acc);
    displayMovements(acc.movements);
    calcPrintBalance(acc);
}

// topic : display summary
const displaySum = function(data){
  const movements= data.movements;
  const totalDeposit = movements.filter(mov=>mov>0).reduce((acc,mov)=>acc+mov,0);
  const totalWithdrawal = movements.filter(mov=>mov<0).reduce((acc,mov)=>acc+mov,0);
  const interest = movements.filter(mov=>mov>0).map(deposit=>deposit*data.interestRate/100).filter(interest=>interest>=1).reduce((acc,interest)=>acc+interest,0);
  labelSumIn.textContent = `${totalDeposit}€`;
  labelSumOut.textContent = `${totalWithdrawal}€`;
  labelSumInterest.textContent = `${interest}€`;
}
// displaySum(account1.movements);

// topic : display movements
const displayMovements = (movements,sort=false) =>{
  containerMovements.innerHTML = '';
  const movs = sort ? movements.slice().sort((a,b)=>a-b) : movements;
  movs.forEach((mov,i)=>{
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `      
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>`
    containerMovements.insertAdjacentHTML('afterbegin',html);
  })
}
// displayMovements(account1.movements);
//topic : display balance
const calcPrintBalance = function(acc){
  acc.balance = acc.movements.reduce((arr,cur)=>arr+=cur,0);
  labelBalance.textContent = `${acc.balance}€`;
}
// calcPrintBalance(account1.movements);

// console.log(containerMovements.innerHTML);
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//topic : array method practice
//subtopic : bankDepositSum
// const bankDepositSum = accounts.flatMap(acc=>acc.movements).filter(mov=>mov>=0).reduce((sum,value)=>sum+=value,0);
// console.log(bankDepositSum);
//subtopic : deposit1000
// const numDeposits1000 = accounts.flatMap(acc=>acc.movements).reduce((count,value)=> (value>=1000)? count+1:count,0);
// console.log(numDeposits1000);
//subtopic : sums
// const {deposits,withdraws} = accounts.flatMap(acc=>acc.movements).reduce((sum,value)=>{
//   sum[value>0 ? 'deposits':'withdraws'] += Math.abs(value);
//   return sum;
// }
// ,{deposits : 0, withdraws : 0})
// console.log(deposits,withdraws);
//subtopic : convertTitle
// const convertTitle = function(title){
//   const capitalLize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a','an','or','but','the','on','in','with'];
//   const arrs = title.toLowerCase().split(' ').map(arr=>exceptions.includes(arr) ? arr : capitalLize(arr)).join(' ');
//   return capitalLize(arrs);
// } 
// console.log(convertTitle("hello how are you"));
// console.log(convertTitle("TherE is A big Camera"));
// console.log(convertTitle("An Big show"));
// const arr2 = new Array(1,2,3,4,5,6,7,8,9);
// console.log(arr2);
// const x = new Array(7);
// const y = new Array(7);
// x.fill(1);
// y.fill(1,3,5);
// console.log(x);
// console.log(y);
//subtopic : from method
// const s = Array.from('string');
// const z = Array.from({length:7},()=>1);
// const z2 = Array.from({length:7},(_,i)=>i+1);
// console.log(s,z,z2);
//subtopic : Calculate the movements
// labelBalance.addEventListener('click',function(){
//   const movementUI = Array.from(document.querySelectorAll('.movements__value'),el=>Number(el.textContent.replace('€','')));
//   console.log(movementUI);
// })

//topic : sort method
// //subtopic : string
// const owners = ['Jonas','Zach','Adam','Martha'];
// console.log(owners.sort());

// //subtopic : number
// const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements2.sort((a,b)=>a-b));

// //subtopic : boolean
// const x = [true,false];
// console.log(x.sort());
//topic : flatMap
// const overBalance = accounts.flatMap(acc=>acc.movements).reduce((acc,mov)=>acc+=mov,0);
// console.log(overBalance);
//topic : flat
// const arr = [[1,2,3],[4,[5,6]],7,8];
// console.log(arr.flat(2));
//topic : separate callback
// const judge = mov => mov >0;
// console.log(movements.filter(judge));
//topic : every method
// const everyDeposits = movements.every(mov=>mov>0);
// console.log(everyDeposits);
//topic : some method
// const anyDeposits = movements.some(mov=>mov>0);
// console.log(anyDeposits);
//topic : findIndex method
// const mov = movements.findIndex(mov=>mov===450);
// console.log(mov);

//topic : splice method
// movements.splice(2,3,300);
// console.log(movements);
//topic : find method
// const firstMov = movements.find(mov=>mov>0);
// console.log(firstMov);
// const account = accounts.find(acc=>acc.owner === 'Jessica Davis');
// console.log(account);
//topic : coding challenge #3
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = (datas) => datas.map(data=>(data<=2 ? data*2 : data*4 +16)).filter(age=>age>=18).reduce((acc,age,i,arr)=>acc+=age/arr.length,0);
// console.log(calcAverageHumanAge(data1));
// console.log(calcAverageHumanAge(data2));
//topic : chaining methods
// const depositUs = movements.filter(mov=>mov>0).map(mov=>mov*1.1).reduce((acc,mov)=>acc+mov,0);
// console.log(depositUs);

//topic : coding challenge #2
// const data1 = [5, 2, 4, 1, 15, 8, 3];
// const data2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = function(datas){
//   const humanAge = datas.map((data)=>{
//     if(data <= 2) return data*2;
//     else return 16+data*4;
//   })
//   const adult =humanAge.filter((age)=>age>=18); 
//   const avg = adult.reduce((acc,cur)=>acc+=cur,0) / adult.length;
//   return avg;
// }
// console.log(calcAverageHumanAge(data1))
// console.log(calcAverageHumanAge(data2))
// topic : reduce method
// const balance = movements.reduce((acc,cur,i)=>{
//   console.log(`Iteration ${i} : ${acc}`)
//   return acc + cur;
// },0);

// let balance2 = 0;
// movements.forEach(mov=>balance2 += mov)

//subtopic : calculate the minimum
// const min = movements.reduce((acc,cur)=>{
//   if (acc < cur)
//     return acc;
//   else 
//     return cur;
// },movements[0]);
// console.log(min);

//topic : filter method
// const deposits = movements.filter((mov)=>mov>0);
// console.log(deposits);

// const depositsFor = [];
// movements.forEach((mov)=>{
//   if(mov > 0) depositsFor.push(mov);
// })
// console.log(depositsFor);

// const withdrawals = movements.filter((mov)=>mov<0).map((mov)=>Math.abs(mov));
// console.log(withdrawals);
// topic : map method
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov*eurToUsd);
// const movementsUSDfor = [];
// movements.forEach(mov=>movementsUSDfor.push(mov*eurToUsd));
// console.log(movements);
// console.log('===');
// console.log(movementsUSD);
// const movementsDescriptions = movements.map((mov,i)=>`Movement ${i+1} : You ${mov>0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
// console.log(movementsDescriptions);

//subtopic : computing usernames
// const userName = (users) =>{
//   users.forEach((user)=>{
//     user.username = user.owner.toLowerCase().split(' ').map((name)=>name[0]).join('')});
//   }
// userName(accounts);
// console.log(accounts);

// topic : coding challenge #1
// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];
// const checkDogs = function(dogsJulia, dogsKate){
//   const realDogsJulia = dogsJulia.slice(1,-2);
//   const chekDogsBoth = realDogsJulia.concat(dogsKate);
//   chekDogsBoth.forEach((dog,i)=>{
//     const type = dog >= 3 ? 'adult' : 'puppy';
//     if(type === 'adult'){
//       console.log(`Dog number ${i+1} is an ${type}, and is ${dog} years old`);
//     }
//     else{
//       console.log(`Dog number ${i+1} is still a ${type} 🐶`);
//     }
//   })
// }
// checkDogs(dogsJulia, dogsKate);

// topic : simple array methods
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['f', 'g', 'h', 'i', 'j'];
// const num1 = [1,2];
// const num2 = [3,4];

// subtopic : concat
// const letters = arr.concat(arr2);
// const num3 = num1.concat(num2);
// console.log(num3);
// console.log(letters);
// console.log([...arr,...arr2]);

// subtopic : reverse
// const rra = arr.reverse();
// const num4 = num3.reverse();
// console.log(num4)
// console.log(rra);

// subtopic : join
// console.log(letters.join(' - '));

// subtopic : at
// const one = arr[0];
// const none = arr.at(0);
// console.log(none);

// topic : looping arrays : forEach
// movements.forEach(function(mov, i, arr){
//   console.log(`${i}: ${mov}`);
// });
// for(const [i,mov] of movements.entries()){
//   console.log(`${i}: ${mov}`);
// }

