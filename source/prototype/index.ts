import {ISheep, Prototype} from "./interfaces";

class Sheep implements ISheep, Prototype {

    constructor(public name: string, public weight: number) {
    }

    public clone(): ISheep {
        return new Sheep(this.name, this.weight);
    }
}

export default Sheep;
