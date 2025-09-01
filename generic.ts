//if you to maintain type as same as input, params and return type then you can use generic

//here 'T' is a placeholder for type
//you can use any letter in place of 'T' but by convention 'T' is used

function getData<T>(value:T):T{
    return value;
}

const onlyString = getData("Hemant"); //here type is string
const onlyNumber = getData(123); //here type is number
const onlyBoolean = getData(true); //here type is boolean

console.log(onlyString);
console.log(onlyNumber);
console.log(onlyBoolean);

//if you are wondring why we are not using any data Type in function parameter
//because we are using generic 'T' which will maintain the type of input and output same

//if you use use any Type then it will not maintain the type of input and output same
//example
function getDataAny(value:any):any{
    return value;
}

const onlyStringAny = getDataAny("Hemant"); //here type is any
const onlyNumberAny = getDataAny(123); //here type is any
const onlyBooleanAny = getDataAny(true); //here type is any

console.log(onlyStringAny);
console.log(onlyNumberAny);
console.log(onlyBooleanAny);

//if you are dealing with array then you can use generic in array also

function getArray<T>(data:T[]):T[]{
    return data;
}

const stringArry = getArray(["Hemant","Chaurasia"]);

console.log(stringArry);
console.log(Array.isArray(stringArry)); //true