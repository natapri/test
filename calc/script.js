'use strict';


let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () =>{
    let request = new XMLHttpRequest(); // sozdaem object  zaprosa

// request.open(metod, url, async, login, pass);
request.open('GET', 'current.json'); // zapros k serveru(k fajlu json)
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.send();

// status
// statustText
// responseText / responce
// readyState
request.addEventListener('readystatechange', function(){
    if (request.readyState === 4 && request.status == 200){
        let data = JSON.parse(request.response);
        inputUsd.value = inputRub.value/data.usd;
    } else {
        inputUsd.value = "Что-то пошло не так!";
    }

});
});   