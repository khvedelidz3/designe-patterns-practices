import {Jedi, JediAdapter, Soldier} from "./index";

const jedi = new Jedi(23);
const soldier = new Soldier(22);

console.log(soldier.attack());

const jediAdapter = new JediAdapter(jedi);

console.log(jediAdapter.attack());
