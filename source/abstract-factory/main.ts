import DroidProducer from "./index";

const myFactory = new DroidProducer().produce("pilot");

const droid = myFactory();

console.log(droid.info());
