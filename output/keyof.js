"use strict";
//keyof keywords in typeScript
const objectUserNew = {
    name: "Hemant",
    age: 24,
    isEmployed: true
};
const userKeyOf = "age"; //it will only allow key of UserNew interface
// const userKeyOfWrong: keyof UserNew = "address"; //it will give error because address is not key of UserNew interfaced
