import {IStatus} from "./interfaces";

class OrderStatus {
    constructor(public name: string, public nextStatus: IStatus) {
    }

    public next() {
        return this.nextStatus;
    }
}

class WaitingForPayment extends OrderStatus implements IStatus {
    constructor() {
        super("waiting", new Shipping());
    }
}

class Shipping extends OrderStatus implements IStatus {
    constructor() {
        super("shipping", new Delivered());
    }
}

class Delivered extends OrderStatus implements IStatus {
    constructor() {
        super("delivered", new Delivered());
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
