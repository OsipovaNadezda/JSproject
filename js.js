'use strict'

let title1 = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "12000");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let title;
let fullPrice;
let rollback = 100;
let allServicePrices;
let servicePercentPrice;

const getAllServicePrices = function (value1, value2) {
    return value1 + value2;
};

function getFullPrice(price, allPrice) {
    return price + allPrice;
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

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
servicePercentPrice = getAllServicePrices(fullPrice, rollback);
title = getTitle(title1);

showTypeOf(title1);
showTypeOf(screens);
showTypeOf(screenPrice);

console.log(getTitle(title));
console.log("Сумма всех дополнительных услуг " + allServicePrices);
console.log("Cумму стоимости верстки и стоимости дополнительных услуг " + fullPrice);
console.log("Итоговая стоимость за вычетом процента отката " + servicePercentPrice);
console.log(getRollbackMessage());