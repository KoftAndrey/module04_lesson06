'use strict';

const getAverageValue = (allCashbox) => {

let totalSum = 0, averageValue;

for (let number of allCashbox) {
  totalSum += number;
}

averageValue = Math.floor(totalSum / allCashbox.length);

return averageValue;

};

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370,];

console.log(getAverageValue(allCashbox))
