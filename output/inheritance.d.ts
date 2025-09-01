/**
 * Inheritance is a fundamental concept in object-oriented programming (OOP)
 * where a class (child or subclass) can inherit properties and methods
 * from another class (parent or superclass). This allows code reuse and
 * the creation of hierarchical relationships between classes.
 *
 * Example in TypeScript:
 */
declare class cars {
    carName: string;
    carPrice: number;
    carColor: string;
    isBaseModel: boolean;
    constructor(carName: string, carPrice: number, carColor: string, isBaseModel: boolean);
    getCarColor(): string;
    getCarDetails(): string;
}
declare class tataCars extends cars {
    constructor(carName: string, carPrice: number, carColor: string, isBaseModel: boolean);
}
declare const car1: tataCars;
