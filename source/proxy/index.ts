import {ICar} from "./interfaces";

class CarProxy {
    protected car: Car;

    constructor(protected driver: Driver) {
        this.car = new Car();
    }

    public drive() {
        return !this.hasAccess() ? "too young to drive" : this.car.drive();
    }

    protected hasAccess() {
        if (this.driver.age < 18) {
            return false;
        }
        return true;
    }
}

class Car implements ICar {
    public drive(): string {
        return "driving";
    }
}

class Driver {
    constructor(public age: number) {
    }
}

export {
    Car,
    CarProxy,
    Driver,
};