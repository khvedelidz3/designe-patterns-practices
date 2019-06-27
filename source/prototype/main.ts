import Sheep from "./index";

const sheep = new Sheep("John", 78);
console.log(sheep);
const sheep2 = sheep.clone();
sheep.name = "Bob";
console.log(sheep2);
console.log(sheep);
