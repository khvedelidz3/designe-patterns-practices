import {bonusVisitor, Developer, Manager} from "./index";

const employee = new Manager(200);

employee.accept(bonusVisitor);

console.log(employee.bonus);
