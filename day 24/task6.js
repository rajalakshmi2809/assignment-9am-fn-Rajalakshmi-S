class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }

    discountedPrice(discountPercent) {
        return this.price - (this.price * discountPercent / 100);

    }
}

const product1 = new Product("laptop", 50000);
console.log("product name:", product1.name);
console.log("original price:", product1.price);
console.log("Discountedprice (10%):", product1.discountedPrice(10));