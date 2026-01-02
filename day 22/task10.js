function login(username,password) {
    if (username === "admin" && password ==="9344") {
        return "Login successful";
    }else {
        return "Try again";
    }
}

console.log(login("admin","9344"));
console.log(login("user","4444"));