/**
 * Inheritance is a fundamental concept in object-oriented programming (OOP)
 * where a class (child or subclass) can inherit properties and methods
 * from another class (parent or superclass). This allows code reuse and
 * the creation of hierarchical relationships between classes.
 *
 * Example in TypeScript:
 */

class cars{
    carName: string;
    carPrice: number;
    carColor: string;
    isBaseModel: boolean;

    constructor(carName: string, carPrice: number, carColor: string, isBaseModel: boolean){
        this.carName = carName;
        this.carPrice = carPrice;
        this.carColor = carColor;
        this.isBaseModel = isBaseModel;
    }

    getCarColor(): string{
        return `Your car color is : ${this.carColor}`;
    }

    getCarDetails(): string{
        return `Car Name: ${this.carName}, Car Price: $${this.carPrice}, Car Color: ${this.carColor}, Is Base Model: ${this.isBaseModel}`;
    }
}

class tataCars extends cars{
    constructor(carName: string, carPrice: number, carColor: string, isBaseModel: boolean){
        super(carName, carPrice, carColor, isBaseModel); // Call the parent class constructor
    }
}

const car1 = new tataCars("Currv", 900000, "Red", false);

console.log(car1.getCarDetails());