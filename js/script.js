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
        this.addTitle();
        // appData.addTitle();
        startBtn.addEventListener('click', appData.start);
        resetBtn.addEventListener('click', appData.reset);

        plusButton.addEventListener('click', appData.addScreenBlock);
        inputRange.addEventListener('click', appData.changeSpan);
    },
    addTitle: function () {
        document.title = title.textContent;
    },
    // addTitle: function () {
    //     document.title = title.textContent;
    // },
    start: function () {

        appData.addScreens();
        appData.addServices();
        appData.addPrices();
        appData.buttonChange();
        //appData.logger();

        console.log(appData);
        appData.showResult();
    },

    showResult: function () {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + appData.servicePricesNumber;
        totalCount.value = this.count; // выводим count на экран
        fullTotalCount.value = this.fullPrice;
        totalCountRollback.value = this.servicePercentPrice;
        document.querySelectorAll('.main-controls input, .main-controls select').forEach(item => item.disabled = true);
    },

    addScreens: function () {

        const screens = document.querySelectorAll('.screen');
        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            if (select && input.value) {
                this.screens.push({
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value,
                    count: +input.value // добавляем свойство count
                });
            } else {
                alert("Выберите тип и количество экранов!!!");
            }

        });
    },

    addServices: function () {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }

        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }

        });
    },

    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);
        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function () {
        if (this.screens.length > 1) {
            this.screenPrice = this.screens.reduce(function (previousValue, currentValue) {
                return +previousValue.price + +currentValue.price;
            });
            this.count = this.screens.reduce(function (previousValue, currentValue) {
                return +previousValue.count + +currentValue.count;
            });

        } else {
            this.screenPrice = +this.screens[0].price;
            this.count = +this.screens[0].count;
        }

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }
        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));

    },

    changeSpan: function () {
        inputRangeValue.textContent = inputRange.value;
        appData.rollback = +inputRange.value;
    },

    buttonChange: function () {
        startBtn.style.display = "none";
        resetBtn.style.display = "block";
    },

    reset: function () {
        startBtn.style.display = "block";
        resetBtn.style.display = "none";

        appData.title = '';
        appData.screens = [];
        appData.screenPrice = 0;
        appData.adaptive = true;
        appData.fullPrice = 0;
        appData.rollback = 0;
        appData.count = 0;
        appData.servicePricesPercent = 0;
        appData.servicePricesNumber = 0;
        appData.servicePercentPrice = 0;
        appData.servicesPercent = {};
        appData.servicesNumber = {};

        document.querySelectorAll('.main-controls input[type=checkbox]').forEach(item => item.checked = false);
        document.querySelectorAll('.screen').forEach((item, index) => {
            if (index != 0) {
                item.remove();
            } else if (index == 0) {
                
                item.querySelector('input[type=text]').disabled = false;
                item.querySelector('input[type=text]').value = "";
                item.querySelector('select').firstElementChild.selected = true;
            } 
        });
        document.querySelectorAll('.main-controls input[type=checkbox], .main-controls select')
            .forEach(item => item.disabled = false);


        total.value = '';
        totalCountOther.value = '';
        totalCount.value = ''; // выводим count на экран
        fullTotalCount.value = '';
        totalCountRollback.value = '';

        inputRange.value = 0;
        inputRange.disabled = false;
        inputRangeValue.textContent = inputRange.value;
        appData.rollback = +inputRange.value;
    },

    logger: function () {
        console.log("fullPrice " + this.fullPrice);
        console.log("servicePercentPrice " + this.servicePercentPrice);
        console.log("screens " + this.screens);
    }
};

appData.init();