function customPow() {
    "use strict";
    var base = prompt("Base:", "");
    var exponent = prompt("Exponent:", "");
    var result = base;
    var i = 1;
    
    for (i; i < exponent; i++) {
        result = result * base;
        console.log(result);
    }
    
    console.log("Result: " + result);
}

function loginCheck() {
    
    var name;
    var login;
    var arrName = [];
    var i = 0;
    var noname = 0;
    
    for (i; i < 5; i++) {
        arrName[i] = prompt("Введите имя:", "");
    }
    
    console.log(arrName);
    
    login = prompt("Зайти на сайт как:", "");
    
    for (var log in arrName ) {
        console.log("in for");
        if(login === log) {
            console.log(login + ", вы успешно вошли.");
            noname = 1;
            break;
        }
    }
    
    if(noname === 0) {
        alert("Нет такого пользователя: " + login);           
    }
}