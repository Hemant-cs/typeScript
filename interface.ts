interface info {
    company: string;
    name: string;
    age: number;
    city: string;
    isActive: boolean;
}

const myInfoNew: info = {
    company: "TCS",
    name: "Shanu",
    age: 25,
    city: "Delhi",
    isActive: true
};

// If you don't know possible key-value pairs
interface myInfoNew2 {
    [key: string]: string | undefined | boolean | number;
}

const myInfoNew2: myInfoNew2 = {
    name: "Hemant",
    age: 27,
    city: "Indore",
    company: "TCS"
};

myInfoNew2.isActive = true; // You can add property

console.log(myInfoNew2);

// How to take nested object
interface address {
    state: string;
    country: string;
}

interface myInfoNew3 {
    name: string;
    age: number;
    address: address;
}

const myInfoNew3: myInfoNew3 = {
    name: "Shanu",
    age: 26,
    address: {
        state: "Delhi",
        country: "India"
    }
};

console.log(myInfoNew3);