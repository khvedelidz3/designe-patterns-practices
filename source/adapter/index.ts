import {ISoldier} from "./interfaces";

class Soldier implements ISoldier {
    constructor(protected level: number) {
    }

    public attack() {
        return this.level * 1;
    }
}

class Jedi {
    constructor(public level: number) {
    }

    public attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter extends Jedi implements ISoldier {

    constructor(protected jedi: Jedi) {
        super(jedi.level);
    }

    public attack() {
        return this.attackWithSaber();
    }
}

export {
    Soldier,
    Jedi,
    JediAdapter,
};
