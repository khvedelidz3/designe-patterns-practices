import {ISoldier} from "./interfaces";

class Soldier implements ISoldier {
    constructor(protected level: number) {
    }

    public attack() {
        return this.level * 1;
    }
}

class Jedi {
    constructor(protected level: number) {
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter implements ISoldier {

    constructor(protected jedi: Jedi) {
    }

    public attack() {
        return this.jedi.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
