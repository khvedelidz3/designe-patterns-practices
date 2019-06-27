import {Car, CarProxy, Driver} from "./index";

const driver = new Driver(17);
const car = new CarProxy(driver);

console.log(car.drive());
