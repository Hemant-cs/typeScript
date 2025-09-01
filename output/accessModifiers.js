"use strict";
//access modifiers can be used in classes to control the visibility of class members (properties and methods).
//There are three access modifiers in TypeScript: public, private, and protected. 
class Employee {
    //constructor to initialize the employee properties
    constructor(employeeName, employeeId, employeeSalary, employeeDepartment) {
        this.isOnLeave = false;
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeSalary = employeeSalary;
        this.employeeDepartment = employeeDepartment;
    }
    //method to mark the employee as on leave
    markAsOnLeave() {
        this.isOnLeave = true;
        console.log(`${this.employeeName} is marked as on leave.`);
    }
    //method to mark the employee as present
    markAsPresent() {
        this.isOnLeave = false;
        console.log(`${this.employeeName} is marked as present.`);
    }
    //method to give a raise to the employee
    giveRaise(amount) {
        this.employeeSalary += amount;
        console.log(`${this.employeeName} has been given a raise of $${amount}. New salary is $${this.employeeSalary}.`);
    }
}
const emp1 = new Employee("John Doe", 101, 50000, "Engineering");
console.log("Emp1 - ", emp1.employeeName); // Accessible
// console.log(emp1.employeeId); // Error: Property 'employeeId' is private and only accessible within class 'Employee'.
// console.log(emp1.employeeSalary); // Error: Property 'employeeSalary' is protected and only accessible within class 'Employee' and its subclasses.
class newEmployee extends Employee {
    constructor() {
        super("Hemant", 2562, 1000000, "IT");
    }
    getSalary() {
        return `getSalary - Employee Salary is: $${this.employeeSalary}`; // Accessible because it's protected and we are in a subclass
    }
}
const newEmp = new newEmployee();
console.log("newEmp : getSalary - ", newEmp.getSalary()); // Accessible - since it's protected and we are accessing it through a method in the subclass
console.log("newEmp : employeeDepartment - ", newEmp.employeeDepartment); // Accessible - public
