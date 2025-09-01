//access modifiers can be used in classes to control the visibility of class members (properties and methods).
//There are three access modifiers in TypeScript: public, private, and protected. 

class Employee{
    //public/private/protected access modifier

    public employeeName: string;
    private employeeId: number; //private - it can only be accessed within the class
    protected employeeSalary: number; //protected - it can be accessed within the class and its subclasses
    public employeeDepartment: string;
    public isOnLeave: boolean = false;
    //constructor to initialize the employee properties
    constructor(employeeName: string, employeeId: number, employeeSalary: number, employeeDepartment: string){
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.employeeSalary = employeeSalary;
        this.employeeDepartment = employeeDepartment;
    }  
    //method to mark the employee as on leave
    public markAsOnLeave(): void {
        this.isOnLeave = true;
        console.log(`${this.employeeName} is marked as on leave.`);
    }
    //method to mark the employee as present
    public markAsPresent(): void {
        this.isOnLeave = false;
        console.log(`${this.employeeName} is marked as present.`);
    }
    //method to give a raise to the employee
    public giveRaise(amount: number): void {
        this.employeeSalary += amount;
        console.log(`${this.employeeName} has been given a raise of $${amount}. New salary is $${this.employeeSalary}.`);
    }  

}

const emp1 = new Employee("John Doe", 101, 50000, "Engineering");
console.log("Emp1 - ",emp1.employeeName); // Accessible
// console.log(emp1.employeeId); // Error: Property 'employeeId' is private and only accessible within class 'Employee'.
// console.log(emp1.employeeSalary); // Error: Property 'employeeSalary' is protected and only accessible within class 'Employee' and its subclasses.


class newEmployee extends Employee{
    constructor(){
        super("Hemant",2562, 1000000, "IT");
    }

    getSalary():string{
        return `getSalary - Employee Salary is: $${this.employeeSalary}`; // Accessible because it's protected and we are in a subclass
    }
}

const newEmp = new newEmployee();

console.log("newEmp : getSalary - ",newEmp.getSalary()); // Accessible - since it's protected and we are accessing it through a method in the subclass
console.log("newEmp : employeeDepartment - ",newEmp.employeeDepartment); // Accessible - public