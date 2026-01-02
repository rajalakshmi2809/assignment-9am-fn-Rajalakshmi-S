class User {
    constructor(name,email) {
        this.name = "selva";
        this.email = "rajselva@gmail.com";
    }

    login() {
        return `${this.name} has logged in successfully`;
    }

}

const user1 = new User("selva", "rajselva@gmail.com");

console.log(user1.name);
console.log(user1.email);

console.log(user1.login());