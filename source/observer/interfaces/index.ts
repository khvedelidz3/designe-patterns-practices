export interface IObserver {
    update(val: IProduct): void;
}

export interface IProduct {
    price: number;
    actions: IObserver[];
    register(val: IObserver): void;
    unregister(val: IObserver): void;
    notifyAll(): void;
}
