function greet(name, callback) {
    console.log("Hello " + name);

    setTimeout(function () {
        callback();
    },2000);
}

function sayBye() {
    console.log("Goodbye");
}

greet("selvaa", sayBye);
