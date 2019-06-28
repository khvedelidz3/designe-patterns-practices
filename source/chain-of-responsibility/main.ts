import {Discount, ShoppingCart} from "./index";

const discount = new Discount();

const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(5);
shoppingCart.addProduct(500);
shoppingCart.addProduct(24);
shoppingCart.addProduct(477);

const result = discount.calc(shoppingCart.products);
console.log(result);
