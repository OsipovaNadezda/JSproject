'use strict'

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 100,
    allServicePrices: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        appData.title = prompt("Как называется ваш проект?", "Проект");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?", "12000");
        } while (!isNumber(appData.screenPrice));

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {
            let question;

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "Метрика1");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "Метрика2");
            }

            do {
                question = prompt("Сколько это будет стоит?", "1000");
            } while (!isNumber(question));

            sum += +question;
        }
        return sum;
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getTitle: function (string) {
        let stringTrim = string.trim();
        return stringTrim[0].toUpperCase() + stringTrim.substring(1);
    },
    getServicePercentPrices: function (price, r_back) {
        return price - r_back;
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
    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
        appData.servicePercentPrice = appData.getServicePercentPrices(appData.fullPrice, appData.rollback);
        appData.title = appData.getTitle(appData.title);

        appData.logger();
    },
    logger: function () {

        for(let key in appData){
            console.log("Ключ: " + key + ". Значение: " + appData[key]);
        };
         console.log(appData.fullPrice);
         console.log(appData.servicePercentPrice);
         console.log(appData.allServicePrices);
         console.log(appData.getRollbackMessage());
    }
};

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

appData.start();