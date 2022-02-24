// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function () {
    return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function () {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function multiply() {
        return number * number;
    }
}

const fareDoubler = function multiply(number) {
    return number * 2;
}

const fareTripler = function multiply(number) {
    return number * 3
}

function selectDifferentDrivers(drivers, functions) {
    if (functions === returnFirstTwoDrivers) {
        return drivers.slice(0, 2)
    }
    else if (functions === returnLastTwoDrivers) {
        return drivers.slice(2, 4)
    }
}