import {IIterator} from "./interfaces";

class Iterator implements IIterator {
    protected index: number = 0;

    constructor(protected elements: number[]) {
    }

    public next(): void | number {
        if (this.hasNext()) {
            return this.elements[this.index++];
        }
        return void 0;
    }

    public hasNext() {
        return this.index < this.elements.length;
    }
}

export default Iterator;
