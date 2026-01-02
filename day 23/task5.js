class Mobile {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    discount() {
      this.price = this.price - (this.price * 0.10);
      return this.price
    }
} 

const phone1 = new Mobile("samsung", 20000);
console.log("Before discount:", phone1.price);
console.log("After discount:", phone1.discount());