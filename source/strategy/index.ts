import {IStrategy} from "./interfaces";

class ShoppingCart {
    public amount: number = 0;

    constructor(public discount: (val:number)=>number) {
    }

    public checkout() {
        return this.discount(this.amount);
    }

    public setAmount(amount: number) {
        this.amount = amount;
    }

}
const guestStrategy = (amount: number): number => {
    return amount
}
const regularStrategy = (amount: number): number => {
    return amount * 0.9;
 };
 
 const premiumStrategy = (amount: number): number => {
    return amount * 0.8;
 };

export {
    ShoppingCart,
    guestStrategy,
    regularStrategy,
    premiumStrategy
};
