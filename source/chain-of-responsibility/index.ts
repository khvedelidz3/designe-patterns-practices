import {IDiscount} from "./interfaces";

class ShoppingCart {

    constructor(public products: number[] = []) {
    }

    public addProduct(p: number) {
        this.products.push(p);
    }
}

class Discount {

    public calc(products: number[]) {
        const ndiscount = new NumberDiscount();
        const pdiscount = new PriceDiscount();
        const none = new NoneDiscount();
        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);
        return ndiscount.exec(products);
    }
}

class NumberDiscount implements IDiscount {
    constructor(public next: IDiscount | null = null) {
    }

    public setNext(fn: IDiscount) {
        this.next = fn;
    }

    public exec(products: number[]):number {
        let result = 0;
        if (products.length > 3) {
            result = 0.05;
        }
        if (this.next !== null) {
            return result + this.next.exec(products);
        } else {
            return result + this.exec(products);
        }
    }
}

class PriceDiscount implements IDiscount {

    constructor(public next: IDiscount | null = null) {
    }

    public setNext(fn: IDiscount) {
        this.next = fn;
    }

    public exec(products: number[]): number {
        let result = 0;
        const total = products.reduce((a, b) => {
            return a + b;
        }, 0);

        if (total >= 500) {
            result = 0.1;
        }

        if (this.next !== null) {
            return result + this.next.exec(products);
        } else {
            return result + this.exec(products);
        }
    }
}

class NoneDiscount implements IDiscount {
    constructor(public next: IDiscount | null = null) {
    }

    public setNext(fn: IDiscount) {
        this.next = fn;
    }

    public exec(): number {
        return 0;
    }
}

export {
    ShoppingCart,
    Discount,
};
