'use strict'

let title = "JS_project";
let screens = "Простые, Сложные, Интерактивные";
// let screenPrice = 57;
let rollback = 100;
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

// //task 3
// let title = prompt("Как называется ваш проект?");
// console.log(title);

// //task 4
// let screens  = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
// console.log(screens);

//task 5
let screenPrice   = +prompt("Сколько будет стоить данная работа?", "12000");
console.log(screenPrice );

//task 6
let adaptive = confirm("Нужен ли адаптив на сайте?");

//task 7
let service1   = prompt("Какой дополнительный тип услуги нужен?");
console.log(service1);

let servicePrice1   = +prompt("Сколько это будет стоить?");
console.log(servicePrice1);

let service2   = prompt("Какой дополнительный тип услуги нужен?");
console.log(service2);

let servicePrice2   = +prompt("Сколько это будет стоить?");
console.log(servicePrice2);

//task 8
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
console.log(fullPrice);

//task 9
let servicePercentPrice = Math.ceil(fullPrice - rollback );
console.log(servicePercentPrice);

//task 10
switch (true) {
    case fullPrice >= 3000:
        console.log("Даем скидку в 10%");
        break;
    case 15000 < fullPrice && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
    case 15000 >= fullPrice && fullPrice > 0:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice <= 0:
        console.log("Что то пошло не так");
        break;
}