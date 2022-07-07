const title = document.getElementsByTagName('h1')[0];
const plusButton = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const inputRange = document.querySelector('div.rollback input[type=range]');
let inputRangeValue = document.querySelector('div.rollback .range-value');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

const screens = document.querySelectorAll('.screen');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    fullPrice: 0,
    rollback: 0,
    count: 0, // задаем свойство count
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        plusButton.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('click', appData.changeSpan);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        // appData.logger();

        console.log(appData);
        appData.showResult();
    },
    showResult: function () {
        total.value = appData.screenPrice.price;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        totalCount.value = appData.count; // выводим count на экран
        fullTotalCount.value = appData.fullPrice;
        totalCountRollback.value = appData.servicePercentPrice;
    },
    addScreens: function () {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;


            if (select && input.value) {
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value // добавляем свойство count
                });
            } else {
                alert("Выберите тип и количество экранов!!!");
            }
        });
        console.log(appData.screens);
    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
        });
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },
    addPrices: function () {
        appData.screenPrice = appData.screens.reduce(function (previousValue, currentValue) {
            return +previousValue.price + +currentValue.price;
        });
        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }
        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice.price * (appData.servicesPercent[key] / 100);
        }
        appData.fullPrice = +appData.screenPrice.price + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));

        appData.count = +appData.screenPrice.count; //count добавлем 

    },
    changeSpan: function () {
        inputRangeValue.textContent = inputRange.value;
        appData.rollback = +inputRange.value;

        console.log("rollback" + appData.rollback);
    },
    logger: function () {

        console.log("fullPrice " + appData.fullPrice);
        console.log("servicePercentPrice " + appData.servicePercentPrice);
        console.log("screens " + appData.screens);
    }
};

appData.init();