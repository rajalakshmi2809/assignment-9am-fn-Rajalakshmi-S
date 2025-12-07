const cartItem = {
    name: "laptop",
    price: 20000,
    quantity: 1
};
console.log("first update:", cartItem);
cartItem.name = "mobile";
cartItem.price = 16000;
cartItem.quantity = 2;
console.log("second update:", cartItem);