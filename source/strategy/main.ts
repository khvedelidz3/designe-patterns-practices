import {premiumStrategy, ShoppingCart , guestStrategy, regularStrategy} from "./index";

const cart = new ShoppingCart(premiumStrategy);
cart.setAmount(100);

console.log(cart.checkout());
