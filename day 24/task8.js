class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    } 

    display() {
        console.log("name:", this.name,
             "age:", this.age, 
             "grade:",this.grade);
    }

}

const studdent1 = new Student("Raj", 20, "A");
const studdent2 = new Student("Loki", 22, "B");
const studdent3 = new Student("Rooba", 25, "C");

studdent1.display();
studdent2.display();
studdent3.display();