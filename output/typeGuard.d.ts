declare class typeGuard {
    userId: string | number;
    constructor(id: string | number);
    getUserId(userId: string | number): string;
}
declare let tg1: typeGuard;
declare class userData {
    name: string;
    age: number;
    constructor(name: string, age: number);
}
declare class userCompany {
    companyName: string;
    location: string;
    constructor(companyName: string, location: string);
}
declare class User {
    user: userData | userCompany;
    constructor(user: userData | userCompany);
    getUserInfo(): string;
}
declare const user1: User;
interface userInfo {
    name: string;
    age: number;
    address: string;
    companyName: string;
}
interface userInfoWithCompany {
    companyName: string;
    companyLocation: string;
    companyId: number;
    employeeName: string;
    employeeAge: number;
}
declare let userobj: userInfo | userInfoWithCompany;
declare let userobj2: userInfo | userInfoWithCompany;
declare function getUserInfo(user: userInfo | userInfoWithCompany): string;
declare const userInfo1: string;
declare const userInfo2: string;
declare const userInfo3: string;
