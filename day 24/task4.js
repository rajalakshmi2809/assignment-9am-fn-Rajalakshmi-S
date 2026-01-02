class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }


displayInfo() {
    console.log(`Name: ${this.name}, salary: ${this.salary}`);
}
}

const emp1 = new Employee("Raj", 30000);
emp1.displayInfo();