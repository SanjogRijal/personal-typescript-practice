import { mapArrayGenerics } from "./src/generics";

// import consoleData from './src/process';
console.log("Hello World");


let array = new Array(1,2,3);
const mappedArray1 = mapArrayGenerics(array, (item) => item ^ 2);

let newArray = new Array('Sanjog', 'Rijal');
const mappedArray2 = mapArrayGenerics(newArray, (item) => item.split(''))

console.log(mappedArray1, mappedArray2);