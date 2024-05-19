"use strict";
const getResult = (items, callback) => {
    const result = [];
    for (let item in items) {
        result.push(callback(item));
    }
    return result;
};
console.log(getResult([1, 2, 3], (item) => {
    console.log(item);
}));
const identity = (arg) => {
    return arg;
};
class Pair {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }
    setValues({ value1, value2 }) {
        this.value1 = value1 !== null && value1 !== void 0 ? value1 : value1;
        this.value2 = value2 !== null && value2 !== void 0 ? value2 : value2;
        return { value1: this.value1, value2: this.value2 };
    }
    getValues() {
        return { value1: this.value1, value2: this.value2 };
    }
}
const pairObject = new Pair(1, 2);
console.log(pairObject.getValues());
console.log(pairObject.setValues({ value1: 3, value2: 'Sanjog' }));
//Generic Map Function
function mapArray(array, callback) {
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
        let transformation = callback(array[i]);
        mappedArray.push(transformation);
    }
    return mappedArray;
}
let array = new Array(1, 2, 3);
const mappedArray1 = mapArray(array, (item) => item ^ 2);
let newArray = new Array('Sanjog', 'Rijal');
const mappedArray2 = mapArray(newArray, (item) => item.split(''));
console.log(mappedArray1, mappedArray2);
