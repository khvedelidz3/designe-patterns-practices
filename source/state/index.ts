import {IStatus} from "./interfaces";

class OrderStatus implements IStatus{
    constructor(public name: string, public nextStatus: new() => IStatus) {
    }

    public next() {
        return new this.nextStatus();
    }
}

class WaitingForPayment extends OrderStatus {
    constructor() {
        super("waiting", Shipping);
    }
}

class Shipping extends OrderStatus {
    constructor() {
        super("shipping", Delivered);
    }
}

class Delivered extends OrderStatus {
    constructor() {
        super("delivered", Delivered);
    }
}

class Order {
    constructor(public state: OrderStatus = new WaitingForPayment()) {
    }

    public nextState() {
        this.state = this.state.next();
    }
}

export default Order;
