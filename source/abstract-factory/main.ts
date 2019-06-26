import DroidProducer from "./index";

let myFactory = DroidProducer.produce("battle");

let droid = new myFactory().getDroid();

console.log(droid);