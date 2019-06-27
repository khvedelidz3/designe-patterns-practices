import {IPrinter, InkType, IInk} from "./interfaces";

abstract class Printer implements IPrinter {
    constructor(public i: IInk) {
    }

    public getInk() {
        return this.i.get();
    }
}

class EpsonPrinter extends Printer {
    public print() {
        return "Printer: Epson, Ink: " + this.getInk()
    }
}

class HPprinter extends Printer {
    public print() {
        return "Printer: HP, Ink: " + this.getInk();
    }
}

abstract class Ink implements IInk{
    constructor(public type: InkType) {
    }

    public get() {
        return this.type;
    }
}

class AcrylicInk extends Ink implements IInk {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink implements IInk {
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
