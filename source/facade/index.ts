import { IShop } from "./interfaces";

class ShopFacade implements IShop {
    protected discount: IShop;
    protected shipping: IShop;
    protected fees: IShop;

    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    public calc(price: number) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount implements IShop {

    public calc(value: number) {
        return value * 0.9;
    }
}

class Shipping implements IShop {
    public calc() {
        return 5;
    }
}

class Fees implements IShop {

    public calc(value: number) {
        return value * 1.05;
    }
}

export default ShopFacade;
