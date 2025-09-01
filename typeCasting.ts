//method 1
var inputElement = document.querySelector("input"); // here inputElement can be null or HTMLInputElement
console.log("1. ",inputElement?.id); // here ? is used to safely access id property if inputElement is not null
// If inputElement is null, it will not throw an error, but return undefined

//method 2
var inputElement2 = document.querySelector("input")! as HTMLInputElement; // here ! is used to assert that inputElement2 is not null, so it will not return undefined
console.log("2. ",inputElement2.type); 
