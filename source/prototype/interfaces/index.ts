export interface ISheep {
    name: string;
    weight: number;
}

export interface Prototype {
    clone(): ISheep;
}
