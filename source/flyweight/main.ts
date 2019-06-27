import {ColorFactory} from "./index";

const colorFactory = new ColorFactory();

console.log(colorFactory.create("red"));
console.log(colorFactory.create("green"));

console.log(colorFactory.colors);
