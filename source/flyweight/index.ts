class Color {
    constructor(public name: string) {
    }
}

class ColorFactory {
    static colors: Map<string, Color> = new Map();

    static create(name: string) {
        if (ColorFactory.colors.has(name)) {
            return ColorFactory.colors.get(name);
        }
        ColorFactory.colors.set(name, new Color(name));
        return ColorFactory.colors.get(name);
    }
}

export {
    ColorFactory,
};
