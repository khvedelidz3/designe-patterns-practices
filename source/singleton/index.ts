class Person {
    public static getInstance(): Person {
        if (!Person.instance) {
            Person.instance = new Person();
        }
        return Person.instance;
    }

    private static instance: Person;
    public test: string;
}

export default Person;
