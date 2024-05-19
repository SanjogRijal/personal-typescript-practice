export const getResult  = <ItemsType, CallBackReturnType>(items: ItemsType[], callback: (arg: ItemsType) => CallBackReturnType) => {
    const result: CallBackReturnType[] = []
    for(let item in items) {
        result.push(callback(item as ItemsType));
    }
    return result;
}

console.log(getResult([1,2,3], <ItemsType>(item: ItemsType) => {
    console.log(item);
}));

export const identity = <T>(arg: T): T => {
    return arg as T;
}

export class Pair <T,K> {
    private value1: T;
    private value2: K;
    constructor(value1: T, value2:K) {
        this.value1 = value1;
        this.value2 = value2;
    }

    setValues({value1, value2}:{value1: T, value2: K}){
        this.value1 = value1 ?? value1;
        this.value2 = value2 ?? value2;
        return {value1: this.value1, value2: this.value2}
    }

    getValues() {
        return {value1: this.value1, value2: this.value2}
    }
}

export const pairObject = new Pair<number, number|string>(1,2);
console.log(pairObject.getValues());
console.log(pairObject.setValues({value1: 3, value2: 'Sanjog'}));


//Generic Map Function
export function mapArrayGenerics<ElementType, CallBackReturnType>(array: ElementType[], callback: (arg: ElementType) => CallBackReturnType): CallBackReturnType[] {
    let mappedArray: CallBackReturnType[] = []
    for(let i = 0; i < array.length; i++) {
        let transformation = callback(array[i]);
        mappedArray.push(transformation);
    }
    return mappedArray;
}
let array = new Array(1,2,3);
const mappedArray1 = mapArrayGenerics(array, (item) => item ^ 2);

let newArray = new Array('Sanjog', 'Rijal');
const mappedArray2 = mapArrayGenerics(newArray, (item) => item.split(''))

console.log(mappedArray1, mappedArray2);