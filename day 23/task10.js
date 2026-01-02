class Student {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

class StudentManagement {
  constructor() {
    this.students = []; 
  }


  addStudent(student) {
    this.students.push(student);
    console.log(student.name + " added successfully!");}
  
  viewStudents() {
    console.log("All Students:");
    this.students.forEach((s) => {
      console.log("ID: " + s.id + ", Name: " + s.name + ", Age: " + s.age);
    });
  }

  
  findStudent(id) {
    const student = this.students.find((s) => s.id === id);
    if (student) {
      console.log("Student Found: ID: " + student.id + ", Name: " + student.name + ", Age: " + student.age);
    } else {
      console.log("Student not found with ID " + id);
    }
  }
}


const sms = new StudentManagement();


sms.addStudent(new Student(1, "Alice", 20));
sms.addStudent(new Student(2, "Bob", 21));


sms.viewStudents();


sms.findStudent(1);
sms.findStudent(3);