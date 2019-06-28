import Iterator from "./index";

const myIteraotr = new Iterator([1, 2, 3]);
console.log(myIteraotr.next());
console.log(myIteraotr.next());
console.log(myIteraotr.next());
console.log(myIteraotr.next());
console.log(myIteraotr.next());

while (myIteraotr.hasNext()) {
    console.log(myIteraotr.next());
}
