const student = {
    id: 101,
    name: "selva",
    age: 20,
    course: "javascript"

};
const {name, age} = student;
console.log(name);
console.log(age);

const {name: studentname, course} = student;
console.log(studentname);
console.log(course);

const {city= "chennai"} = student;
console.log(city);

function showstudent({name,age}) {
    console.log(`${name} is ${age} years old`);
}


showstudent(student);