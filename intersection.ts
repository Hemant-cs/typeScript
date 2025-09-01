interface personTA {
    name: string;

}

interface personTB {
    age: number;
}

type personTC = personTA & personTB;

const personTC: personTC = {
    name: "John",
    age: 30,
    // city: "New York" // This will cause an error since 'city' is not defined in personTA or personTB
};

console.log(personTC);