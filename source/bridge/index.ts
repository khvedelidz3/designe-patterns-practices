import {IImplementation, InkType} from "./interfaces";

class Printer {
    constructor(protected i: IImplementation) {
    }

    public getInk() {
        return this.i.get();
    }
}

class EpsonPrinter extends Printer {
    public print() {
        return "Printer: Epson, Ink: " + this.getInk();
    }
}

class HPprinter extends Printer {
    public print() {
        return "Printer: HP, Ink: " + this.getInk();
    }
}

class Ink {
    constructor(protected type: InkType) {
    }

    public get() {
        return this.type;
    }
}

class AcrylicInk extends Ink implements IImplementation {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink implements IImplementation {
    constructor() {
        super("alcohol-based");
    }
}

export {
    EpsonPrinter,
    HPprinter,
    AcrylicInk,
    AlcoholInk,
};
