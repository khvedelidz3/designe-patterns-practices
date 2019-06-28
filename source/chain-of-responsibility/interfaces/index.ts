export interface IDiscount {
    next: IDiscount | null;
    setNext(val: IDiscount): void;
    exec(val: number[]): number;
}
