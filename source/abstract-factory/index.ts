import { IDroid, DroidModelType } from "./interfaces"


class DroidProducer {
    public produce(kind: DroidModelType): () => IDroid {
        if (kind === 'battle') {
            return this.battleDroidFactory;
        }

        return this.pilotDroidFactory;
    }

    battleDroidFactory() {
        return new B1();
    }

    pilotDroidFactory() {
        return new Rx24();
    }

}

class B1 implements IDroid {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 implements IDroid {
    info() {
        return "Rx24, Pilot Droid";
    }
}

export default DroidProducer;