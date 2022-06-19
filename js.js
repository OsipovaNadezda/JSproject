'use strict'

let title1;
let title;
let screens;
let screenPrice;
let adaptive;
let fullPrice;
let rollback = 100;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title1 = prompt("Как называется ваш проект?", "Проект");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
    } while (!isNumber(screenPrice));

    adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        let question;

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика1");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "Метрика2");
        }

        do {
            question = prompt("Сколько это будет стоит?", "1000");
        } while (!isNumber(question));

        sum += +question;
    }
    return sum;
};

function getFullPrice() {
    return +screenPrice + allServicePrices;
}

const getTitle = function (string) {
    let stringTrim = string.trim();
    return stringTrim[0].toUpperCase() + stringTrim.substring(1);
};

const getServicePercentPrices = function (price, r_back) {
    return price - r_back;
};

const getRollbackMessage = function () {
    switch (true) {
        case fullPrice >= 3000:
            return "Даем скидку в 10%";
            break;
        case 15000 < fullPrice && fullPrice < 30000:
            return "Даем скидку в 5%";
            break;
        case 15000 >= fullPrice && fullPrice > 0:
            return "Скидка не предусмотрена";
            break;
        case fullPrice <= 0:
            return "Что то пошло не так";
            break;
    }
};

const showTypeOf = function (var_function) {
    console.log(var_function, typeof var_function);
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);
title = getTitle(title1);

showTypeOf(title1);
showTypeOf(screens);
showTypeOf(screenPrice);

console.log("allServicePrices " + allServicePrices);
console.log(getTitle(title));
console.log("Сумма всех дополнительных услуг " + allServicePrices);
console.log("Cумму стоимости верстки и стоимости дополнительных услуг " + fullPrice);
console.log("Итоговая стоимость за вычетом процента отката " + servicePercentPrice);
console.log(getRollbackMessage());