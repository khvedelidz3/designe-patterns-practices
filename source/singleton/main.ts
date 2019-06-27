import Person from "./index";

const myperson = Person.getInstance();
myperson.test = "test string";

console.log(myperson);

const myperson2 = Person.getInstance();

console.log(myperson2);
