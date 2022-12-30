'use strict';

const getAveragePriceGoods = (allCashbox) => {

    let averagePriceGoods, numberOfGoods = 0, totalPrice = 0;

    for (let item of allCashbox) { 
        numberOfGoods += item[0];
        totalPrice += item[1];
    }

    averagePriceGoods = Math.round(totalPrice / numberOfGoods);

    return averagePriceGoods;
}

const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370],
];

 console.log(getAveragePriceGoods(allCashbox));