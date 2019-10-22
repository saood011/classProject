export class Car {
    constructor(brand,color) {
      this.carname = brand;
      this.color = color;
    }
    drive() {
      return "I am drive my " + this.carname;
    }
}