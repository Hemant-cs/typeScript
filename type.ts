type info1 = {
    name: string;
}

type info2 = {
    age: number;
}
const personTypes: info1 & info2 = {
    name: "John",
    age: 30,
    // city: "New York" // This will cause an error since 'city' is not defined in info1 or info2
};

console.log(personTypes);

const personTypes2: info1 | info2 = {
    name: "John",
    // age: 30 // This is valid since we are using union type, either info1 or info2 can be used
};

console.log(personTypes2);