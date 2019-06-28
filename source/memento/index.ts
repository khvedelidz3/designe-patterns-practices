class Memento {
    constructor(public value: string) {
    }
}

class Originator  {
    public static store(val: string) {
        return new Memento(val);
    }
    public static restore(memento: Memento) {
        return memento.value;
    }
}

class Caretaker {

    constructor(public values: Memento[] = []) {
    }

    public addMemento(memento: Memento): void {
        this.values.push(memento);
    }

    public getMemento(index: number): Memento {
        return this.values[index];
    }
}

export {
    Originator,
    Caretaker,
};
