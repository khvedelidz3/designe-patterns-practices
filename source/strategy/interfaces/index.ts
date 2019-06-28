export interface IStrategy {
    amount: number;
    exec(): number;
}
