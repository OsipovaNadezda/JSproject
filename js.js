'use strict'

// let title = "JS_project";
// let screens = "Простые, Сложные, Интерактивные";
// // let screenPrice = 57;

// let fullPrice = 100500;
// let adaptive = true;

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);

// console.log(screens.length);

// console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани")
// console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани")

// console.log(screens.toLocaleLowerCase().split(','));

// console.log(fullPrice*(rollback/100));

//task 3
let title = prompt("Как называется ваш проект?");
let screens  = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice   = +prompt("Сколько будет стоить данная работа?", "12000");
let service1   = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2   = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = 100;
let allServicePrices;
let servicePercentPrice;


let getAllServicePrices = function (value1, value2) {
    allServicePrices = value1 + value2;
    return allServicePrices;
};

function getFullPrice(price, allPrice) {
    fullPrice = price + allPrice;
    return fullPrice;
}

let getTitle = function (string) {
    let stringTrim = string.trim();
    return stringTrim[0].toUpperCase() + stringTrim.substring(1);
};

let getServicePercentPrices = function (price, r_back) {
    servicePercentPrice = price - r_back;
    return servicePercentPrice;
};

let getRollbackMessage = function () {
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

console.log(getTitle(title));
console.log("Сумма всех дополнительных услуг " + getAllServicePrices(servicePrice1, servicePrice2));
console.log("Cумму стоимости верстки и стоимости дополнительных услуг " + getFullPrice(screenPrice, allServicePrices));
console.log("Итоговая стоимость за вычетом процента отката " + getServicePercentPrices(fullPrice, rollback));
console.log(getRollbackMessage());