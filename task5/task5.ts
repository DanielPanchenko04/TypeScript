class Car {
    model: string;
    year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    getCarInfo(): string {
        return `Model: ${this.model}\nYear: ${this.year}`;
    }
}

const car = new Car("Aston Martin", 2018);
console.log(car.getCarInfo());
 
