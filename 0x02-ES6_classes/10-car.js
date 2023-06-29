const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  cloneCar() {
    const { brand, motor, color } = this;
    return new Car(brand, motor, color);
  }
}

// Example usage
const car1 = new Car('Toyota', 'V6', 'Red');
const clonedCar = car1.cloneCar();

console.log(car1.brand); // Output: Toyota
console.log(clonedCar.brand); // Output: Toyota
console.log(car1.motor); // Output: V6
console.log(clonedCar.motor); // Output: V6
console.log(car1.color); // Output: Red
console.log(clonedCar.color); // Output: Red
