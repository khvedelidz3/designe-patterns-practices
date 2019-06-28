export interface IEmployee {
    bonus: number;
    salary: number;

    accept(val: () => void): void;
}
