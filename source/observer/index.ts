import {IObserver, IProduct} from "./interfaces";

class Product implements IProduct {
    constructor(public price: number = 0, public actions: IObserver[] = []) {
    }

    public setBasePrice(val: number) {
        this.price = val;
        this.notifyAll();
    }

    public register(observer: IObserver) {
        this.actions.push(observer);
    }

    public unregister(observer: IObserver) {
        this.actions = this.actions.filter((el) => !(el === observer));
    }

    public notifyAll() {
        return this.actions.forEach((el) => el.update(this));
    }
}

class Fees implements IObserver {
    public update(product: IProduct) {
        product.price = product.price * 1.2;
    }
}

class Proft implements IObserver {
    public update(product: IProduct) {
        product.price = product.price * 2;
    }
}

export {
    Product,
    Fees,
    Proft,
};
