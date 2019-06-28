import {IStrategy} from "./interfaces";

class ShoppingCart {
    public amount: number = 0;

    constructor(public discount: IStrategy) {
    }

    public checkout() {
        return new this.discount(this.amount).exec();
    }

    public setAmount(amount: number) {
        this.amount = amount;
    }

}

class GuestStrategy implements IStrategy {
    constructor(public amount: number) {
    }

    public exec() {
        return this.amount;
    }
}

class RegularStrategy implements IStrategy {
    constructor(public amount: number) {
    }

    public exec() {
        return this.amount * 0.9;
    }
}

class PremiumStrategy implements IStrategy {
    constructor(public amount: number) {
    }

    public exec() {
        return this.amount * 0.8;
    }
}

export {
    ShoppingCart,
    GuestStrategy,
    RegularStrategy,
    PremiumStrategy
};
