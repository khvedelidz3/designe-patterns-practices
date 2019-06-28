import {Caretaker, Originator} from "./index";

const caretaker = new Caretaker();
caretaker.addMemento(Originator.store("memento1"));
caretaker.addMemento(Originator.store("memento2"));

console.log(Originator.restore(caretaker.getMemento(0)));
