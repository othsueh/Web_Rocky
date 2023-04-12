const btn = document.querySelector("button");
btn.addEventListener('click', () => {
    console.log('你點擊了我！');

    let pElem = document.createElement('p');
    pElem.textContent = '這是一段新加的文字。';
    document.body.appendChild(pElem);
});