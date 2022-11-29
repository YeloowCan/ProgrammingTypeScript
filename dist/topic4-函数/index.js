"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addFun = (a, b) => {
    return a + b;
};
addFun(4, 3);
let reserve = (from, to, destination) => {
    return '';
};
let filter = (array, f) => {
    return array;
};
filter([1, 2, 3], (a) => a < 2);
function map(array, f) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        res[i] = f(element);
    }
    return res;
}
