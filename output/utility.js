"use strict";
//1. Required
const objectUserNormal = {
    name: "Hemant",
    age: 24,
    address: "Delhi, India"
    // isEmployed: true //optional property - if you are not passing then will not give error
};
const objectUserRequired = {
    name: "Hemant",
    age: 24,
    address: "Delhi, India",
    isEmployed: true //now it is required property - if you are not passing then will give error
};
// 2. Partial
//if you have any required property in interface and you want to make it optional
// then you can use Partial utility type
const objectUserPartial = {
    name: "Hemant",
    address: "Delhi, India"
    // age: 24 //now it is optional property - if you are not passing then it will not give any error
};
// 3. Readonly
//if you have any property in interface and you want to make it readonly
// then you can use Readonly utility type
const objectUserReadonly = {
    name: "Hemant",
    age: 24,
    address: "Delhi, India"
};
//since it readonly property so we can't change the value of any property
// objectUserReadonly.isEmployed = true; //it will give error because isEmployed is readonly property
//objectUserReadonly.age = 25; //it will give error because age is readonly property
// 4. Pick
//if you want to pick some properties from interface
// then you can use Pick utility type
const objectUserPick = {
    name: "Hemant",
    age: 24
    // address: "Delhi, India" //it will give error because address is not picked property
};
// 5. Omit
//if you want to omit some properties from interface
// then you can use Omit utility type
const objetctUserOmit = {
    name: "Hemant",
    age: 24,
    // address: "Delhi, India" // it will give error because address is omitted property
    // isEmployed: true // it will give error because isEmployed is omitted property
};
const userRole = "admin"; //it will give error if you try to assign any value other than "admin", "user", "guest"
const objectUserRole = {
    admin: "Hemant",
    user: "John",
    guest: "Doe"
    // superAdmin: "Super Hemant" //it will give error because superAdmin is not a valid key
};
const myPet = "cat"; // valid
const myString = "Hello"; // valid
// const anotherString: NonNullableString = null; // error: Type 'null' is not assignable
// const yetAnotherString: NonNullableString = undefined; // error: Type 'undefined' is not assignable
