import { IBmw, BmwModelT } from "./interfaces";

class BmwFactory {
    public static create(type: BmwModelT) {
        if (type === "X5") {
            return new Bmw(type, 108000, 300);
        }
        if (type === "X6") {
            return new Bmw(type, 111000, 320);
        }
    }
}

class Bmw implements IBmw {
    constructor(public model: BmwModelT, public price: number, public maxSpeed: number) {
    }
}

export default BmwFactory;
