export interface IStatus {
    name: string;
    nextStatus: new () => IStatus;
    next(): IStatus;
}
