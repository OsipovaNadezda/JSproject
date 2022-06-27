'use strict'

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 10,
    allServicePrices: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();

        appData.logger();
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    asking: function () {
        let stringTitle = '';
        do {
            stringTitle = prompt("Как называется ваш проект?", "Проект");
        } while (appData.isNumber(stringTitle));

        appData.title = stringTitle;

        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (appData.isNumber(name));

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({
                id: i,
                name: name,
                price: price
            });
        }

        for (let i = 0; i < 2; i++) {
            let price = 0;
            let name = '';

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (appData.isNumber(name));

            do {
                price = prompt("Сколько это будет стоит?");
            } while (!appData.isNumber(price));

            appData.services[name + i] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        // for (let screen of appData.screens) {
        //     appData.screenPrice += screen.price;
        // }    

        appData.screenPrice = appData.screens.reduce(function (previousValue, currentValue) {
            return +previousValue.price + +currentValue.price;
        });
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key];
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.trim();
        appData.title = appData.title[0].toUpperCase() + appData.title.trim().substring(1).toLocaleLowerCase();
    },

    getRollbackMessage: function () {
        switch (true) {
            case appData.fullPrice >= 3000:
                return "Даем скидку в 10%";
                break;
            case 15000 < appData.fullPrice && appData.fullPrice < 30000:
                return "Даем скидку в 5%";
                break;
            case 15000 >= appData.fullPrice && appData.fullPrice > 0:
                return "Скидка не предусмотрена";
                break;
            case appData.fullPrice <= 0:
                return "Что то пошло не так";
                break;
        }
    },
    logger: function () {

        // for (let key in appData) {
        //     console.log("Ключ: " + key + ". Значение: " + appData[key]);
        // };
        console.log("fullPrice " + appData.fullPrice);
        console.log("servicePercentPrice " + appData.servicePercentPrice);
        console.log("screens " + appData.screens);
        //  console.log(appData.allServicePrices);
        // console.log(appData.getRollbackMessage());
    }
};

appData.start();