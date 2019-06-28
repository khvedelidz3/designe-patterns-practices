class TrafficTower {
    public airplanes: Airplane[] = [];
    constructor() {
        this.airplanes = [];
    }

    public requestPositions() {
        return this.airplanes.map((airplane) => {
            return airplane.position;
        });
    }
}

class Airplane {

    constructor(public position: number, public trafficTower: TrafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    public requestPositions() {
        return this.trafficTower.requestPositions();
    }
}

export {
    TrafficTower,
    Airplane,
};
