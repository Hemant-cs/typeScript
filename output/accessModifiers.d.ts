declare class Employee {
    employeeName: string;
    private employeeId;
    protected employeeSalary: number;
    employeeDepartment: string;
    isOnLeave: boolean;
    constructor(employeeName: string, employeeId: number, employeeSalary: number, employeeDepartment: string);
    markAsOnLeave(): void;
    markAsPresent(): void;
    giveRaise(amount: number): void;
}
declare const emp1: Employee;
declare class newEmployee extends Employee {
    constructor();
    getSalary(): string;
}
declare const newEmp: newEmployee;
