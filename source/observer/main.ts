import {Fees, Product, Proft} from "./index";

const product = new Product(15);
const proft1 = new Proft();
const proft2 = new Proft();
const fees = new Fees();

product.register(proft1);
product.register(proft2);
product.register(fees);
product.notifyAll();
console.log(product);
