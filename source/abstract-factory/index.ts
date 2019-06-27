import { DroidModelType, IDroid } from "./interfaces";

class DroidProducer {
    public produce(kind: DroidModelType): () => IDroid {
        if (kind === "battle") {
            return this.battleDroidFactory;
        }

        return this.pilotDroidFactory;
    }

    protected battleDroidFactory() {
        return new B1();
    }

    protected pilotDroidFactory() {
        return new Rx24();
    }

}

class B1 implements IDroid {
    public info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements IDroid {
    public info() {
        return "Rx24, Pilot Droid";
    }
}

export default DroidProducer;