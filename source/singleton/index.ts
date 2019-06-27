class Person {
    private constructor() { }
    public static getInstance(): Person {
        if (!Person.instance) {
            Person.instance = new Person();
        }
        return Person.instance;
    }

    private static instance: Person;
}

export default Person;
