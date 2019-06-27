import {AcrylicInk, AlcoholInk, EpsonPrinter, HPprinter} from "./index";

const hpPrinter1 = new HPprinter(new AcrylicInk());
console.log(hpPrinter1.print());
const hpPrinter2 = new HPprinter(new AlcoholInk());
console.log(hpPrinter2.print());

const epsonPrinter1 = new EpsonPrinter(new AcrylicInk());
console.log(epsonPrinter1.print());
const epsonPrinter2 = new EpsonPrinter(new AlcoholInk());
console.log(epsonPrinter2.print());