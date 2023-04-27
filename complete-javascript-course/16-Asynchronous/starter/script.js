'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderCountryData = (data,className = '') =>{
    console.log(data);
    const html = `
        <article class="country ${className}">
        <img class="country__img" src=${data.flags.png}>
        <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;
    return ;
};

const renderError = (message) =>{
    countriesContainer.insertAdjacentText('beforeend',message);
};
//Use XMLHttpRequest to get data from API

// const getCountryData = (country) =>{
//     const request = new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v3.1/name/${country}`);
//     request.send();
//     request.addEventListener('load',function(){
//         const data = JSON.parse(request.responseText);
//         console.log(data[0]);
//         const html = `
//             <article class="country">
//             <img class="country__img" src=${data[0].flags.png} />
//             <div class="country__data">
//                 <h3 class="country__name">${data[0].name.official}</h3>
//                 <h4 class="country__region">${data[0].region}</h4>
//                 <p class="country__row"><span>👫</span>${(+data[0].population/1000000).toFixed(1)} people</p>
//                 <p class="country__row"><span>🗣️</span>${data[0].languages.eng}</p>
//                 <p class="country__row"><span>💰</span>${data[0].currencies.USD.symbol}</p>
//             </div>
//             </article>
//         `;
//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity = 1;
//     });
// };
// getCountryData('usa');


const getJSON = (country, errorMsg = "Something went wrong")=>
{
    return fetch(`https://restcountries.com/v3.1/alpha/${country}`)
    .then((response)=>{
        const {status} = response;
        const {ok} = response;
        const statusImageUrl = `https://http.cat/${status}`;
        const html = `<img src="${statusImageUrl}" alt = 'httpCat' width = 300px style = "object-position: center;"> `;
        countriesContainer.insertAdjacentHTML('beforeend',html);
        if(!ok){
            throw new Error(`${errorMsg}: (${status})`);
        }
        return response.json();})
};
// console.log(request.then(response=>response.json()));
const getCountryData = (country) =>{
    getJSON(country,`Country not found`)
    .then(data=>{
        renderCountryData(data[0],'');
        const neighbour = data[0].borders[0];
        if(!neighbour) throw new Error('Neighbour not found');
        return getJSON(neighbour,'Can not find neighbour country');})
    .then(data => renderCountryData(data[0],'neighbour'))
    .catch(error=>{
        console.error(`${error} 💥💥💥`);
        renderError(error.message);
    })
    .finally(()=>{
        countriesContainer.style.opacity = 1;
    });
};

//Event Loop in Practice
// console.log('test start!');
// setTimeout(()=>console.log('0 sec timer'),0);
// Promise.resolve('Resolved promise 1').then(res=>console.log(res));
// Promise.resolve('Resolved promise 2').then(res=>{
//     console.log(res);
//     setTimeout(()=>console.log(res));
//     setTimeout(()=>console.log(res));
// });
// console.log('test end!');

const lotteryPromise = new Promise(function(resolve, reject){
    console.log('Lottery draw is happening...');
    setTimeout(function(){
        if(Math.random() >= 0.5){
            resolve('You WIN 💰');
        }
        else {
            reject(new Error('You lost your money 💩'));
        }
    },2000)
});
lotteryPromise.then(res=>console.log(res)).catch(res=>console.error(res));

//Promisifying Timeout
const wait = (seconds) =>{
    return new Promise(resolve =>{
        setTimeout(resolve,seconds*1000);
    })
};

wait(2).then(()=>{
    console.log('I waited for 2 seconds');
    return wait(1);
}).then(()=>{
    console.log('I waited for 3 second');
    return wait(2);
}).then(()=>{
    console.log('I waited for 5 seconds');
})

//Callback Hell
    // setTimeout(()=>{
    //     console.log('1 second passed');
    //     setTimeout(()=>{
    //         console.log('2 second passed');
    //         setTimeout(()=>{
    //             console.log('3 second passed');
    //             setTimeout(()=>{
    //                 console.log('4 second passed');
    //             },1000)
    //         },1000)
    //     },1000)
    // },1000);

//Different between between resolve and reject
// Promise.resolve('abc').then(x=>console.log(x));
// Promise.reject('abc').then(x=>console.log(x)).catch(err=>console.error(new Error(err)));


//Promisifying Geolocation API
// navigator.geolocation.getCurrentPosition(position=>console.log(position),error=>console.log(error));
const getPosition = () =>{
    return new Promise((resolve,reject) => {
        navigator.geolocation.getCurrentPosition(resolve,reject);
    })
}

// const whereAmI = ()=>{ 
//     getPosition().then(pos=>{
//         const {latitude:lat, longitude:lng} = pos.coords;
//         console.log(lat, lng);
//     });
// }

//Async and Await
const whereAmI = async (country)=>{
    //Compare with Promise
    // fetch(`https://restcountries.com/v3.1/name/${country}`)
    // .then(res=>{console.log(res)});
    try{
        const pos = await getPosition();
        const {latitude:lat, longitude:lng} = pos.coords;
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1&auth=651715627254087739513x11676`);
        if(!resGeo.ok) throw new Error('Problem getting location data');
        const dataGeo = await resGeo.json();
        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.state}`);
        if(!res.ok) throw new Error('Problem getting Country data');
        const data = await res.json();
        renderCountryData(data[0]);
        return `You are in ${dataGeo.city}, ${dataGeo.country}`;
    }catch(error){
        console.error(`${error} 💥💥💥`);
        renderError(`Something went wrong (${error.message}) 💥💥💥, please try again`);
        throw error;
    }
}
btn.addEventListener('click',whereAmI);
console.log('1: Will get location');
//Promise way
// whereAmI()
// .then(city=>console.log(`2: ${city}`))
// .catch(error=>console.error(`2: ${error.message}`))
// .finally(()=>console.log('3: Finished getting location'));
//Async way
(async function(){
    try{
        const city = await whereAmI();
        console.log(`2: ${city}`);
    }
    catch(error){
        console.error(`2: ${error.message}`);
    }
    console.log('3: Finished getting location');
})();