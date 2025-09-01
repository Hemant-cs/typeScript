//1. typeof type guard
class typeGuard{
    userId: string | number;
    constructor(id: string | number){
        this.userId = id;
    }

    getUserId(userId: string | number):string{
        //it will be narrow down to string or number
        if(typeof userId === "string"){
            // userId // if you hover on userId it will show string type
            return `User id is string - ${userId.toUpperCase()}`;
        }
        else{
            // userId // if you hover on userId it will show number type
            return `User id is number - ${userId.toFixed(2)}`;
        }
    }
}

let tg1 = new typeGuard("HemantCS");


// console.log(tg1.getUserId("HemantCS")); // User id is string - HEMANTCS
// console.log(tg1.getUserId(12345)); // User id is number - 12345.00


//2. instanceof type guard


class userData{
    name: string;
    age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}

class userCompany{
    companyName: string;
    location: string;
    constructor(companyName: string, location: string){
        this.companyName = companyName;
        this.location = location;
    }
}

class User {
    user: userData | userCompany;
    constructor(user: userData | userCompany) {
        this.user = user;
    }

    getUserInfo(): string {
        if (this.user instanceof userData) {
            return `User name is ${this.user.name} and age is ${this.user.age}`;
        } else if (this.user instanceof userCompany) {
            return `User company name is ${this.user.companyName} and location is ${this.user.location}`;
        } else {
            return 'Unknown user type';
        }
    }
}

const user1 = new User(new userCompany("Hemant", "Delhi"));
console.log(user1.getUserInfo()); // User name is Hemant and age is 30

//3. custom type guard

interface userInfo{
    name: string;
    age: number;
    address: string;
    companyName: string;
}
interface userInfoWithCompany{
    companyName: string;
    companyLocation: string;
    companyId: number;
    employeeName: string;
    employeeAge: number;
}   

let userobj: userInfo | userInfoWithCompany = {
    companyId: 5667,
    companyLocation: "New Delhi",
    companyName: "TCS",
    employeeAge: 25,
    employeeName: "Hemant" 
}

let userobj2: userInfo | userInfoWithCompany = {
    name: "Hemant",
    age: 30,
    address: "New Delhi",
    companyName: "TCS"
}

function getUserInfo(user: userInfo | userInfoWithCompany): string{
    if(user as userInfoWithCompany && (user as userInfoWithCompany).companyId){
        return `User company name is ${(user as userInfoWithCompany).companyName} and location is ${(user as userInfoWithCompany).companyLocation}`;
    }else if(user as userInfo && (user as userInfo).name){
        return `User name is ${(user as userInfo).name} and age is ${(user as userInfo).age}`;
    }else{
        return 'Unknown user type';
    }
}

const userInfo1 = getUserInfo(userobj);
const userInfo2 = getUserInfo(userobj2);
const userInfo3 = getUserInfo({} as userInfo); // Unknown user type
console.log(userInfo1); // User company name is TCS and location is New Delhi
console.log(userInfo2); // User name is Hemant and age is 30
console.log(userInfo3); // Unknown user type