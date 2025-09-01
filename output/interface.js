"use strict";
const myInfoNew = {
    company: "TCS",
    name: "Shanu",
    age: 25,
    city: "Delhi",
    isActive: true
};
const myInfoNew2 = {
    name: "Hemant",
    age: 27,
    city: "Indore",
    company: "TCS"
};
myInfoNew2.isActive = true; // You can add property
console.log(myInfoNew2);
const myInfoNew3 = {
    name: "Shanu",
    age: 26,
    address: {
        state: "Delhi",
        country: "India"
    }
};
console.log(myInfoNew3);
