export type BmwModelT = "X5" | "X6";

export interface IBmw {
    model: BmwModelT;
    price: number;
    maxSpeed: number;
}
