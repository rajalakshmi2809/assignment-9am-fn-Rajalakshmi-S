class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }


displayInfo() {
    console.log(`Name: ${this.name}, salary: ${this.salary}`);
}
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    displayInfo() {
        console.log(
            `Name: ${this.name}, salary: ${this.salary}, department: ${this.department}`
        );

    }
}

const mgr1 = new Manager("Raj", 30000, "HR");
mgr1.displayInfo();