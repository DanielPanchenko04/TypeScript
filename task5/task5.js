class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `Model: ${this.model}\nYear: ${this.year}`;
    }
}

const car = new Car("Aston Martin", 2018);
console.log(car.getCarInfo());
 
