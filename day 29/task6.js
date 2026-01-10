function createLoginCounter() {
    let loginCount = 0;
    return function() {
        loginCount++;
        console.log(`user logged in ${loginCount} time`);
    };
}

const loginUser = createLoginCounter();

loginUser();
loginUser();
loginUser();