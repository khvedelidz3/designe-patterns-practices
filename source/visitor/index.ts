import {IEmployee} from "./interfaces";

function bonusVisitor(employee: IEmployee) {
    if (employee instanceof Manager) {
        employee.bonus = employee.salary * 2;
    }
    if (employee instanceof Developer) {
        employee.bonus = employee.salary;
    }
}

class Employee implements IEmployee {
    public bonus: number = 0;

    constructor(public salary: number) {
        this.bonus = 0;
    }

    public accept(visitor: (par: IEmployee) => void) {
        visitor(this);
    }
}

class Manager extends Employee {
    constructor(salary: number) {
        super(salary);
    }
}

class Developer extends Employee {
    constructor(salary: number) {
        super(salary);
    }
}

export {
    Developer,
    Manager,
    bonusVisitor,
};
