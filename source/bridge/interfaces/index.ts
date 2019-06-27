export type InkType = "acrylic-based" | "alcohol-based";

export interface IInk {
    type: string;
    get(): string;
}

export interface IPrinter {
    i: IInk;
    getInk(): string;
}
