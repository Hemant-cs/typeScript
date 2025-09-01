"use strict";
class Company {
    constructor() {
        this.cLocation = "New Delhi";
    }
    static getName() {
        // return this.cLocation; // Error: Property 'cLocation' does not exist on type 'typeof Company'.
        //you can not access non-static variable inside static method
        return this.cName;
    }
    getLocation() {
        // return this.cName; // you cannot access static variable inside non-static method
        // return Company.cName; // you can access static variable using class nam
        return this.cLocation;
    }
}
Company.cName = "TCS";
console.log("company Name - ", Company.cName); //TCS // from static varibale
console.log("company name - ", Company.getName()); // TCS // from static method
console.log("company location - ", new Company().getLocation()); // TCS // from non-static method   
