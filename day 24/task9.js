class Shape {
    constructor(name) {
        this.name = name;
    }
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius =radius;

    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new Circle(5);

console.log("Shape:", circle1.name);
console.log("Radius:", circle1.radius);
console.log("Area of circle:", circle1.area().toFixed(2));