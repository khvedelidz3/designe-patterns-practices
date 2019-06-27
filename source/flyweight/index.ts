class Color {
    constructor(public name: string) {
    }
}

class ColorFactory {
    public colors: Map<string, Color>;
    constructor() {
        this.colors = new Map();
    }

    public create(name: string) {
        if (this.colors.has(name)) {
            return this.colors.get(name);
        }
        this.colors.set(name, new Color(name));
        return this.colors.get(name);
    }
}

export {
    ColorFactory,
};
