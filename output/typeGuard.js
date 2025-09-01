"use strict";
//1. typeof type guard
class typeGuard {
    constructor(id) {
        this.userId = id;
    }
    getUserId(userId) {
        //it will be narrow down to string or number
        if (typeof userId === "string") {
            // userId // if you hover on userId it will show string type
            return `User id is string - ${userId.toUpperCase()}`;
        }
        else {
            // userId // if you hover on userId it will show number type
            return `User id is number - ${userId.toFixed(2)}`;
        }
    }
}
let tg1 = new typeGuard("HemantCS");
// console.log(tg1.getUserId("HemantCS")); // User id is string - HEMANTCS
// console.log(tg1.getUserId(12345)); // User id is number - 12345.00
//2. instanceof type guard
class userData {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class userCompany {
    constructor(companyName, location) {
        this.companyName = companyName;
        this.location = location;
    }
}
class User {
    constructor(user) {
        this.user = user;
    }
    getUserInfo() {
        if (this.user instanceof userData) {
            return `User name is ${this.user.name} and age is ${this.user.age}`;
        }
        else if (this.user instanceof userCompany) {
            return `User company name is ${this.user.companyName} and location is ${this.user.location}`;
        }
        else {
            return 'Unknown user type';
        }
    }
}
const user1 = new User(new userCompany("Hemant", "Delhi"));
console.log(user1.getUserInfo()); // User name is Hemant and age is 30
let userobj = {
    companyId: 5667,
    companyLocation: "New Delhi",
    companyName: "TCS",
    employeeAge: 25,
    employeeName: "Hemant"
};
let userobj2 = {
    name: "Hemant",
    age: 30,
    address: "New Delhi",
    companyName: "TCS"
};
function getUserInfo(user) {
    if (user && user.companyId) {
        return `User company name is ${user.companyName} and location is ${user.companyLocation}`;
    }
    else if (user && user.name) {
        return `User name is ${user.name} and age is ${user.age}`;
    }
    else {
        return 'Unknown user type';
    }
}
const userInfo1 = getUserInfo(userobj);
const userInfo2 = getUserInfo(userobj2);
const userInfo3 = getUserInfo({}); // Unknown user type
console.log(userInfo1); // User company name is TCS and location is New Delhi
console.log(userInfo2); // User name is Hemant and age is 30
console.log(userInfo3); // Unknown user type
