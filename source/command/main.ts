import {Cockpit, OffCommand, OnCommand, Turbine} from "./index";

const turbine = new Turbine();

const onCommand = new OnCommand(turbine);
const offCommand = new OffCommand(turbine);

Cockpit.execute(onCommand);
console.log(turbine);
Cockpit.execute(offCommand)
console.log(turbine);
