"use strict";
// let numberValue: number = 20;
// let stringValue: string = 'Sanjog Rijal';
// let isTrueBooleanValue: boolean = true || false;
// let implicitStringType = 'This is string';
// const implicitConstType = 'Only This Value';
// console.log(typeof(implicitConstType), typeof(implicitStringType));
// let isFunction : () => void | Function = (): void => {
//     console.log('I am a function type with return type void in typescript')
// }
// //Why is undefined assignable to variable of type void
// let isvoid: void = undefined;
// console.log(typeof([1,2,3]));
const getUsername = (name) => {
    return "Hello";
};
console.log(getUsername({ id: 1, name: "ok" }));
console.log(getUsername([1, 2, 3]));
