
function Vehicle() {}

Vehicle.prototype.start = function () {
  console.log("Vehicle started");
};

function Car() {}


Car.prototype = Object.create(Vehicle.prototype);


function ElectricCar() {}

ElectricCar.prototype = Object.create(Car.prototype);


const ev = new ElectricCar();

ev.start(); 