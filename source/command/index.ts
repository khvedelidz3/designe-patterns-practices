import {ICommand, ITurbine} from "./interfaces";

class Cockpit {
    public static execute(command: ICommand) {
        command.execute();
    }
}

class Turbine implements ITurbine {
    constructor(protected state: boolean = false) {

    }

    public on() {
        this.state = true;
    }

    public off() {
        this.state = false;
    }
}

class OnCommand implements ICommand {

    constructor(public turbine: Turbine) {
    }

    public execute() {
        this.turbine.on();
    }
}

class OffCommand implements ICommand {

    constructor(public turbine: Turbine) {
    }

    public execute() {
        this.turbine.off();
    }
}

export {
    Cockpit,
    Turbine,
    OnCommand,
    OffCommand,
};
