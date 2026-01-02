let person = {
    name: "Raj",
    age: 20,
    city: "chennai"
};

for  (let key in person) {
    console.log(key + ":" + person[key]);
}