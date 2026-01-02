class Student { 
    constructor(name, marks) {
        this.name = name;
        this.marks =  marks;
    }
}


Student.prototype.getResult = function () {
    if (this.marks >=40) {
        return  (this.name) + "has passed";

    }else { 
        return  (this.name) + "has failed";
    }
};

const s1 = new Student("Raj", 75);
const s2 = new Student("Lokesh", 35);

console.log(s1.getResult());
console.log(s2.getResult());