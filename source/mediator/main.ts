import {Airplane, TrafficTower} from "./index";

const trafficTower = new TrafficTower();

const airplane1 = new Airplane(23, trafficTower);
const airplane2 = new Airplane(76, trafficTower);

console.log(trafficTower.requestPositions());

console.log(airplane1.requestPositions());
