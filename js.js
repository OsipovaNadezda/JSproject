let title = "JS_project";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 57;
let rollback = 100;
let fullPrice = 100500;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани")
console.log("Стоимость разработки сайта " + fullPrice + " рублей/ долларов/гривен/юани")

// let newScreens = screens.toLocaleLowerCase();
// console.log(newScreens);
// console.log(newScreens.split());
// var space = ' ';
// console.log(newScreens.split(space));

console.log(screens.toLocaleLowerCase().split(','));

console.log(fullPrice*(rollback/100));