export interface ICommand {
    execute(): void;
}

export interface ITurbine {
    on(): void;

    off(): void;
}
